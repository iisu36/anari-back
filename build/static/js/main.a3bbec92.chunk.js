(this["webpackJsonpanari-front"]=this["webpackJsonpanari-front"]||[]).push([[0],{21:function(e,s,t){},44:function(e,s,t){},46:function(e,s,t){"use strict";t.r(s);var a=t(2),i=t(16),c=t.n(i),n=(t(21),t(4)),r=t(3),o=t.n(r),l=(t(41),t(15),t(42),t(44),{"Anaheim Ducks":24,24:"ANA","Arizona Coyotes":53,53:"ARI","Boston Bruins":6,6:"BOS_20082009-20222023","Buffalo Sabres":7,7:"BUF","Calgary Flames":20,20:"CGY","Carolina Hurricanes":12,12:"CAR","Chicago Blackhawks":16,16:"CHI","Colorado Avalanche":21,21:"COL","Columbus Blue Jackets":29,29:"CBJ","Dallas Stars":25,25:"DAL","Detroit Red Wings":17,17:"DET","Edmonton Oilers":22,22:"EDM","Florida Panthers":13,13:"FLA","Los Angeles Kings":26,26:"LAK","Minnesota Wild":30,30:"MIN","Montr\xe9al Canadiens":8,8:"MTL","Nashville Predators":18,18:"NSH","New Jersey Devils":1,1:"NJD","New York Islanders":2,2:"NYI","New York Rangers":3,3:"NYR","Ottawa Senators":9,9:"OTT","Philadelphia Flyers":4,4:"PHI_19992000-20222023","Pittsburgh Penguins":5,5:"PIT","San Jose Sharks":28,28:"SJS","Seattle Kraken":55,55:"SEA","St. Louis Blues":19,19:"STL","Tampa Bay Lightning":14,14:"TBL","Toronto Maple Leafs":10,10:"TOR","Vancouver Canucks":23,23:"VAN","Vegas Golden Knights":54,54:"VGK","Washington Capitals":15,15:"WSH","Winnipeg Jets":52,52:"WPG"}),d=t(0),j=function(e){var s=e.stats,t=e.players,a=e.porssi,i=t;if(!s.league||!s.divisions||!i)return null;s.league.map((function(e){i.map((function(s){s.teams.map((function(s){e.teamId===s.teamId&&(s.points=e.points,s.name=e.team,s.rank=e.leagueRank)})),s.teams.sort((function(e,s){return e.points<s.points?1:e.points>s.points?-1:e.points===s.points?parseInt(e.rank)<parseInt(s.rank)?-1:1:void 0}))}))})),i.map((function(e){var s=0;e.teams.map((function(e){s+=e.points})),e.points=s})),i=i.sort((function(e,s){return e.points<s.points?1:e.points>s.points?-1:e.points===s.points?Math.abs(e.pisteporssi-a.points)<Math.abs(s.pisteporssi-a.points)?-1:1:void 0}));var c=1;return i.map((function(e){e.standing=c++})),Object(d.jsx)("div",{className:"container-fluid",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm-4",children:[" ",Object(d.jsxs)("div",{className:"row border border-dark rounded mt-1 bg-warning",children:[" ",Object(d.jsx)("div",{className:"col-12 mt-1",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-9 font-weight-bolder px-1",children:[" ",Object(d.jsxs)("h4",{children:["P\xf6rssi: ",a.name]})]}),Object(d.jsxs)("div",{className:"col-3 text-right pr-1",children:[" ",Object(d.jsxs)("h4",{children:[a.points," p."]})]})]})})]},a.name),i.map((function(e){return Object(d.jsxs)("div",{className:"row border border-dark rounded mt-1 bg-light",children:[" ",Object(d.jsx)("div",{className:"col-12 mt-1",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-9 font-weight-bolder px-1",children:[" ",Object(d.jsxs)("h4",{children:[e.standing,". ",e.name]})]}),Object(d.jsxs)("div",{className:"col-3 text-right pr-1",children:[" ",Object(d.jsx)("h4",{children:e.points})]})]})}),Object(d.jsxs)("div",{className:"col-12 px-0",children:[" ",e.teams.map((function(s){var t="".concat(e.name).concat(s.name);return Object(d.jsxs)("div",{className:"row border-bottom mx-0",children:[Object(d.jsx)("div",{className:"col-1 px-1",children:Object(d.jsx)("img",{src:"https://assets.nhle.com/logos/nhl/svg/".concat(l[s.teamId],"_light.svg"),alt:"img",width:"20px",height:"20px"})}),Object(d.jsxs)("div",{className:"col-9 pr-0 pl-2",children:[" ",Object(d.jsx)("p",{children:s.name})]}),Object(d.jsxs)("div",{className:"col-2 pl-0 pr-1 text-right",children:[" ",Object(d.jsx)("p",{children:s.points})]})]},t)})),Object(d.jsxs)("div",{className:"row mx-0 bg-warning rounded-bottom",children:[Object(d.jsx)("div",{className:"col-9 pl-2",children:Object(d.jsx)("p",{children:"Pistep\xf6rssi:"})}),Object(d.jsxs)("div",{className:"col-3 pr-2 text-right",children:[" ",Object(d.jsxs)("p",{children:[e.pisteporssi," p."]})]})]})]})]},e.name)}))]}),Object(d.jsxs)("div",{className:"col-sm-4",children:[" ",s.divisions.map((function(e){return Object(d.jsxs)("div",{className:"row border-dark rounded mt-1 bg-secondary",children:[" ",Object(d.jsxs)("div",{className:"col-12 px-0 mx-0",children:[Object(d.jsxs)("div",{className:"row",children:[" ",Object(d.jsx)("div",{className:"col-12 text-center text-light",children:Object(d.jsx)("h3",{children:e.division})})]}),e.teams.map((function(e){var s="divisiom".concat(e.team);return Object(d.jsxs)("div",{className:"row border-bottom border-dark font-weight-bold mx-0",children:[" ",Object(d.jsx)("div",{className:"col-1 px-1",children:Object(d.jsx)("img",{src:"https://assets.nhle.com/logos/nhl/svg/".concat(l[e.teamId],"_light.svg"),alt:"img",width:"20px",height:"20px"})}),Object(d.jsxs)("div",{className:"col-9 pr-0 pl-2",children:[" ",Object(d.jsx)("p",{children:e.team})]}),Object(d.jsxs)("div",{className:"col-2 pl-0 pr-1 text-right",children:[" ",Object(d.jsx)("p",{children:e.points})]})]},s)}))]})]},e.division)}))]}),Object(d.jsxs)("div",{className:"col-sm-4",children:[Object(d.jsx)("div",{className:"row border border-dark rounded mt-1 bg-dark text-white font-weight-bold",children:Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsx)("h3",{className:"text-center",children:"NHL"}),s.league.map((function(e){var s="league".concat(e.team);return Object(d.jsxs)("div",{className:"row border-bottom",children:[Object(d.jsx)("div",{className:"col-1 px-1",children:Object(d.jsx)("img",{src:"https://assets.nhle.com/logos/nhl/svg/".concat(l[e.teamId],"_light.svg"),alt:"img",width:"20px",height:"20px"})}),Object(d.jsxs)("div",{className:"col-9 pr-0 pl-2",children:[" ",Object(d.jsx)("p",{children:e.team})]}),Object(d.jsxs)("div",{className:"col-2 pl-0 pr-1 text-right",children:[" ",Object(d.jsx)("p",{children:e.points})]})]},s)}))]})}),Object(d.jsx)("div",{className:"row"})]})]})})},h=function(e){var s=Object(a.useState)([]),t=Object(n.a)(s,2),i=t[0],c=t[1],r=Object(a.useState)([]),l=Object(n.a)(r,2),h=l[0],m=l[1],p=Object(a.useState)(0),b=Object(n.a)(p,2),x=b[0],O=b[1];return Object(a.useEffect)((function(){o.a.get("/anari").then((function(e){c(e.data)})),o.a.get("/anari/pelaajat").then((function(e){m(e.data)})),o.a.get("/anari/porssi").then((function(e){O(e.data)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"text-center",children:["\xc4n\xe4ri",Object(d.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/en/e/e4/NHL_Logo_former.svg",alt:"-",width:"100",height:"100"}),"veikkaus"]}),Object(d.jsx)(j,{stats:i,players:h,porssi:x})]})};c.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.a3bbec92.chunk.js.map