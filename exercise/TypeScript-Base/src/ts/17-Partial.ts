// Partial 屬性變成可選的

type TUserDataInfo = {
  name: string;
  age: number;
  address: string;
};

// 把所有的屬性變成可選的
const user1: TUserDataInfo = {
  name: "Mike",
  age: 12,
};


// 也可以在 function 中當參數來使用
function getUserInfo(info: TUserDataInfo): TUserDataInfo {
  return info;
}
