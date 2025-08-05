/**
* Array 與 Tuple(元組)
* tuple 是固定長度的 array，type 和 value 相互對應
*/
const tuple1: [number, string] = [1, "a"];
const tuple2: [number, string] = ["a", 1]; // error -> 不可以改變類型順序
const tuple3: [number, string] = [1, "a", 2]; // error -> 不可以多加類型




/**
* 更多用法
*/
// 可選元素 ( ? 表示可選 )
const tuple4: [number, number, number?] = [10, 20];
const tuple5: [number, number, number?] = [10, 20, 30];

// 剩餘元素 ( ...rest )
const tuple6: [string, ...number[]] = ["Mike", 85, 92, 78, 90];

// 不可修改 ( readonly )
const tuple7: readonly [number, string] = [1, "Mike"];
// tuple7[0] = 2; // Error: 不能修改 readonly tuple
