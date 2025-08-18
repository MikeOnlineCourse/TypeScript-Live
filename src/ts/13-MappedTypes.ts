// 這個方法在你已知物件的鍵和對應的可能值時特別有用：
type TStateKeys = "Offline" | "Online" | "leave";

type TLolStateType = {
  [K in TStateKeys]: string;
};

// 偷懶的話也可以只鎖定 key 跟 value 的型別，不去鎖定物件的 key
type TLolStateTypeMap = {
    [key: string]: string;
}

// 可以鎖ㄉ住物件的 key 和 value 的型別
const lolState: TLolStateType = {
    Offline: "離線",
    Online: "在線",
    leave: "離開",
    // nostate: "不存在"
}

// nostate 就不會出現錯誤了
const lolState2: TLolStateTypeMap = {
    Offline: "離線",
    Online: "在線",
    leave: "離開",
    nostate: "不存在"
}

//===============================================
type TUserInfo = {
  id: number;
  name: string;
  email: string;
};

// keyof 會得到所有屬性 key 的聯合類型
type TUserInfoKeys = keyof TUserInfo; // ===>  "id" | "name" | "email"


type TUserInfoString = {
  [key in keyof TUserInfo]: string;
};

const userInfo1: TUserInfoString = {
  id: "123",
  name: "Mike",
  email: "mike@example.com"
};