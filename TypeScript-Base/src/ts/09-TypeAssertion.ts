
// unknown 斷言基礎型別
const priceNum: unknown = 3.14159;
const countNun: number = priceNum as number; // 如果你確定類型，可以使用断言告訴ts編譯器它是什麼類型
console.log(countNun.toFixed()); // -> '3'

// 寫法二（不常見）  
const priceNum2: unknown = 3.14159;
const countNum2: number = <number>priceNum2;
console.log(countNum2.toFixed());

// unknown 斷言基礎型別
const strValue: any = "this is a string";
const strLength: number = (strValue as string).length;
console.log(strLength);

// unknown 斷言物件型別
const apiResponse: unknown = { name: "Mike", age: 12 };
const userInfo = apiResponse as { name: string; age: number };
console.log(userInfo.name); // -> "Mike"
