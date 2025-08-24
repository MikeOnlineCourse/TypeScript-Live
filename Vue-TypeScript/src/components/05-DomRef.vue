<script setup lang="ts">
  import { ref, useTemplateRef, onMounted } from 'vue';

  const el = ref<HTMLInputElement | null>(null);

  const elRef = useTemplateRef<HTMLInputElement>('inputRef');

  onMounted(() => {
    el.value.focus();

    elRef.value.focus();
  });
</script>
<template>
  <div>
    <input ref="el" type="text" />
    <input ref="inputRef" type="text" />
  </div>
</template>
