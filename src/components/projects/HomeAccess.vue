<template>
  <Project 
    header="Home Access Health Corporation" 
    subheader=""
    v-bind:links="links"
    v-bind:images="images"
  >
    I worked at Home Access Health Corporation from July 2017 to August 2018 as a ruby developer. In this position I was responsible for
    <ul>
      <li>Developed a Ruby on Rails api in an enterprise environment</li>
      <li>Integrated api with existing PSQL database</li>
      <li>Designed database schemas and migration tools for a replacement database</li>
      <li>Wrote tests for the Ruby on Rails api</li>
      <li>Built patient and employee portals in React/Redux</li>
      <li>Developed mobile versions of the portals using React Native</li>
      <li>Styled portals from mockups</li>
      <li>Maintained security according to HIPAA requirements</li>
      <li>Worked with employees to determine requirements for employee portals</li>
      <li>Reviewed other developers code</li>
      <li>Wrote documentation</li>
    </ul>
  </project>
</template>

<script>
import Project from "./Project.vue"

var links = false;

var images = [
  {url: "hahc1.png", title: "screenshot of the patient portal login I made at Home Access"}
]

export default {
  name: 'HomeAccess',
  components: {
    Project
  },
  data: function(){
    return {links, images}
  }
}
</script>

<style>
  
</style>
