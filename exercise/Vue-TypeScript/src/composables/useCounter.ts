import { ref, computed } from 'vue';


export function useCounter(num) {
  
  const count = ref(num);

  const twoCount = computed(() => count.value * 2);

  const add = () => {
    count.value++;
  };

  const remove = () => {
    count.value--;
  };

  return {
    count,
    twoCount,
    add,
    remove,
  };
}
