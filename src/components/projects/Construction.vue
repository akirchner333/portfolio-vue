<template>
  <div id="project">
    <h1>{{this.$route.params.id}}</h1>
    <h2>Under Construction</h2>
  </div>
</template>

<script>
export default {
  name: 'Construction',
  computed: {
    url(){
      return this.$route.path.replace("/project/", "");
    }
  }
}
</script>

<style>
</style>