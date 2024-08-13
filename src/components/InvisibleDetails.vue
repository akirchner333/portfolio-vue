<script setup>
defineProps({
  title: String,
  images: Array,
});
</script>

<template>
  <details class="invisible-network">
    <summary>{{title}}</summary>
    <div v-for="(image, index) in images" v-bind:key="image.url">
      <img 
        v-bind:src="'/images/invisible/' + image.url" 
        v-bind:title="title + ' ' + (index + 1)"
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

<style scoped>
  .invisible-network img {
    width: max-content;
    height: max-content;
    max-height: 1000px;
  }

  .invisible-network pre {
    white-space: pre-wrap;
  }
</style>
