<script setup lang="ts">
import { withBase } from 'vitepress';

// a diagram exported from diagrams/<name>.excalidraw, in a light and a dark version
defineProps<{ name: string; alt: string }>();
</script>

<template>
  <figure class="diagram">
    <img class="vp-light" :src="withBase(`/diagrams/${name}-light.svg`)" :alt="alt" />
    <img class="vp-dark" :src="withBase(`/diagrams/${name}-dark.svg`)" :alt="alt" />
  </figure>
</template>

<style scoped>
.diagram {
  margin: 24px 0;
}

.diagram img {
  width: 100%;
  height: auto;
}
</style>
