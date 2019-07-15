<template>
  <Project 
    header="Maquisard" 
    subheader="A Charming Game of Snooping and Investigation"
    v-bind:links="links"
    v-bind:images="images"
  >
    As the lobby boy at a fancy hotel, the player receives clues from the resistance about the identity of a government agent and tries to figure out their identity by snooping on the guests over the course of three days. Players must listen in on conversations, peek into rooms, and observe the guests' habits in order to figure out which guests has all the traits of their target. Maquisard is a single-player puzzle game that has an unique non-linear investigation gameplay and draws on the visual aesthetics of Wes Anderson's film The Grand Budapest Hotel. Maquisard was made as a student project at the NYU Game Center in a team of six people, where I served as project manager. Maquisard can be downloaded for free at <a href="http://maquisard.itch.io/maquisard">itch.io</a>.
  </project>
</template>

<script>
import Project from "./Project.vue"

var links = [
  {url: "http://www.indiecade.com/games/e3_2015_games", text: "E3 Indiecade Booth 2015"},
  {url: "http://www.indiecade.com/games/selected/Maquisard", text: "Indiecade 2015 Official Selection: Digital Select"},
  {url: "http://bostonfig.com", text: "Boston Festival of Indie Games: Digital Showcase 2015"},
  {url: "http://www.ludicious.ch/?biz_company=maquisard/", text: "Ludicious: Student Competition"},

  {url: "http://www.theverge.com/2015/7/8/8915527/wes-anderson-grand-budapest-hotel-maquisard-game", text: "This computer game takes you into Wes Anderson's Grand Budapest Hotel - The Verge"},
  {url: "http://www.rockpapershotgun.com/2015/06/02/maquisard-grand-budapest-hotel-game/", text: "Snoop Around A Grand Budapest-y Hotel In Maquisard - Rock, Paper, Shotgun"},
  {url: "http://boingboing.net/2015/07/01/in-maquisard-you-solve-troubl.html", text: "In Maquisard, you solve trouble in a charming, ornate old hotel - Offworld"},
  {url: "http://niveloculto.com/maquisard-espiando-en-el-gran-hotel-budapest/", text: "Maquisard: Espiando en El Gran Hotel Budapest - Nivel Oculto"},
  {url: "http://www.indiewire.com/become-a-lobby-boy-in-this-new-wes-anderson-inspired-video-game", text: "This New Video Game Lets You Enter a Wes Anderson-Inspired World - Indiewire"},
  {url: "http://www.fastcodesign.com/3048118/sleuth-your-way-through-a-wes-anderson-inspired-world-in-this-free-video-game", text: "Sleuth Your Way Through A Wes Anderson-Inspired World In This Free Video Game - Fast Co. Design"},
  {url: "http://designtaxi.com/news/377405/A-Secret-Agent-Game-Inspired-By-Wes-Anderson-s-Grand-Budapest-Hotel/", text: "A Secret Agent Game Inspired By Wes Anderson&#8217;s Grand Budapest Hotel - Design Taxi"},
  {url: "http://www.avclub.com/article/live-videogame-version-grand-budapest-hotel-222084", text: "Live in a videogame version of The Grand Budapest Hotel - A.V. Club"},
  {url: "https://killscreen.com/articles/capturing-eccentricity-grand-budapest-hotel-videogame-adaptation/", text: "Capturing the Eccentricity of the Grand Budapest Hotel in a Videogame Adaption - Kill Screen"},
  {url: "http://www.nytimes.com/2015/08/06/arts/what-to-do-this-weekend.html", text: "What to Do This Weekend - The New York Times"},
]

var images = [
  {url: "maquisard_1.png", title: ""},
  {url: "maquisard_2.gif", title: ""},
  {url: "maquisard_3.png", title: ""},
  {url: "maquisard_4.gif", title: ""},
  {url: "maquisard_5.png", title: ""},
]

export default {
  name: 'Maquisard',
  components: {
    Project
  },
  data: function(){
    return {links, images}
  }
}
</script>

<style>
  
</style>
