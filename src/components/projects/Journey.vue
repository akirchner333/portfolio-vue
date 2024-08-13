<script setup>
import Project from "./Project.vue"

const links = [
  {url: "http://sf0.org/tasks/Journey-to-the-End-of-the-Night-Minnesota/#praxis", text: "Documentation for the September 2008 Game"},
  {url: "http://sf0.org/tasks/Journey-to-the-End-of-the-Night---May-Day-2010", text: "Documentation for the May 2010 Game"},
]

const images = [
  {url: "journey_1.jpg", title: ''},
  {url: "journey_2.jpg", title: ''},
  {url: "journey_3.jpg", title: ''},
  {url: "journey_4.png", title: ''},
]
</script>

<template>
  <Project 
    header="Journey to the End of the Night" 
    subheader="A race/chase through city streets at night"
    v-bind:links="links"
    v-bind:images="images"
  >
    <p>
        Journey to the End of the Night is a urban street game of epic scale, where players run from checkpoint to checkpoint while being pursued by chasers. Caught runners become chasers themselves, so the number of chasers increases as the night goes on. Checkpoints are placed throughout the city, over as long a course as six miles. Each checkpoint temporarily transform that space into something strange and magical. For one night the city is transformed a stage for epic chases and narrow escapes. <a href="http://ichaseyou.com/">Journey to the End of the Night</a> has been run over thirty times in over twenty cities and was created by Ian Kizu-Blair, Sean Mahan, and Sam Lavigne in 2006.
      </p>
      <p>
        I organized games of Journey to the End of the Night in Minneapolis in September of 2008 and May of 2010 with a team and independently organized a game in St Paul in September of 2011.
      </p>
  </project>
</template>

<style>
  
</style>
