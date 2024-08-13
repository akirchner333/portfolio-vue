<script setup>
import Project from "./Project.vue"

const links = false;

const images = [
  {url: "j4m2.png", title: "the Support 4 Miles homepage"},
  {url: "j4m3.png", title: "the Jokes 4 Miles login modal"},
  {url: "j4m4.png", title: "the Jokes 4 Miles footer"},
  {url: "j4m5.png", title: "The Jokes 4 Miles homepage"},
  {url: "j4m7.png", title: "the Jokes 4 miles stats page, which I designed"},
];
</script>

<template>
  <Project 
    header="Jokes4Miles" 
    subheader=""
    v-bind:links="links"
    v-bind:images="images"
  >
    I worked at Jokes 4 Miles from January 2017 to June 2017 as a software engineer. In this position I
    <ul>
      <li>Overhauled and wrote a full test suite for an existing rails app (<a href="http://beta.support4miles.com/">beta.support4miles.com</a>)</li>
      <li>Layout and styling in SASS based on mockups</li>
      <li>Built a forum with threaded replies and WYSIWYG text editing</li>
      <li>Quality assurance and bug fixes for the rails app</li>
      <li>Managed Postgres and MySQL databases</li>
      <li>Added user accounts to an existing ember app (<a href="http://www.ticketmagic.com/">ticketmagic.com</a>)</li>
      <li>Helped plan website features and manage project tasks</li>
    </ul>
  </project>
</template>

<style>
  
</style>
