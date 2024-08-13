<script setup>
import Project from "./Project.vue"

const links = [
  {url: "https://youtu.be/N4fGhe7Aa74", text: "Gameplay Video"},
  {url: "https://github.com/akirchner333/TowerTowerTower", text: "Code on Github"},
]

const images = [
  {url: "TTT1.png", title: ""},
  {url: "TTT9.gif", title: ""},
  {url: "TTT2.gif", title: ""},
  {url: "TTT5.png", title: ""},
  {url: "TTT10.png", title: ""},
  {url: "TTT7.png", title: ""},
];
</script>

<template>
  <Project 
    header="Tower Tower Tower" 
    subheader="Build the tower, escape to the heavens"
    v-bind:links="links"
    v-bind:images="images"
  >
    <p>
      Tower Tower Tower is massively multiplayer, browser based, cooperative online game about building a tower to the heavens. Players place bricks on the tower, piling them up one by one and when the pile gets big enough and a level is completed, the next level becomes accessible. New levels introduce limits on communication, new challenges, and new mechanics until all players reach the heavens together. All of this is tied together with a glitchy, web 1.0 aesthetic that leaves players unsettled and unsure of what they can trust. Tower Tower Tower can be played at <a href = "https://towertowertower.herokuapp.com/">towertowertower.herokuapp.com/</a>.
    </p>

    <p>
      Tower Tower Tower was made over nine months as my thesis project at the NYU Game Center. I was interested in making a game for many people, that would be played over long periods of time, and in exploring how platforms and different forms of communication could influence online communities. I was the only designer and developer for Tower Tower Tower, building the back end in <a href = "http://rubyonrails.org/">Ruby on Rails</a> and the front end with <a href = "https://jquery.com/">jQuery</a> and <a href = "https://p5js.org/">ps5.js</a>. Tower Tower Tower was designed through the iterative process - each week I would add a new feature or alter existing features and then get feedback from playtesters to see how they found it.
    </p>

    <p>
      At the end of the thesis process in May 2016, Tower Tower Tower is a bit of clunky game. Feedback from colleagues and playtesters agree that the game is hard to understand and difficult to get into, which prevents it from getting the player base it would need to thrive. Throughout the process of design I reduced the scope at several points but if I were to do it again, I would likely reduce the scale even further. The project also suffered from gaps in my own technical knowledge, which slowed it down. Luckily making Tower Tower Tower has been immensely educational, meaning that I am on a much more solid footing for any future projects. I am proud of the work I did for Tower Tower Tower, even if the final product is not everything I hoped it would be.
    </p>
  </project>
</template>

<style>
  
</style>
