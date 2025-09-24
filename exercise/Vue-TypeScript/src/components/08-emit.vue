<script setup lang="ts">
  const emit = defineEmits(['activeIdx', 'updateName']);

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
