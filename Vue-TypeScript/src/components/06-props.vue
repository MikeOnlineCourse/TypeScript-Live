<script setup lang="ts">
  const props = defineProps<{
    name: string;
    age?: number;
    info: {
      email: string;
      phone: string;
    };
  }>();
</script>

<template>
  <div>
    <pre>
      {{ props }}
    </pre>
  </div>
</template>
