<script setup lang="ts">
  const handleChange = (e: Event) => {
    const inpVal = (e.target as HTMLInputElement).value;
    console.log(inpVal);
  };
</script>

<template>
  <div>
    <input type="text" @change="handleChange" />
  </div>
</template>
