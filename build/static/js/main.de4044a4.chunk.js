(this["webpackJsonpanari-front"]=this["webpackJsonpanari-front"]||[]).push([[0],{21:function(e,s,t){},43:function(e,s,t){},44:function(e,s,t){"use strict";t.r(s);var c=t(0),n=t(2),i=t(15),a=t.n(i),r=(t(21),t(5)),o=t(4),d=t.n(o),l=(t(40),t(14),t(41),t(43),function(e){var s=e.stats,t=e.players;if(!s.league||!s.divisions||!t)return null;s.league.map((function(e){t.map((function(s){s.teams.map((function(s){e.team===s.name&&(s.points=e.points)})),s.teams.sort((function(e,s){return e.points<s.points?1:e.points>s.points?-1:e.points===s.points?e.name.toUpperCase()<s.name.toUpperCase()?-1:1:void 0}))}))})),t.map((function(e){var s=0;e.teams.map((function(e){s+=e.points})),e.points=s})),t=t.sort((function(e,s){return e.points<s.points?1:e.points>s.points?-1:e.points===s.points?e.name.toUpperCase()<s.name.toUpperCase()?-1:1:void 0}));var n=1;return t.map((function(e){e.standing=n++})),Object(c.jsx)("div",{className:"container-fluid",children:Object(c.jsxs)("div",{className:"row px-1",children:[Object(c.jsxs)("div",{className:"col-sm-4",children:[" ",t.map((function(e){return Object(c.jsxs)("div",{className:"row border border-dark rounded mt-1 bg-light",children:[" ",Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"col-9 font-weight-bolder",children:[" ",Object(c.jsxs)("h4",{children:[e.standing,". ",e.name]})]}),Object(c.jsxs)("div",{className:"col-3 text-right pr-2",children:[" ",Object(c.jsx)("h4",{children:e.points})]})]})}),Object(c.jsxs)("div",{className:"col-12",children:[" ",e.teams.map((function(s){var t="".concat(e.name).concat(s.name),n=s.division.substring(0,1);return Object(c.jsxs)("div",{className:"row border-bottom",children:[Object(c.jsxs)("div",{className:"col-1 pr-0",children:[" ",Object(c.jsx)("p",{children:n})]}),Object(c.jsxs)("div",{className:"col-9",children:[" ",Object(c.jsx)("p",{children:s.name})]}),Object(c.jsxs)("div",{className:"col-2 text-right",children:[" ",Object(c.jsx)("p",{children:s.points})]})]},t)})),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("p",{children:["Pistep\xf6rssi: ",e.pisteporssi," p."]})})})]})]},e.name)}))]}),Object(c.jsxs)("div",{className:"col-sm-4 px-3",children:[" ",s.divisions.map((function(e){return Object(c.jsxs)("div",{className:"row border border-dark rounded mt-1 bg-secondary",children:[" ",Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsxs)("div",{className:"row",children:[" ",Object(c.jsx)("div",{className:"col-12 text-center text-light",children:Object(c.jsx)("h3",{children:e.division})})]}),e.teams.map((function(e){var s="league".concat(e.team);return Object(c.jsxs)("div",{className:"row border-bottom border-dark font-weight-bold",children:[" ",Object(c.jsx)("div",{className:"col-10",children:Object(c.jsxs)("p",{children:[e.divisionRank,". ",e.team]})}),Object(c.jsx)("div",{className:"col-2 text-right",children:Object(c.jsx)("p",{children:e.points})})]},s)}))]})]},e.division)}))]}),Object(c.jsxs)("div",{className:"col-sm-4",children:[Object(c.jsx)("div",{className:"row border border-dark rounded mt-1 bg-dark text-white font-weight-bold",children:Object(c.jsxs)("div",{className:"col-12",children:[Object(c.jsx)("h3",{className:"text-center",children:"NHL"}),s.league.map((function(e){var s="league".concat(e.team);return Object(c.jsxs)("div",{className:"row border-bottom",children:[Object(c.jsx)("div",{className:"col-10",children:Object(c.jsxs)("p",{children:[e.leagueRank,". ",e.team]})}),Object(c.jsx)("div",{className:"col-2 text-right",children:Object(c.jsx)("p",{children:e.points})})]},s)}))]})}),Object(c.jsx)("div",{className:"row"})]})]})})}),j=function(e){var s=Object(n.useState)([]),t=Object(r.a)(s,2),i=t[0],a=t[1],o=Object(n.useState)([]),j=Object(r.a)(o,2),m=j[0],b=j[1];return Object(n.useEffect)((function(){d.a.get("/anari").then((function(e){a(e.data)})),d.a.get("/anari/pelaajat").then((function(e){b(e.data)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"text-center",children:"\xc4n\xe4riveikkaus"}),Object(c.jsx)(l,{stats:i,players:m})]})};a.a.render(Object(c.jsx)(j,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.de4044a4.chunk.js.map