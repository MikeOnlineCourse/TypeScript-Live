<script setup>
  import { ref } from 'vue';

  const count = ref(0);
  const name = ref('Mike');
  const isShow = ref(true);
  const user = ref({ name: 'Mike', age: 20 });
  const numbers = ref([1, 2, 3, 4, 5]);
</script>
<template>
  <div></div>
</template>
<style scoped></style>
