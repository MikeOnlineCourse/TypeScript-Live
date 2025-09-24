<script setup lang="ts">
  import { ref, computed } from 'vue';

  const name = ref<string>('Mike');

  const title = computed<string>(() => {
    return `Hello, ${name.value}`;
  });
</script>
<template>
  <div></div>
</template>
<style scoped></style>
