/**
* Array 與 Tuple(元組)
* tuple 是固定長度的 array，type 和 value 相互對應
*/
const tuple1 = [1, "a"];
const tuple2 = ["a", 1]; 
const tuple3 = [1, "a", 2];




/**
* 更多用法
*/
// 可選元素 ( ? 表示可選 )
const tuple4 = [10, 20];
const tuple5 = [10, 20, 30];

// 剩餘元素 ( ...rest )
const tuple6 = ["Mike", 85, 92, 78, 90];

// 不可修改 ( readonly )
const tuple7 = [1, "Mike"];
// tuple7[0] = 2; // Error: 不能修改 readonly tuple
