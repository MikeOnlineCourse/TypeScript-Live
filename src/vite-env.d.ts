/// <reference types="vite/client" />


// 可以識別 CSS 檔案的 import
declare module "*.css" {
  const content: string;
  export default content;
 }
 
 // 針對 swiper CSS 檔案宣告
 declare module "swiper/css";
 declare module "swiper/css/navigation";
 declare module "swiper/css/pagination";
 declare module "swiper/css/scrollbar";
 declare module "swiper/css/autoplay";
 

