e<template>
  <div id="project">
    <h1>{{header}}</h1>
    <div class="content">
      <h2>{{subheader}}</h2>
      <div id = "text">
        <slot></slot>
      </div>
      <div v-if="links" id = "links">
        <h3>Links</h3>
        <div v-for="link in links" v-bind:key="link.url">
          <a v-bind:href="link.url">{{link.text}}</a>
        </div>
      </div>

      <div id="images" v-if="images">
        <h3>Images</h3>
        <img 
          v-for="image in images" 
          v-bind:src="'images' + url + '/' + image.url" 
          v-bind:title="image.title"
          v-bind:key="image.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    header: String,
    subheader: String,
    links: Array,
    images: Array
  },
  computed: {
    url(){
      return this.$route.path;
    }
  }
}
</script>

<style>
  #project img{
    margin: 0 5px;
    max-height: 500px;
    max-width: 100%;
  }
</style>