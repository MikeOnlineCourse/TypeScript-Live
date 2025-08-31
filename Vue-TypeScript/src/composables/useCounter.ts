import { ref, computed } from 'vue';
import type { Ref, ComputedRef } from 'vue';

type TCounterReturn = {
  count: Ref<number>;
  twoCount: ComputedRef<number>;
  add: () => void;
  remove: () => void;
};

export function useCounter(num: number = 0): TCounterReturn {
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
