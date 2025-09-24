// Readonly

// 物件
type TUserInfo = {
  name: string,
  age: number
}

const user1: TUserInfo = { name: "Mike", age: 25 };

user1.name = "Andy";  // 無法更改 name 內的屬性，因為已經被設定為只能讀取

// ======================================================
//陣列
type TNumbersArr = number[];

const numbers1: TNumbersArr = [1, 2, 3, 4, 5];

numbers1[0] = 10; // 類型 'readonly number[]' 中的索引簽章只允許讀取。

console.log(numbers1[0]); // 可以讀取


