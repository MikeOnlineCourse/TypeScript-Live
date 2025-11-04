import "../css/normalize.css";
import "../css/style.css";
import {
  routerQueryReplace,
  routerQueryPush,
  routerQueryRemove,
  getParams,
} from "./utils/url.js";
import { apiGetTagsList, apiGetTagsProduct } from "../api/index.js";
import loading from "./utils/load.js";
import type { Tag, Product, ApiTagsProductParams } from "../api/types.js";

const tagParent = document.querySelector(".parent") as HTMLDivElement;
const tagChild = document.querySelector(".child") as HTMLDivElement;
const content = document.querySelector(".content") as HTMLElement;
let tagsArr: Tag[] = [];
let productsArr: Product[] = [];
let tagsHtml = "";
let tagsChildHtml = "";
let productsHtml = "";

// 產品列表渲染
const productsRender = (): Promise<void> => {
  productsHtml = "";
  if (productsArr.length === 0) {
    productsHtml = "<h1 class='no_data'>目前尚無任何資料</h1>";
  } else {
    productsArr.forEach((item) => {
      productsHtml += `
        <div class="card">
          <h1>${item.title}</h1>
          <a href="${item.url}" target="_blank">${item.url}</a>
          <p>${item.content}</p>
        </div>
      `;
    });
  }
  content.innerHTML = productsHtml;
  console.log(5);
  return new Promise((resolve) => setTimeout(resolve, 0));
};

// 抓取產品資料
const fetchProducts = async (): Promise<void> => {
  try {
    const tag = getParams().get("tag");
    const child = getParams().get("child");
    const params: ApiTagsProductParams = {};
    if (tag) params.tag = tag;
    if (child) params.child = child;
    const res = await apiGetTagsProduct(params);

    productsArr = res.data;
    console.log(4);
  } catch (error) {
    console.log(error);
  }
};

// 第二層選單渲染
const tagChildRender = (): Promise<void> => {
  tagsChildHtml = "";
  const tagQuery = getParams().get("tag");
  const childQuery = getParams().get("child");
  const child = tagsArr.filter((item) => item.id === tagQuery);
  child.forEach((childItem) => {
    childItem.child.forEach((item) => {
      tagsChildHtml += `
        <a class="${childQuery === item.id ? "active" : ""}" data-key="${
        item.id
      }">${item.name}</a>
      `;
    });
  });
  tagChild.innerHTML = tagsChildHtml;
  console.log(3);
  return new Promise((resolve) => setTimeout(resolve, 0));
};

// 第一層選單渲染
const tagsRender = (): Promise<void> => {
  tagsHtml = "";
  const tagQuery = getParams().get("tag");
  tagsArr.forEach((item) => {
    tagsHtml += `
        <a class="${tagQuery === item.id ? "active" : ""}" data-key="${
      item.id
    }">${item.name}</a>
    `;
  });
  tagParent.innerHTML = tagsHtml;
  console.log(2);
  return new Promise((resolve) => setTimeout(resolve, 0));
};

// 抓 tags 所有資料
const fetchTags = async (): Promise<void> => {
  try {
    const res = await apiGetTagsList();
    tagsArr = res.data;
    console.log(1);
  } catch (error) {
    console.log(error);
  }
};

// 網址確認
const routeCheck = (): Promise<void> => {
  if (window.location.search === "") {
    routerQueryReplace("tag=frontEnd");
  }
  return new Promise((resolve) => setTimeout(resolve, 0));
};

// 抓完產品資料後跟者渲染
const fetchProductsRender = async (): Promise<void> => {
  await fetchProducts(); // 抓取產品資料
  await productsRender(); // 產品列表渲染
};

// 第二層 tag event listener
const addTagChildListener = (): void => {
  const tagChildAll = document.querySelectorAll(".child > a");
  for (let i = 0; i < tagChildAll.length; i++) {
    tagChildAll[i].addEventListener("click", async (e: Event) => {
      loading.show();
      const target = e.target as HTMLElement;
      const tagKey = target.attributes.getNamedItem("data-key")?.value;
      if (!tagKey) return;
      tagChildAll.forEach((item) => item.classList.remove("active"));
      target.classList.add("active");
      routerQueryPush(`child=${tagKey}`);
      await fetchProductsRender(); // 抓產品資料以及渲染
      loading.hidden();
    });
  }
};

// 第一層 tag event listener
const addTagListener = (): void => {
  const tagParentAll = document.querySelectorAll(".parent > a");
  for (let i = 0; i < tagParentAll.length; i++) {
    tagParentAll[i].addEventListener("click", async (e: Event) => {
      loading.show();
      const target = e.target as HTMLElement;
      const tagKey = target.attributes.getNamedItem("data-key")?.value;
      if (!tagKey) return;
      routerQueryPush(`tag=${tagKey}`);
      tagParentAll.forEach((item) => item.classList.remove("active"));
      target.classList.add("active");
      routerQueryRemove("child"); // 每次切換先移除第二層的 tag 選取
      await tagChildRender(); // 第二層渲染
      await fetchProductsRender(); // 抓產品資料以及渲染
      addTagChildListener(); // 第二層 event listener
      loading.hidden();
    });
  }
};

// 初始化
const init = async (): Promise<void> => {
  loading.show();
  await routeCheck(); // 網址確認
  await fetchTags(); // 抓 tags 所有資料
  await tagsRender(); // 第一層 tags 渲染
  await tagChildRender(); // 第二層 tags 渲染
  await fetchProductsRender(); // 抓產品資料以及渲染
  loading.hidden();
  addTagListener();
  addTagChildListener();
};

init();
