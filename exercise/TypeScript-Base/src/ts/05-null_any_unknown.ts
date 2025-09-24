/*
null 類型表示一個明確的「空值」，通常用於表示：
- 資料不存在
- 初始化狀態
- API 可能返回空值的情況
*/
const data = null;

const user1: {
  id: number;
  name: string;
  avatar: string;
} = {
  id: 1,
  name: "Alice",
  avatar: "https://example.com/avatar.jpg"
};

const user2: {
  id: number;
  name: string;
  avatar: string; // 可能沒有頭像
} = {
  id: 2,
  name: "Bob", 
  avatar: null // 沒有設定頭像
};



/*
any 類型特點：
- 可以被賦予任何值
- 可以進行任何操作
- 完全關閉 TypeScript 的類型檢查
- 會「污染」其他變數的類型推論
*/
// any 的問題：失去類型安全
let count = 3;
count = "3";
count.toFixed(); // 運行時錯誤！字串沒有 toFixed 方法



/*
unknown 類型特點：
- 可以被賦予任何值
- 使用前必須進行類型檢查
- 不會污染其他變數
- 是 any 的安全替代方案
*/
let text = "hello";
text = 123;
text = { name: "test" };

// 必須進行類型檢查 typeof 才能使用 
console.log(text.toUpperCase());

console.log(text.toFixed(2));

