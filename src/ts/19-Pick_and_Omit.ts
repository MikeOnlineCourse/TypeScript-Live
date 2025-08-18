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
const userBaseType: Pick<TUserAllType, "name" | "userAddress" | "jobTitle"> = {
  name: "Mike",
  userAddress: "Taiwan",
  jobTitle: "Frontend Engineer",
};

// 使用 Omit 來挑選出不需要的屬性，另外組成新的 type
const userJobType: Omit<TUserAllType, "name" | "age" | "userAddress"> = {
  companyName: "TheCodingPro",
  jobTitle: "Teacher",
  seniority: 3,
  companyAddress: "台灣台北市",
};

// ====================================
// 實際情境：表單處理中的應用

type TProductForm = {
    name: string;  // 商品名稱
    description: string; // 商品說明
    price: number; // 價格
    category: string; // 商品類別
    images: File[]; // 商品的圖片
    isPublished: boolean; // 是否發佈
    seoTitle: string; // SEO 標題
    seoDescription: string; //  SEO 說明
};


// 1. 基本產品資訊
type BasicProductInfo = Pick<TProductForm, "name" | "description" | "price" | "category">;

// 2. 其他設定
type otherProductInfo = Pick<TProductForm, "seoTitle" | "seoDescription">;

// 3. 圖片上傳
type ProductMedia = Pick<TProductForm, "images">;

// 4. 發布設定
type PublishSettings = Pick<TProductForm, "isPublished">;

/**
  * (補充)
      File 是瀏覽器內建的 Web API 類型，代表一個檔案物件，包含：
      name: 檔案名稱（如 "photo.jpg"）
      size: 檔案大小（如 1024567 bytes）
      type: 檔案類型（如 "image/jpeg"）
      lastModified: 最後修改時間


  * File[] : 是 File 物件的陣列，代表有多個檔案
*/