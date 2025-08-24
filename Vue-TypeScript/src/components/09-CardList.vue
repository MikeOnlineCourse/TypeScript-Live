<script setup lang="ts">
  import axios from 'axios';
  import type { AxiosResponse } from 'axios';
  import { onMounted, ref } from 'vue';
  import Popup from '@/components/Utilities/Popup.vue';
  import Card from '@/components/Utilities/Card.vue';

  const coursesArr = ref<TCourses[]>([]);

  const coursesId = ref<number>(0);

  const isOpen = ref<boolean>(false);

  const getDetal = (id: number) => {
    coursesId.value = id;
    isOpen.value = true;
  };

  const closePopup = () => {
    coursesId.value = 0;
    isOpen.value = false;
  };

  const openUrl = (url: string) => {
    window.open(url, '_blank');
  };

  onMounted(() => {
    axios.get<TCourses[]>('https://vue-lessons-api.vercel.app/courses/list').then((res: AxiosResponse<TCourses[]>) => {
      coursesArr.value = res.data;
    });
  });
</script>
<template>
  <div class="box">
    <div class="flex-around w-1000px">
      <Card :coursesArr="coursesArr" :coursesId="coursesId" :getDetal="getDetal" :openUrl="openUrl" :closePopup="closePopup" />
      <Popup v-show="isOpen" />
    </div>
  </div>
</template>

<style scoped>
  .box {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .w-1000px {
    width: 1000px;
  }
</style>
