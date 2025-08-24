<script setup lang="ts">
  type TProps = {
    coursesArr: TCourses[];
    coursesId: number;
    getDetal: (id: number) => void;
    openUrl: (url: string) => void;
    closePopup: () => void;
  };

  const props = withDefaults(defineProps<TProps>(), {
    coursesArr: () => [],
    coursesId: 0,
    getDetal: () => {},
    openUrl: () => {},
    closePopup: () => {},
  });
</script>
<template>
  <Teleport v-for="item in props.coursesArr" :disabled="props.coursesId !== item.id" to="#detal">
    <a class="card" :key="item.id" @click="props.getDetal(item.id)">
      <p class="more" @click.stop="props.openUrl(item.moreUrl)">觀看更多</p>
      <img :src="item.photo" alt="" />
      <div class="content">
        <h1>{{ item.name }}</h1>
        <p class="description">
          {{ item.description }}
        </p>
        <div class="teacher-box">
          <div class="teach-img">
            <img class="teacher" :src="item.teacher.img" alt="" />
            <p>{{ item.teacher.name }}</p>
          </div>
          <h2>NTD: {{ item.money }}</h2>
        </div>
      </div>
    </a>
    <button v-show="props.coursesId === item.id" @click="props.closePopup">關閉</button>
  </Teleport>
</template>
<style scoped>
  a.card {
    position: relative;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 318px;
    height: 388px;
    padding: 0px;
    border-radius: 5px;
    margin: 0px 10px 0px 10px;
    opacity: 0.9;
    transition: opacity 0.2s;
    background-color: rgb(249, 249, 249);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  a.card:hover {
    opacity: 1;
  }
  a.card > img {
    width: 100%;
  }

  p.more {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #00000057;
    color: white;
    padding: 5px 10px;
    border-radius: 0px 0px 0px 5px;
    font-size: 12px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    color: #393939;
  }
  .content > h1 {
    width: 100%;
    font-size: 26px;
    height: 100%;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .content > .description {
    font-size: 12px;
    text-align: left;
    padding: 0px 25px 10px 25px;
  }
  .teacher-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #393939;
    padding: 10px 18px 20px 18px;
  }
  .teacher-box > h2 {
    font-size: 13px;
  }
  .teacher-box > .teach-img {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .teacher-box > .teach-img > img {
    border-radius: 25px;
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
  button {
    cursor: pointer;
    width: 200px;
    height: 30px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto 0 auto;
    border-radius: 30px;
    background-color: lightseagreen;
    color: #fff;
    font-size: 20px;
  }
</style>
