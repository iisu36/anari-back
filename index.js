require('dotenv').config()
const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const cors = require('cors')

const Player = require('./player')

const revealAt = new Date(process.env.REVEAL_AT || '2026-09-29T21:00:00.000Z')

const isRevealed = () => Date.now() >= revealAt.getTime()

const teamsByDivision = {
  Atlantic: ['BOS', 'BUF', 'DET', 'FLA', 'MTL', 'OTT', 'TBL', 'TOR'],
  Central: ['UTA', 'CHI', 'COL', 'DAL', 'MIN', 'NSH', 'STL', 'WPG'],
  Metropolitan: ['CAR', 'CBJ', 'NJD', 'NYI', 'NYR', 'PHI', 'PIT', 'WSH'],
  Pacific: ['ANA', 'CGY', 'EDM', 'LAK', 'SJS', 'SEA', 'VAN', 'VGK'],
}

const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB', error.message)
  })

app.get('/anari', async (req, res, next) => {
  const standings = {}
  try {
    const result = await axios.get('https://api-web.nhle.com/v1/standings/now')

    result.data.standings.forEach((team) => {
      standings[team.teamAbbrev.default] = {
        teamName: team.teamName.default,
        teamId: team.teamAbbrev.default,
        points: team.points,
        division: team.divisionName,
        divisionRank: team.divisionSequence,
        leagueRank: team.leagueSequence,
        teamLogo: team.teamLogo,
      }
    })
    res.json(standings)
  } catch (err) {
    console.log('Failed to fetch standings from nhl api')
    next(err)
  }
})

app.get('/anari/reveal-status', (req, res) => {
  res.json({
    revealAt: revealAt.toISOString(),
    serverNow: new Date().toISOString(),
    revealed: isRevealed(),
  })
})

app.post('/anari/players', async (req, res, next) => {
  if (isRevealed()) {
    return res.status(403).json({ error: 'Veikkausaika on päättynyt.' })
  }

  const body = req.body
  const teams = Array.isArray(body.teams) ? body.teams : []
  const teamIds = teams.map((team) => team.teamId)
  const validTeamIds = Object.values(teamsByDivision).flat()
  const validSelection =
    teams.length === 12 &&
    new Set(teamIds).size === 12 &&
    teamIds.every((teamId) => validTeamIds.includes(teamId)) &&
    Object.values(teamsByDivision).every(
      (divisionTeams) =>
        teamIds.filter((teamId) => divisionTeams.includes(teamId)).length === 3,
    )

  if (
    !body.name?.trim() ||
    !validSelection ||
    !Number.isFinite(Number(body.statLeader))
  ) {
    return res.status(400).json({
      error:
        'Tarvitaan nimi, pistepörssin voittopisteet ja kolme joukkuetta per divisioona.',
    })
  }

  try {
    const existingPlayer = await Player.findOne({ name: body.name.trim() })
    if (existingPlayer) {
      return res.status(409).json({ error: 'Nimi varattu.' })
    }

    const player = new Player({
      name: body.name.trim(),
      teams,
      points: body.points,
      statLeader: body.statLeader,
    })
    const savedPlayer = await player.save()
    return res.status(201).json({
      name: savedPlayer.name,
      choicesRevealed: false,
    })
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Nimi varattu.' })
    }
    return next(error)
  }
})

app.get('/anari/players', async (req, res) => {
  const players = await Player.find({}).lean()
  if (!isRevealed()) {
    return res.json(
      players.map((player) => ({
        name: player.name,
        choicesRevealed: false,
      })),
    )
  }

  res.json(players.map((player) => ({ ...player, choicesRevealed: true })))
})

app.get('/anari/statLeader', async (req, res, next) => {
  try {
    const result = await axios.get(
      'https://api.nhle.com/stats/rest/fi/leaders/skaters/points?cayenneExp=season=20262027%20and%20gameType=2',
    )
    const player = {
      name: result.data.data[0]?.player.lastName,
      points: result.data.data[0]?.points,
    }
    res.json(player)
  } catch (err) {
    console.log('error reaching statleader')
    next(err)
  }
})

const PORT = process.env.PORT || 3001

app.listen(PORT)
