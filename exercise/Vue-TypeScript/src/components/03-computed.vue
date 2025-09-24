<script setup lang="ts">
  import { ref, computed } from 'vue';

  const name = ref('Mike');

  const title = computed(() => {
    return `Hello, ${name.value}`;
  });
</script>
<template>
  <div></div>
</template>
<style scoped></style>
