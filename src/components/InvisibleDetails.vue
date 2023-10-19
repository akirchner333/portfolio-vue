<template>
  <details class="invisible-network">
    <summary>{{title}}</summary>
    <div v-for="image in images" v-bind:key="image.url">
      <img 
        v-bind:src="'/images/invisible/' + image.url" 
        v-bind:title="image.title"
      />
    </div>
    
    <details>
      <summary>Transcript</summary>
      <pre>
        <slot></slot>
      </pre>
    </details>
  </details>
</template>

<script>
export default {
  name: 'InvisibleDetails',
  props: {
    title: String,
    images: Array,
  },
}
</script>

<style>
  .invisible-network img {
    width: max-content;
    height: max-content;
    max-height: 1000px;
  }
</style>
