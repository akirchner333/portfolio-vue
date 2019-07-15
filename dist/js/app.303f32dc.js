(function(e){function t(t){for(var a,i,o=t[0],l=t[1],c=t[2],h=0,m=[];h<o.length;h++)i=o[h],n[i]&&m.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,o=1;o<r.length;o++){var l=r[o];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},s=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00ae":function(e,t,r){},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"0740":function(e,t,r){"use strict";var a=r("00ae"),n=r.n(a);n.a},"22c7":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("SiteHeader",{attrs:{firstName:e.firstName,lastName:e.lastName}}),r("main",[r("router-view")],1)],1)},s=[],i=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"header"}},[r("div",{staticClass:"left name"},[r("router-link",{attrs:{to:"/"}},[r("span",{attrs:{id:"first"}},[e._v(e._s(e.firstName))]),r("br"),r("span",{attrs:{id:"last"}},[e._v("  "+e._s(e.lastName))])])],1),r("div",{staticClass:"right name"},[r("router-link",{attrs:{to:"/"}},[r("span",{attrs:{id:"first"}},[e._v(e._s(e.firstName))]),r("br"),r("span",{attrs:{id:"last"}},[e._v("  "+e._s(e.lastName))])])],1)])},l=[],c={name:"SiteHeader",props:{firstName:String,lastName:String}},u=c,h=(r("e3c4"),r("2877")),m=Object(h["a"])(u,o,l,!1,null,null,null),d=m.exports,p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"root"}},[r("Intro",{attrs:{location:e.personalInfo.location,email:e.personalInfo.email}}),r("Projects"),r("Contact",e._b({},"Contact",e.personalInfo,!1))],1)},g=[],f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content",attrs:{id:"intro"}},[r("div",{staticClass:"section"},[r("div",{staticClass:"number one"},[e._v("1")]),r("div",{staticClass:"text"},[e._v("Full stack web developer, digital artist, and game designer living in "+e._s(e.location)+".")])]),e._m(0),r("div",{staticClass:"section"},[r("div",{staticClass:"number three"},[e._v("3")]),r("div",{staticClass:"text"},[e._v("Currently looking for web dev or game design work - "),r("a",{attrs:{href:"mailto:"+e.email}},[e._v("get in touch")]),e._v("!")])])])},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"section"},[r("div",{staticClass:"number two"},[e._v("2")]),r("div",{staticClass:"text"},[e._v("Interested in new interactions through technology, weird internet things, and big experiences.")])])}],_={name:"Intro",props:{location:String,email:String}},w=_,b=(r("0740"),Object(h["a"])(w,f,v,!1,null,null,null)),y=b.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"projects"}},[r("h1",[e._v("My Projects")]),r("div",{staticClass:"content",attrs:{id:"project-list"}},[r("div",{attrs:{id:"filters"}},[e._v("\n      Filter: \n      "),r("button",{class:{active:"top"==e.filter},on:{click:function(t){e.filter="top"}}},[e._v("Major Projects")]),r("button",{class:{active:"work"==e.filter},on:{click:function(t){e.filter="work"}}},[e._v("Jobs")]),r("button",{class:{active:"internet"==e.filter},on:{click:function(t){e.filter="internet"}}},[e._v("Internet")]),r("button",{class:{active:"game"==e.filter},on:{click:function(t){e.filter="game"}}},[e._v("Games")]),r("button",{class:{active:"bot"==e.filter},on:{click:function(t){e.filter="bot"}}},[e._v("Bots")]),r("button",{class:{active:"programming"==e.filter},on:{click:function(t){e.filter="programming"}}},[e._v("Computer Stuff")]),r("button",{class:{active:"street game"==e.filter},on:{click:function(t){e.filter="street game"}}},[e._v("Street Games")]),r("button",{class:{active:"programming"==e.filter},on:{click:function(t){e.filter="generative"}}},[e._v("Generative Art")])]),r("ul",e._l(e.selected,function(t){return r("li",[t.static?r("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]):r("router-link",{attrs:{to:"projects/"+t.url}},[e._v(e._s(t.name))]),r("div",{staticClass:"description"},[r("span",{domProps:{innerHTML:e._s(t.description)}})])],1)}),0),r("div",[e._v("\n      Other: \n      "),e._l(e.unselected,function(t){return r("span",[t.static?r("a",{attrs:{href:t.url}},[e._v(e._s(t.name))]):r("router-link",{attrs:{to:"projects/"+t.url}},[e._v(e._s(t.name))]),e._v("\n         \n      ")],1)})],2)])])},j=[],T=(r("6762"),r("2fdb"),[{name:"Top Chess",url:"top_chess",tags:["programming","bot","top","game","internet"],description:"Chess centered twitter bots"},{name:"Tower, Tower, Tower",url:"ttt",tags:["programming","game","top","internet"],description:"Massively multiplayer browser game about building a tower to the heavens."},{name:"Maquisard",url:"maquisard",tags:["programming","game","top"],description:"Charming game of snooping and investigation"},{name:"Object Get",url:"object_get",tags:["game","programming","street game","top"],description:"Street game with four teams one object"},{name:"Journey To the End of the Night",url:"journey",tags:["game","street game","top"],description:"Massive scale urban street game"},{name:"I Need A Picture of A Lobster",url:"https://pictureofalobster.herokuapp.com",static:!0,tags:["programming","internet","generative"],description:"Collaborative generative art tool."},{name:"The Number",url:"/internet/number.html",static:!0,tags:["programming","internet","generative"],description:"There is only one number and we all have to share it"},{name:"What Is A Game?",url:"/internet/whatisagame.html",static:!0,tags:["programming","internet","generative"],description:"Bernad Suits' classic essay but a bunch of wiley crows set up shop in it. Darn it!"},{name:"Is It Gonna Rain?",url:"https://isitgonnarain.herokuapp.com/",static:!0,tags:["programming","internet","generative"],description:"Weather service for fans of Steve Reich"},{name:"Lines and Colors",url:"/internet/colors.html",static:!0,tags:["programming","internet","generative"],description:"<img src='images/internet/internet_lines.png' height='200px'>"},{name:"A Vast Cave",url:"/internet/vastcave.html",static:!0,tags:["programming","internet","generative"],description:"Have you ever thought, what if there was a site like twitter except instead of a social network it was a vast cave, returning your own words back to you warped and echoed? Well, now there is."},{name:"If You See Another Person You Will Exploded",url:"/internet/explode.html",static:!0,tags:["programming","internet","generative"],description:"Self explanatory, I think"},{name:"Shark",url:"/internet/shark.html",static:!0,tags:["programming","internet","generative"],description:"Hungry shark here to eat vowels"},{name:"The Sun",url:"/internet/checkers.html",static:!0,tags:["programming","internet","generative"],description:"Experiment in using Perlin Noise to alter text."},{name:"Snake",url:"/internet/snake.html",static:!0,tags:["programming","internet","generative"],description:"It's a snake!"},{name:"Home Access Health Corporation",url:"home_access",tags:["work"]},{name:"Jokes4Miles",url:"jokes4miles",tags:["work"]}]),x={name:"Projects",data:function(){return{projects:T,filter:"top"}},computed:{selected:function(){var e=this;return this.projects.filter(function(t){return t.tags.includes(e.filter)})},unselected:function(){var e=this;return this.projects.filter(function(t){return!t.tags.includes(e.filter)})}}},C=x,S=(r("f6ca"),Object(h["a"])(C,k,j,!1,null,null,null)),I=S.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"contact"}},[r("h1",[e._v("Where To Find Me!")]),r("div",{staticClass:"content",attrs:{id:"content"}},[r("div",[e._v("\n      The best way to get in touch with me is by e-mail, the best way to keep up with my newest projects is on \n      "),e.mastodon?[e._v("Mastodon")]:[e._v("Twitter")],e._v(".\n    ")],2),r("table",[r("tr",[e._m(0),r("td",[e._v("Email")]),r("td",[r("a",{attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))])])]),e.mastodon?r("tr",[e._m(1),r("td",[e._v("Mastodon")]),r("td",[r("a",{attrs:{href:"https://scream.supply/@"+e.mastodon}},[e._v("@"+e._s(e.mastodon))])])]):e._e(),r("tr",[e._m(2),r("td",[e._v("Github")]),r("td",[r("a",{attrs:{href:"https://github.com/"+e.github}},[e._v(e._s(e.github))])])]),e.twitter?r("tr",[e._m(3),r("td",[e._v("Twitter")]),r("td",[r("a",{attrs:{href:"https://twitter.com/"+e.twitter}},[e._v("@"+e._s(e.twitter))])])]):e._e(),e.tumblr?r("tr",[e._m(4),r("td",[e._v("Tumblr")]),r("td",[r("a",{attrs:{href:"https://"+e.tumblr+".tumblr.com/"}},[e._v(e._s(e.tumblr))])])]):e._e(),e.itch?r("tr",[e._m(5),r("td",[e._v("Itch.io")]),r("td",[r("a",{attrs:{href:"https://"+e.itch+".itch.io/"}},[e._v(e._s(e.itch))])])]):e._e()])])])},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("i",{staticClass:"fa fa-envelope"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("i",{staticClass:"fab fa-mastodon"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("i",{staticClass:"fab fa-github"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("i",{staticClass:"fab fa-twitter"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("i",{staticClass:"fab fa-tumblr"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("i",{staticClass:"fas fa-gamepad"})])}],O={name:"Contact",props:{email:String,mastodon:String,github:String,twitter:String,tumblr:String,itch:String}},P=O,G=Object(h["a"])(P,A,M,!1,null,null,null),E=G.exports,N={name:"Root",props:{personalInfo:Object},components:{Intro:y,Projects:I,Contact:E}},q=N,$=Object(h["a"])(q,p,g,!1,null,null,null),B=$.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Project",{attrs:{header:"Top Chess",subheader:"Twitter Based Chess Bots",links:e.links,images:e.images}},[e._v("\n  Top Chess covers four twitter bots, each concerning chess in some fashion. "),r("a",{attrs:{href:"https://twitter.com/topchessmoves"}},[e._v("Top Chess Moves")]),e._v(" posts the finest randomly generated series of chess moves, with the move name, every hour. "),r("a",{attrs:{href:"https://twitter.com/topchessgames"}},[e._v("Top Chess Games")]),e._v(" is a twitter bot that plays chess, drawing moves from user suggestions. "),r("a",{attrs:{href:"https://twitter.com/chess_bot_alpha"}},[e._v("Chess Bot Alpha")]),e._v(" and "),r("a",{attrs:{href:"https://twitter.com/chess_bot_omega"}},[e._v("Chess Bot Omega")]),e._v(" play Top Chess Games, submitting moves drawn from Stockfish. Moves and Games are written in Elixir while Alpha and Omega are written in Python.\n")])},J=[],W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"project"}},[r("h1",[e._v(e._s(e.header))]),r("div",{staticClass:"content"},[r("h2",[e._v(e._s(e.subheader))]),r("div",{attrs:{id:"text"}},[e._t("default")],2),e.links?r("div",{attrs:{id:"links"}},[r("h3",[e._v("Links")]),e._l(e.links,function(t){return r("div",[r("a",{attrs:{href:t.url}},[e._v(e._s(t.text))])])})],2):e._e(),r("div",{attrs:{id:"images"}},[r("h3",[e._v("Images")]),e._l(e.images,function(t){return r("img",{attrs:{src:"images"+e.url+"/"+t.url,title:t.title}})})],2)])])},R=[],D={name:"Project",props:{header:String,subheader:String,links:Array,images:Array},computed:{url:function(){return this.$route.path}}},L=D,Y=(r("5e50"),Object(h["a"])(L,W,R,!1,null,null,null)),F=Y.exports,z=[{url:"https://twitter.com/topchessmoves",text:"Top Chess Moves"},{url:"https://twitter.com/topchessmoves",text:"Top Chess Moves"},{url:"https://github.com/akirchner333/topchessmoves",text:"Top Chess Moves Code on Github"},{url:"https://twitter.com/topchessgames",text:"The Top Chess Games Twitter"},{url:"chessgames_rules.html",text:"Top Chess Games Full Rules"},{url:"https://twitter.com/chess_bot_alpha",text:"Chess Bot Alpha"},{url:"https://twitter.com/chess_bot_omega",text:"Chess Bot Omega"}],V=[{url:"chess_move_1.gif",title:"Uhlidze's Position: Mik Trap"},{url:"chess_games_1.jpg",title:"Move from Top Chess Game 1"}],U={name:"TopChess",components:{Project:F},data:function(){return{links:z,images:V}}},Q=U,K=Object(h["a"])(Q,H,J,!1,null,null,null),X=K.exports,Z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Project",{attrs:{header:"Tower Tower Tower",subheader:"Build the tower, escape to the heavens",links:e.links,images:e.images}},[r("p",[e._v("\n    Tower Tower Tower is massively multiplayer, browser based, cooperative online game about building a tower to the heavens. Players place bricks on the tower, piling them up one by one and when the pile gets big enough and a level is completed, the next level becomes accessible. New levels introduce limits on communication, new challenges, and new mechanics until all players reach the heavens together. All of this is tied together with a glitchy, web 1.0 aesthetic that leaves players unsettled and unsure of what they can trust. Tower Tower Tower can be played at "),r("a",{attrs:{href:"https://towertowertower.herokuapp.com/"}},[e._v("towertowertower.herokuapp.com/")]),e._v(".\n  ")]),r("p",[e._v("\n    Tower Tower Tower was made over nine months as my thesis project at the NYU Game Center. I was interested in making a game for many people, that would be played over long periods of time, and in exploring how platforms and different forms of communication could influence online communities. I was the only designer and developer for Tower Tower Tower, building the back end in "),r("a",{attrs:{href:"http://rubyonrails.org/"}},[e._v("Ruby on Rails")]),e._v(" and the front end with "),r("a",{attrs:{href:"https://jquery.com/"}},[e._v("jQuery")]),e._v(" and "),r("a",{attrs:{href:"https://p5js.org/"}},[e._v("ps5.js")]),e._v(". Tower Tower Tower was designed through the iterative process - each week I would add a new feature or alter existing features and then get feedback from playtesters to see how they found it.\n  ")]),r("p",[e._v("\n    At the end of the thesis process in May 2016, Tower Tower Tower is a bit of clunky game. Feedback from colleagues and playtesters agree that the game is hard to understand and difficult to get into, which prevents it from getting the player base it would need to thrive. Throughout the process of design I reduced the scope at several points but if I were to do it again, I would likely reduce the scale even further. The project also suffered from gaps in my own technical knowledge, which slowed it down. Luckily making Tower Tower Tower has been immensely educational, meaning that I am on a much more solid footing for any future projects. I am proud of the work I did for Tower Tower Tower, even if the final product is not everything I hoped it would be.\n  ")])])},ee=[],te=[{url:"https://youtu.be/N4fGhe7Aa74",text:"Gameplay Video"},{url:"https://github.com/akirchner333/TowerTowerTower",text:"Code on Github"}],re=[{url:"TTT1.png",title:""},{url:"TTT9.gif",title:""},{url:"TTT2.gif",title:""},{url:"TTT5.png",title:""},{url:"TTT10.png",title:""},{url:"TTT7.png",title:""}],ae={name:"TowerTower",components:{Project:F},data:function(){return{links:te,images:re}}},ne=ae,se=Object(h["a"])(ne,Z,ee,!1,null,null,null),ie=se.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Project",{attrs:{header:"Maquisard",subheader:"A Charming Game of Snooping and Investigation",links:e.links,images:e.images}},[e._v("\n  As the lobby boy at a fancy hotel, the player receives clues from the resistance about the identity of a government agent and tries to figure out their identity by snooping on the guests over the course of three days. Players must listen in on conversations, peek into rooms, and observe the guests' habits in order to figure out which guests has all the traits of their target. Maquisard is a single-player puzzle game that has an unique non-linear investigation gameplay and draws on the visual aesthetics of Wes Anderson's film The Grand Budapest Hotel. Maquisard was made as a student project at the NYU Game Center in a team of six people, where I served as project manager. Maquisard can be downloaded for free at "),r("a",{attrs:{href:"http://maquisard.itch.io/maquisard"}},[e._v("itch.io")]),e._v(".\n")])},le=[],ce=[{url:"http://www.indiecade.com/games/e3_2015_games",text:"E3 Indiecade Booth 2015"},{url:"http://www.indiecade.com/games/selected/Maquisard",text:"Indiecade 2015 Official Selection: Digital Select"},{url:"http://bostonfig.com",text:"Boston Festival of Indie Games: Digital Showcase 2015"},{url:"http://www.ludicious.ch/?biz_company=maquisard/",text:"Ludicious: Student Competition"},{url:"http://www.theverge.com/2015/7/8/8915527/wes-anderson-grand-budapest-hotel-maquisard-game",text:"This computer game takes you into Wes Anderson's Grand Budapest Hotel - The Verge"},{url:"http://www.rockpapershotgun.com/2015/06/02/maquisard-grand-budapest-hotel-game/",text:"Snoop Around A Grand Budapest-y Hotel In Maquisard - Rock, Paper, Shotgun"},{url:"http://boingboing.net/2015/07/01/in-maquisard-you-solve-troubl.html",text:"In Maquisard, you solve trouble in a charming, ornate old hotel - Offworld"},{url:"http://niveloculto.com/maquisard-espiando-en-el-gran-hotel-budapest/",text:"Maquisard: Espiando en El Gran Hotel Budapest - Nivel Oculto"},{url:"http://www.indiewire.com/become-a-lobby-boy-in-this-new-wes-anderson-inspired-video-game",text:"This New Video Game Lets You Enter a Wes Anderson-Inspired World - Indiewire"},{url:"http://www.fastcodesign.com/3048118/sleuth-your-way-through-a-wes-anderson-inspired-world-in-this-free-video-game",text:"Sleuth Your Way Through A Wes Anderson-Inspired World In This Free Video Game - Fast Co. Design"},{url:"http://designtaxi.com/news/377405/A-Secret-Agent-Game-Inspired-By-Wes-Anderson-s-Grand-Budapest-Hotel/",text:"A Secret Agent Game Inspired By Wes Anderson&#8217;s Grand Budapest Hotel - Design Taxi"},{url:"http://www.avclub.com/article/live-videogame-version-grand-budapest-hotel-222084",text:"Live in a videogame version of The Grand Budapest Hotel - A.V. Club"},{url:"https://killscreen.com/articles/capturing-eccentricity-grand-budapest-hotel-videogame-adaptation/",text:"Capturing the Eccentricity of the Grand Budapest Hotel in a Videogame Adaption - Kill Screen"},{url:"http://www.nytimes.com/2015/08/06/arts/what-to-do-this-weekend.html",text:"What to Do This Weekend - The New York Times"}],ue=[{url:"maquisard_1.png",title:""},{url:"maquisard_2.gif",title:""},{url:"maquisard_3.png",title:""},{url:"maquisard_4.gif",title:""},{url:"maquisard_5.png",title:""}],he={name:"Maquisard",components:{Project:F},data:function(){return{links:ce,images:ue}}},me=he,de=Object(h["a"])(me,oe,le,!1,null,null,null),pe=de.exports,ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Project",{attrs:{header:"Object Get",subheader:"A street game for four teams and one object",links:e.links,images:e.images}},[e._v("\n  Somewhere in the city, there is a significant object. You need to get it. Unfortunately, you don’t know who has it or what it looks like. You only know that every three minutes it broadcasts it’s location on Twitter. Four teams compete to spend the most time in possession of an object that announces it’s location online. Object Get is a game of running, chasing, hiding, subterfuge, and the Object. Appeared at "),r("a",{attrs:{href:"http://comeoutandplaysf.org/2012/obtain-the-briefcase/"}},[e._v("Come Out and Play SF 2012")]),e._v(" (As Obtain the Briefcase), "),r("a",{attrs:{href:"http://www.comeoutandplay.org/project/object-get/"}},[e._v("Come Out and Play NY 2013")]),e._v(", "),r("a",{attrs:{href:"http://www.cityofplay.org/"}},[e._v("City of Play 2013")]),e._v(", and "),r("a",{attrs:{href:"http://www.indiecade.com/2013/big_games"}},[e._v("Indiecade 2013")]),e._v(".\n")])},fe=[],ve=[{url:"https://github.com/akirchner333/ObjectGet",text:"Code on Github"}],_e=[{url:"objectget_1.jpg",title:""},{url:"objectget_2.jpg",title:""},{url:"objectget_3.jpg",title:""}],we={name:"ObjectGet",components:{Project:F},data:function(){return{links:ve,images:_e}}},be=we,ye=Object(h["a"])(be,ge,fe,!1,null,null,null),ke=ye.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Project",{attrs:{header:"Journey to the End of the Night",subheader:"A race/chase through city streets at night",links:e.links,images:e.images}},[r("p",[e._v("\n      Journey to the End of the Night is a urban street game of epic scale, where players run from checkpoint to checkpoint while being pursued by chasers. Caught runners become chasers themselves, so the number of chasers increases as the night goes on. Checkpoints are placed throughout the city, over as long a course as six miles. Each checkpoint temporarily transform that space into something strange and magical. For one night the city is transformed a stage for epic chases and narrow escapes. "),r("a",{attrs:{href:"http://ichaseyou.com/"}},[e._v("Journey to the End of the Night")]),e._v(" has been run over thirty times in over twenty cities and was created by Ian Kizu-Blair, Sean Mahan, and Sam Lavigne in 2006.\n    ")]),r("p",[e._v("\n      I organized games of Journey to the End of the Night in Minneapolis in September of 2008 and May of 2010 with a team and independently organized a game in St Paul in September of 2011.\n    ")])])},Te=[],xe=[{url:"http://sf0.org/tasks/Journey-to-the-End-of-the-Night-Minnesota/#praxis",text:"Documentation for the September 2008 Game"},{url:"http://sf0.org/tasks/Journey-to-the-End-of-the-Night---May-Day-2010",text:"Documentation for the May 2010 Game"}],Ce=[{url:"journey_1.jpg",title:""},{url:"journey_2.jpg",title:""},{url:"journey_3.jpg",title:""},{url:"journey_4.png",title:""}],Se={name:"Journey",components:{Project:F},data:function(){return{links:xe,images:Ce}}},Ie=Se,Ae=Object(h["a"])(Ie,je,Te,!1,null,null,null),Me=Ae.exports,Oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Project",{attrs:{header:"Home Access Health Corporation",subheader:"",links:e.links,images:e.images}},[e._v("\n  I worked at Home Access Health Corporation from July 2017 to August 2018 as a ruby developer. In this position I was responsible for\n  "),r("ul",[r("li",[e._v("Developed a Ruby on Rails api in an enterprise environment")]),r("li",[e._v("Integrated api with existing PSQL database")]),r("li",[e._v("Designed database schemas and migration tools for a replacement database")]),r("li",[e._v("Wrote tests for the Ruby on Rails api")]),r("li",[e._v("Built patient and employee portals in React/Redux")]),r("li",[e._v("Developed mobile versions of the portals using React Native")]),r("li",[e._v("Styled portals from mockups")]),r("li",[e._v("Maintained security according to HIPAA requirements")]),r("li",[e._v("Worked with employees to determine requirements for employee portals")]),r("li",[e._v("Reviewed other developers code")]),r("li",[e._v("Wrote documentation")])])])},Pe=[],Ge=!1,Ee=[{url:"hahc1.png",title:"screenshot of the patient portal login I made at Home Access"}],Ne={name:"HomeAccess",components:{Project:F},data:function(){return{links:Ge,images:Ee}}},qe=Ne,$e=Object(h["a"])(qe,Oe,Pe,!1,null,null,null),Be=$e.exports,He=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Project",{attrs:{header:"Jokes4Miles",subheader:"",links:e.links,images:e.images}},[e._v("\n  I worked at Jokes 4 Miles from January 2017 to June 2017 as a software engineer. In this position I\n  "),r("ul",[r("li",[e._v("Overhauled and wrote a full test suite for an existing rails app ("),r("a",{attrs:{href:"http://beta.support4miles.com/"}},[e._v("beta.support4miles.com")]),e._v(")")]),r("li",[e._v("Layout and styling in SASS based on mockups")]),r("li",[e._v("Built a forum with threaded replies and WYSIWYG text editing")]),r("li",[e._v("Quality assurance and bug fixes for the rails app")]),r("li",[e._v("Managed Postgres and MySQL databases")]),r("li",[e._v("Added user accounts to an existing ember app ("),r("a",{attrs:{href:"http://www.ticketmagic.com/"}},[e._v("ticketmagic.com")]),e._v(")")]),r("li",[e._v("Helped plan website features and manage project tasks")])])])},Je=[],We=!1,Re=[{url:"j4m2.png",title:"the Support 4 Miles homepage"},{url:"j4m3.png",title:"the Jokes 4 Miles login modal"},{url:"j4m4.png",title:"the Jokes 4 Miles footer"},{url:"j4m5.png",title:"The Jokes 4 Miles homepage"},{url:"j4m7.png",title:"the Jokes 4 miles stats page, which I designed"}],De={name:"Jokes",components:{Project:F},data:function(){return{links:We,images:Re}}},Le=De,Ye=Object(h["a"])(Le,He,Je,!1,null,null,null),Fe=Ye.exports,ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"project"}},[r("h1",[e._v(e._s(this.$route.params.id))]),r("h2",[e._v("Under Construction")])])},Ve=[],Ue=(r("a481"),{name:"Construction",computed:{url:function(){return this.$route.path.replace("/project/","")}}}),Qe=Ue,Ke=Object(h["a"])(Qe,ze,Ve,!1,null,null,null),Xe=Ke.exports;a["a"].use(i["a"]);var Ze={firstName:"Alexa",lastName:"Kirchner",email:"akirchner333+inquiry@gmail.com",github:"akirchner333",mastodon:"crime_crab",twitter:"crime_crab",itch:"akirchner",tumblr:"thejhyde",location:"Chicago"},et=new i["a"]({routes:[{path:"/",component:B,props:{personalInfo:Ze}},{path:"/projects/top_chess",component:X},{path:"/projects/ttt",component:ie},{path:"/projects/maquisard",component:pe},{path:"/projects/object_get",component:ke},{path:"/projects/journey",component:Me},{path:"/projects/home_access",component:Be},{path:"/projects/jokes4miles",component:Fe},{path:"/projects/:id",component:Xe}]}),tt={name:"app",components:{SiteHeader:d},data:function(){return Ze},router:et},rt=tt,at=(r("034f"),Object(h["a"])(rt,n,s,!1,null,null,null)),nt=at.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(nt)}}).$mount("#app")},"5e50":function(e,t,r){"use strict";var a=r("79cf"),n=r.n(a);n.a},"64a9":function(e,t,r){},"79cf":function(e,t,r){},ce7d:function(e,t,r){},e3c4:function(e,t,r){"use strict";var a=r("ce7d"),n=r.n(a);n.a},f6ca:function(e,t,r){"use strict";var a=r("22c7"),n=r.n(a);n.a}});
//# sourceMappingURL=app.303f32dc.js.map