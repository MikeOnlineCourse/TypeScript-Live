<script setup lang="ts">
  import { ref } from 'vue';

  const isOpen = ref(false);

  const productTitle = ref('');

  const open = () => {
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
  };

  const setTitle = (title: string) => {
    productTitle.value = title;
  };

  defineExpose({
    open,
    close,
    setTitle,
  });
</script>

<template>
  <div v-if="isOpen" class="modal">
    <h2>{{ productTitle }}</h2>
    <slot />
    <button @click="close">關閉</button>
  </div>
</template>
