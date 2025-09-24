declare global {
  type TUserLogin = {
    email: string;
    password: string;
  };

  type TUserRegister = {
    name: string;
    email: string;
    password: string;
  };
}
// 一定要給 export，讓檔案被視為模組
export {};
