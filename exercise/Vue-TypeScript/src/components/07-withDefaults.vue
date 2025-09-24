<script setup lang="ts">
  type TInfo = {
    email: string;
    phone: string;
  };

  type TUser = {
    name: string;
    age: number;
    info: TInfo;
  };
  // 當使用 type定義型別時，我們失去了為 props 設定預設值的功能。可以透過 withDefaults 解決
  const props = defineProps<TUser>();
</script>

<template>
  <div>
    <pre>
      {{ props }}
    </pre>
  </div>
</template>
