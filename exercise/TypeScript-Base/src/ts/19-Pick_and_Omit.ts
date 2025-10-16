// Pick_and_Omit
type TUserAllType = {
  name: string;
  age: number;
  userAddress: string;
  companyName: string;
  jobTitle: string;
  seniority: number;
  companyAddress: string;
};

// 可以使用 Pick 來挑選出需要的屬性，另外組成新的 type
const userBaseType = {
  name: 'Mike',
  userAddress: 'Taiwan',
  jobTitle: 'Frontend Engineer',
};

// 使用 Omit 來挑選出不需要的屬性，另外組成新的 type
const userJobType = {
  companyName: 'TheCodingPro',
  jobTitle: 'Teacher',
  seniority: 3,
  companyAddress: '台灣台北市',
};

// ====================================
// 實際情境：表單處理中的應用

type TProductForm = {
  name: string; // 商品名稱
  description: string; // 商品說明
  price: number; // 價格
  category: string; // 商品類別
  images: File[]; // 商品的圖片
  isPublished: boolean; // 是否發佈
  seoTitle: string; // SEO 標題
  seoDescription: string; //  SEO 說明
};

// 1. 基本產品資訊 "name" | "description" | "price" | "category"

// 2. 其他設定 "seoTitle" | "seoDescription"

// 3. 圖片上傳 "images"

// 4. 發布設定 "isPublished"
