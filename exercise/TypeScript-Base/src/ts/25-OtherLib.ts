// axios
import axios from "axios";

// Lodash
import _ from "lodash"; //找不到模組 'lodash' 的宣告檔案。 npm i --save-dev @types/lodash

// Swiper
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../css/style.css";

// ================================================

// Axios

type TPhotoList = {
  url: string;
};

function apiGetPhotoList() {
  return axios.get("https://vue-lessons-api.vercel.app/photo/list");
}
const photo = await apiGetPhotoList();

console.log(photo);

// ================================================


// Lodash

// 第三方套件就要看它的宣告檔案，沒有的話就要自己寫或是去找看看有沒有 @types/xxx
const arr: string[] = ["a", "b", "c", "d"];

const chunk: string[][] = _.chunk(arr, 2);

console.log(chunk);


// ================================================


// Swiper

const options = {
  modules: [Navigation, Pagination],
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
};

new Swiper(".mySwiper", options);
