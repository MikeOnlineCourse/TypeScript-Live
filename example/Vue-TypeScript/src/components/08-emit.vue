<script setup lang="ts">
  // const emit = defineEmits<{
  //   (e: 'activeIdx', id: number): void;
  //   (e: 'updateName', name: string): void;
  // }>();

  // Vue 3.3+ 之後更簡單的寫法
  const emit = defineEmits<{
    activeIdx: [id: number];
    updateName: [name: string];
  }>();

  const handleActiveIdx = (id: number) => {
    emit('activeIdx', id);
  };

  const handleNameClick = (name: string) => {
    emit('updateName', name);
  };
</script>
<template>
  <div>
    <button @click="handleActiveIdx(1)">click</button>
    <button @click="handleNameClick('Mike')"></button>
  </div>
</template>
