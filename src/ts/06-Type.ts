type TUserInfo = {
  id: number;
  name: string;
  age: number;
};

const user: TUserInfo = { id: 1, name: "mike", age: 12 };


/**
* 結合類型
*/
 type TJobInfo = {
  baseInfo: TUserInfo;
  job?: string;
 };

 const job: TJobInfo = {
  baseInfo: {
    id: 1,
    name: "mike",
    age: 12,
  },
  job: "Frontend Engineer",
};
 

/**
* 擴充類型
*/
 type THumanInfo = {
  sex: string;
  age: number;
};

type TPeopleInfo = THumanInfo & {
  name: string;
  address?: string;
};
 
const person: TPeopleInfo = {
  name: "mike",
  age: 12,
  sex: "boy",
  address: "Taiwan",
};
 
 