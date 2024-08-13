
<script setup>
import Project from "./Project.vue"

var links = [
  {url: "https://github.com/akirchner333/ObjectGet", text: "Code on Github"},
]

// var images = [
//   {url: "objectget_1.jpg", title: ''},
//   {url: "objectget_2.jpg", title: ''},
//   {url: "objectget_3.jpg", title: ''}
// ]
</script>


<template>
  <Project 
    header="Object Get" 
    subheader="A street game for four teams and one object"
    v-bind:links="links"
    v-bind:images="images"
  >
    Somewhere in the city, there is a significant object. You need to get it. Unfortunately, you don&#8217;t know who has it or what it looks like. You only know that every three minutes it broadcasts it&#8217;s location on Twitter. Four teams compete to spend the most time in possession of an object that announces it&#8217;s location online. Object Get is a game of running, chasing, hiding, subterfuge, and the Object. Appeared at <a href="http://comeoutandplaysf.org/2012/obtain-the-briefcase/">Come Out and Play SF 2012</a> (As Obtain the Briefcase), <a href="http://www.comeoutandplay.org/project/object-get/">Come Out and Play NY 2013</a>, <a href="http://www.cityofplay.org/">City of Play 2013</a>, and <a href="http://www.indiecade.com/2013/big_games">Indiecade 2013</a>.
  </project>
</template>

<style>
  
</style>
