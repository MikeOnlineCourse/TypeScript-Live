// 非同步(Asynchronous)函式
import type { AxiosResponse } from 'axios';
import axios from 'axios';

// 常見的舊寫法
// import axios, { AxiosResponse } from "axios";

type TPhotoList = {
  url: string;
};

axios.get<TPhotoList[]>("https://vue-lessons-api.vercel.app/photo/list").then((res: AxiosResponse<TPhotoList[]>) => {
  console.log("axios=>", res.data);
});


// 另外包裝成一個 function 來使用
function apiGetPhotoList(): Promise<AxiosResponse<TPhotoList[]>> {
  return axios.get("https://vue-lessons-api.vercel.app/photo/list");
}

const resPhoto = await apiGetPhotoList();
console.log("photo list=>", resPhoto.data);