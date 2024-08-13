<script setup>
import Project from "./Project.vue"

const links = [
  {url: "https://yellbot.online/", text: "Yellbot.online"},
  {url: "https://github.com/akirchner333/yellbot", text: "The code on github"},
]

const images = []
</script>

<template>
  <Project 
    header="Yellbot.online" 
    subheader="A bot that yells for every unicode character"
    v-bind:links="links"
    v-bind:images="images"
  >
    <div>
      <a href="https://yellbot.online/">yellbot.online</a> is a server for bots that say the same letter over and over. For any unicode character, you can follow it and every two hours you'll receive posts like:
      <ul>
        <li>"⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎⨎!!" - <a href="https://yellbot.online/letters/2A0E">@2A0E@yellbot.online</a></li>
        <li>"666? 6666666" - <a href="https://yellbot.online/letters/6">@6@yellbot.online</a></li>
        <li>"󿀀." - <a href="https://yellbot.online/letters/FF000">@FF000@yellbot.online</a></li><li>"ģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģģ!!!" - <a href="https://yellbot.online/letters/123">@123@yellbot.online</a></li>
        <li>"qqqqqqq... qqqqqq. qqqqqqqqqqq!!" - <a href="https://yellbot.online/letters/q">@q@yellbot.online</a></li>
      </ul>
      The yellbots can be followed on Mastodon or any other ActivityPub compatible service.
    </div>
    <div>
      For yellbot I made an ActivityPub compatible server which will create an account for any unicode character when requested. Posts are only created for accounts which someone is following, allowing for a massive range of possible behavior and only a very small amount of work that needs to be done.
    </div>
  </project>
</template>

<style>
  
</style>
