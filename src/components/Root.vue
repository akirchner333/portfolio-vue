<template>
  <div id="root">
    <Intro v-bind:location="personalInfo.location" v-bind:email="personalInfo.email"/>
    <Projects/>
    <Contact v-bind="personalInfo"/>
  </div>
</template>

<script>

import Intro from "./Intro.vue";
import Projects from "./Projects.vue";
import Contact from "./Contact.vue";

export default {
  name: 'Root',
  props: {
    personalInfo: Object
  },
  components: {
    Intro,
    Projects,
    Contact
  }
}
</script>

<style>
</style>
