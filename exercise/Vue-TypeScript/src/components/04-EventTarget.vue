<script setup lang="ts">
  const handleChange = (e) => {
    const inpVal = e.target.value;
    console.log(inpVal);
  };
</script>

<template>
  <div>
    <input type="text" @change="handleChange" />
  </div>
</template>
