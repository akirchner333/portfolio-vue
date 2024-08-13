<script setup>
import Project from "./Project.vue"

const links = [
  {url: "/rpgs/The Court of Ferns Signs.pdf", text: "Court of Ferns Rules"},
  {url: "http://www.goldencobra.org/2019winners.html", text: "Golden Cobra 2019 Winners"},
  {url: "https://akirchner.itch.io/lamp-rpg-pack", text: "Lamp RPG Pack"},
  {url: "https://docs.google.com/spreadsheets/d/14B-QcnzTQ4fsNQq2EX6j6M0MxLTLNb_UMR_w2FC5Ax0/edit?usp=sharing", text: "Court of Ferns: Spreadsheet Version"}
]

const images = [
  {url: "court1.png", title: "The Court of Ferns spreadsheet"},
  {url: "court2.png", title: "Screenshot from the Wiscon 2020 Spreadsheet game"},
  {url: "court3.png", title: "Screenshot from the Wiscon 2020 Spreadsheet game"},
  {url: "court4.png", title: "Screenshot from the Wiscon 2020 Spreadsheet game"},
]
</script>

<template>
  <Project 
    header="Court of Ferns" 
    subheader="An Arts and Crafts Larp of Surreal Bureacracy"
    v-bind:links="links"
    v-bind:images="images"
  >
    The Court of Ferns is a live action roleplaying game where the players create a surreal bureaucratic nightmare. Be a petitioner, like a bee looking for a divorce or a mountain needing an avalanche license. Be a bureaucrat, creating forms and throwing up problems. Be a lawyer, helping petitioners and giving bribes. Be a bailif, putting up directions and interpreting the ruling of the respected and powerful Judge Fern (who is potted plant). Follow signs, fill out forms, wear a hat, create an office, makes arguments, leave for lunch when people need you, and maybe even solve a few problems. Court of Ferns was written for <a href="http://www.goldencobra.org">the Golden Cobra</a> contest in 2019 and it won the "Best Game for Players Dropping In and Out" award. In 2020 I made a version that can be played online in Google Sheets for Wiscon.
  </project>
</template>

<style>
  
</style>
