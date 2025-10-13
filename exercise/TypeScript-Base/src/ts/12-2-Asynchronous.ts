// 非同步(Asynchronous)函式
import axios from 'axios';

type TPhotoList = {
  url: string;
};

axios.get('https://vue-lessons-api.vercel.app/photo/list').then(res => {
  console.log('axios=>', res.data);
});

// 另外包裝成一個 function 來使用
function apiGetPhotoList() {
  return axios.get('https://vue-lessons-api.vercel.app/photo/list');
}

const resPhoto = await apiGetPhotoList();
console.log('photo list=>', resPhoto.data);
