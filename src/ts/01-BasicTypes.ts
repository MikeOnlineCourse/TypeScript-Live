// typescript 變數宣告型別定義 number string boolean array object
// 基本原始類型
const age: number = 25;
const username: string = "mike";
const isActive: boolean = true;

// 數字型別陣列
const numArr1: number[] = [1, 2, 3];
const numArr2: Array<number> = [1, 2, 3];

// 字串型別陣列
const strArr1: string[] = ["a", "b", "c"];
const strArr2: Array<string> = ["a", "b", "c"];

// 布林型別陣列
const boolArr1: boolean[] = [true, false, true];
const boolArr2: Array<boolean> = [true, false, true];

// 混合型別陣列
const mixedArr1: (number | string)[] = [1, "hello", 2, "world"];
const mixedArr2: Array<number | string> = [1, "hello", "world", 2];

// 二維陣列
const twoDArr1: number[][] = [
  [1, 2, 3],
  [4, 5, 6]
];
// 二維陣列
const twoDArr2: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];

// 混合型別二維陣列
const mixed2DArr1: (number | string)[][] = [
  [1, "a"],
  ["b", 2],
];

// 混合型別二維陣列
const mixed2DArr2: Array<Array<number | string>> = [
  [1, "a"],
  ["b", 2],
];

// 物件型別
const obj1: { id: number; name: string } = { id: 1, name: "mike" };
const obj2: { id: number; name?: string } = { id: 1 };
const obj3: { id: number; name: string | undefined } = { id: 1, name: undefined };
const obj4: { id: number; name: string | null } = { id: 1, name: null };
const obj5: { id: number; name?: string | null } = { id: 1 };
const obj9: { id: number; name: string | undefined | null } = { id: 1, name: "mike" };
const obj6: { id: number; name: string | undefined | null } = { id: 1, name: undefined };
const obj7: { id: number; name: string | undefined | null } = { id: 1, name: null };

// 物件型別陣列
const objArr1: { id: number; name: string }[] = [
  { id: 1, name: "mike" },
  { id: 2, name: "jane" },
];

// 物件型別陣列
const objArr2: Array<{ id: number; name: string }> = [
  { id: 1, name: "mike" },
  { id: 2, name: "jane" },
];

// 物件型別陣列
const objArr3: Array<{ 
  id: number; 
  name?: string | null
}> = [
  { id: 1, name: "mike" }, 
  { id: 2 }
];

// 物件型別陣列
const objArr4: Array<{ 
  id: number; 
  name: string | undefined | null 
}> = [
  { id: 1, name: "mike" },
  { id: 2, name: null },
  { id: 3, name: undefined },
];