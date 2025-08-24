<script setup lang="ts">
  import { ref } from 'vue';

  const count = ref<number>(0);
  const name = ref<string>('Mike');
  const isShow = ref<boolean>(true);
  const user = ref<{ name: string; age: number }>({ name: 'Mike', age: 20 });
  const numbers = ref<number[]>([1, 2, 3, 4, 5]);
</script>
<template>
  <div></div>
</template>
<style scoped></style>
