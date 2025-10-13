// typescript 變數宣告型別定義 number string boolean array object
// 基本原始類型
const age = 25;
const username = 'mike';
const isActive = true;

// 數字型別陣列
const numArr1 = [1, 2, 3];
const numArr2 = [1, 2, 3];

// 字串型別陣列
const strArr1 = ['a', 'b', 'c'];
const strArr2 = ['a', 'b', 'c'];

// 布林型別陣列
const boolArr1 = [true, false, true];
const boolArr2 = [true, false, true];

// 混合型別陣列
const mixedArr1 = [1, 'hello', 2, 'world'];
const mixedArr2 = [1, 'hello', 'world', 2];

// 二維陣列
const twoDArr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
// 二維陣列
const twoDArr2 = [
  [1, 2],
  [3, 4],
];

// 混合型別二維陣列
const mixed2DArr1 = [
  [1, 'a'],
  ['b', 2],
];

// 混合型別二維陣列
const mixed2DArr2 = [
  [1, 'a'],
  ['b', 2],
];

// 物件型別

// 物件有 id 跟 name 兩個屬性
const obj1 = { id: 1, name: 'mike' };

// 如果今天 name 可能會沒有值
const obj2 = { id: 1 };

// name 可能是 undefined
const obj3 = { id: 1, name: undefined };

// name 可能是 null
const obj4 = { id: 1, name: null };

// name 可能沒有值，有的話是 string 或是 null
const obj5 = { id: 1 };

// name 有可能是 string、null、undefined
const obj9 = { id: 1, name: 'mike' };
const obj6 = { id: 1, name: undefined };
const obj7 = { id: 1, name: null };

// 物件型別陣列
const objArr1 = [
  { id: 1, name: 'mike' },
  { id: 2, name: 'jane' },
];

// 物件型別陣列
const objArr2 = [
  { id: 1, name: 'mike' },
  { id: 2, name: 'jane' },
];

// 物件型別陣列
const objArr3 = [{ id: 1, name: 'mike' }, { id: 2 }];

// 物件型別陣列
const objArr4 = [
  { id: 1, name: 'mike' },
  { id: 2, name: null },
  { id: 3, name: undefined },
];
