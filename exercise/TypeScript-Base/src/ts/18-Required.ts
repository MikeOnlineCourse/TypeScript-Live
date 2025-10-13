// Required

type TUserRequiredInfo = {
  name: string;
  age?: number;
  address?: string;
};

// 把所有的屬性變成必選的
const user1: TUserRequiredInfo = {
  name: 'Mike',
  age: 12,
};
