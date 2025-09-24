// 不需要回傳任何 value 的 function 後面可加上 :void 或不加
const compose = (name: string, age: number): void => {
  const inputTextRef = document.querySelector(".inpTxt") as HTMLInputElement;
  inputTextRef.value = `你好 ${name} ~ 今年 ${age} 歲`;
};

compose("Mike", 12);


// 回傳 string 的 function 後面加上 :string
const composeReturn = (name: string, age: number): string => {
  return `你好 ${name} ~ 今年 ${age} 歲`;
};

const res = composeReturn("Mike", 12);
console.log(res);


// 可以透過定義 input 跟 output 來限制 function 的輸入跟輸出型別
type THandleNumber = {
  (a: number, b: number): number;
};

const add: THandleNumber = (a, b) => a + b;
const reduce: THandleNumber = (a, b) => a - b;

console.log("加:", add(2, 3)); // -> 5
console.log("減:", reduce(6, 3)); // -> 3


// 寫法二：也可以透過箭頭函式來定義 function input 跟 output 
type TMathNumber = (a: number, b: number) => number;

const add2: TMathNumber = (a, b) => a + b;
const reduce2: TMathNumber = (a, b) => a - b;

console.log("加:", add2(2, 3)); // -> 5
console.log("減:", reduce2(6, 3)); // -> 3