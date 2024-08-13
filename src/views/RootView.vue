<script setup>
import Contact from "../components/Contact.vue";
import Intro from "../components/Intro.vue"
import Projects from "../components/Projects.vue"
</script>

<template>
  <main>
    <Intro />
    <Projects />
    <Contact
      email="akirchner333+inquiry@gmail.com"
      github = "akirchner333"
      mastodon = "an_alexa_k"
      itch = 'akirchner'
      tumblr = 'an-alexa-k'
      bluesky = 'an-alexa-k.bsky.social'
      cohost = 'an-alexa-k'
      location = "Chicago"
    />
  </main>
</template>
