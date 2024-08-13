<script setup>
import Project from "./Project.vue"

const links = [
  {url: "/rpgs/TallerThanSpaceIsWide.pdf", text: "Taller Than Space is Wide Rules"},
    {url: "https://docs.google.com/spreadsheets/d/14B-QcnzTQ4fsNQq2EX6j6M0MxLTLNb_UMR_w2FC5Ax0/edit?usp=sharing", text: "The Taller Than Space is Wide Spreadsheet"},
  {url: "http://www.goldencobra.org/2020winners.html", text: "Golden Cobra 2020 Winners"},
  {url: "https://www.youtube.com/watch?v=bAnQc-mRaRg", text: "Waltz of the 101st Lightborne by Joanna Newsom"}
]
</script>

<template>
  <Project 
    header="Taller Than Space is Wide" 
    subheader="An epistolary time travel spreadsheet roleplaying game"
    v-bind:links="links"
  >
    Taller Than Space is Wide a roleplaying game played in google sheets. Travel though time represented as travel through the spreadsheet and each cell has a unique prompt for the events you encounter at that time and place. Players leave behind short poems describing the events they observed and letters for other time travellers. Through this travel, the spreadsheet is slowly filled with events and fleeting, lonely moments of attempted human connection. Taller Than Space is Wide was written for <a href="http://www.goldencobra.org">the Golden Cobra</a> contest in 2020 and received an honorable mention from special guest judge Kieron Gillen.
  </project>
</template>

<style>
  
</style>
