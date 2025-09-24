const user = { id: 1, name: "mike", age: 12 };


/**
* 結合類型
*/

 const job = {
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

type TPeopleInfo = {
  name: string;
  address?: string;
};
 
const person = {
  name: "mike",
  age: 12,
  sex: "boy",
  address: "Taiwan",
};
 
 