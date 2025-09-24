<script setup lang="ts">
  const props = defineProps({
    name: {
      type: String,
      default: 'Mike',
    },
    age: {
      type: Number,
      default: 27,
    },
    info: {
      type: Object,
      default: () => ({ email: '', phone: '' }),
    },
  });
</script>

<template>
  <div>
    <pre>
      {{ props }}
    </pre>
  </div>
</template>
