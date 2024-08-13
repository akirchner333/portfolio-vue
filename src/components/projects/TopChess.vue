<script setup>
import Project from "./Project.vue"

const links = [
  {url: "https://twitter.com/topchessmoves", text: "Top Chess Moves"},
  {url: "https://github.com/akirchner333/topchessmoves", text: "Top Chess Moves Code on Github"},
  {url: "https://twitter.com/topchessgames", text: "The Top Chess Games Twitter"},
  {url: "chessgames_rules.html", text: "Top Chess Games Full Rules"},
  {url: "https://twitter.com/chess_bot_alpha", text: "Chess Bot Alpha"},
  {url: "https://twitter.com/chess_bot_omega", text: "Chess Bot Omega"}
]

const images = [
  {url: "chess_move_1.gif", title: "Uhlidze's Position: Mik Trap"},
  {url: "chess_games_1.jpg", title: "Move from Top Chess Game 1"}
]
</script>

<template>
  <Project 
    header="Top Chess" 
    subheader="Twitter Based Chess Bots"
    v-bind:links="links"
    v-bind:images="images"
  >
    Top Chess covers four twitter bots, each concerning chess in some fashion. <a href='https://twitter.com/topchessmoves'>Top Chess Moves</a> posts the finest randomly generated series of chess moves, with the move name, every hour. <a href='https://twitter.com/topchessgames'>Top Chess Games</a> is a twitter bot that plays chess, drawing moves from user suggestions. <a href='https://twitter.com/chess_bot_alpha'>Chess Bot Alpha</a> and <a href='https://twitter.com/chess_bot_omega'>Chess Bot Omega</a> play Top Chess Games, submitting moves drawn from Stockfish. Moves and Games are written in Elixir while Alpha and Omega are written in Python. Top Chess is currently not running but the archives can be found on twitter.
  </project>
</template>

<style>
  
</style>
