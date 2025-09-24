<script setup>
  import { useCounter } from '@/composables/useCounter';

  const counter = useCounter();

  console.log(counter.count);
</script>
<template>
  <div></div>
</template>
<style></style>
