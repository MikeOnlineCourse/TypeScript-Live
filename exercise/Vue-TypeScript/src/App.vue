<script setup lang="ts">
  import { onMounted, useTemplateRef } from 'vue';
  // import ref from '@/components/01-ref.vue';
  // import reactive from '@/components/02-reactive.vue';
  // import computed from '@/components/03-computed.vue';
  import eventTarget from '@/components/04-EventTarget.vue';
  import InstanceTypeTypeof from '@/components/10-InstanceType-typeof.vue';

  const productRef = useTemplateRef('productRef');

  onMounted(() => {
    productRef.value?.setTitle('TypeScript 實戰班');
  });
</script>

<template>
  <div>
    <eventTarget />

    <InstanceTypeTypeof ref="productRef" />
  </div>
</template>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
</style>
