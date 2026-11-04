<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { withBase } from 'vitepress';

/*
 * A screenshot from public/screenshots - shown as a placeholder with its file name until the file exists.
 * [narrow] is for phone screenshots, which would be too tall at the full width.
 */
const props = defineProps<{ src: string; caption: string; narrow?: boolean }>();

const image = ref<HTMLImageElement | null>(null);
const isMissing = ref(false);

// the image may fail before the page is hydrated, when the error handler is not attached yet
onMounted(() => {
  const img = image.value;
  if (img && img.complete && img.naturalWidth === 0) isMissing.value = true;
});
</script>

<template>
  <figure class="screenshot" :class="{ narrow: props.narrow }">
    <img
      v-if="!isMissing"
      ref="image"
      :src="withBase(`/screenshots/${props.src}`)"
      :alt="props.caption"
      @error="isMissing = true"
    />
    <div v-else class="placeholder">
      <span class="placeholder-title">Screenshot coming soon</span>
      <code>public/screenshots/{{ props.src }}</code>
    </div>
    <figcaption>{{ props.caption }}</figcaption>
  </figure>
</template>

<style scoped>
.screenshot {
  margin: 24px 0;
}

.screenshot img {
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
}

.narrow img,
.narrow .placeholder {
  max-width: 320px;
  margin: 0 auto;
}

.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 220px;
  border: 2px dashed var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  padding: 16px;
  text-align: center;
}

.narrow .placeholder {
  min-height: 420px;
}

.placeholder-title {
  font-weight: 600;
}

figcaption {
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
}
</style>
