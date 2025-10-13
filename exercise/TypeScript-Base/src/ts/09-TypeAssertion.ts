// unknown 斷言基礎型別
const priceNum: unknown = 3.14159;
const countNun = priceNum;
console.log(countNun.toFixed());

// 寫法二（不常見）
const priceNum2: unknown = 3.14159;
const countNum2 = priceNum2;
console.log(countNum2.toFixed());

// unknown 斷言基礎型別
const strValue: unknown = 'this is a string';
const strLength = strValue.length;
console.log(strLength);

// unknown 斷言物件型別
const apiResponse: unknown = { name: 'Mike', age: 12 };
const userInfo = apiResponse;
console.log(userInfo.name); // -> "Mike"
