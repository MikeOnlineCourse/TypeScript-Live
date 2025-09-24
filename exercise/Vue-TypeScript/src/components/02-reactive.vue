<script setup lang="ts">
  import { reactive } from 'vue';

  
  // 不建議使用 reactive() 的泛型，因為處理了深層 ref 解包的回傳值與泛型參數的類型不同。
  const user = reactive({
    name: 'Mike',
    age: 27,
    email: '',
  });
</script>

<template>
  <div></div>
</template>
<style scoped></style>
