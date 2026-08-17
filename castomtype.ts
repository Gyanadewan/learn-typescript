
type User ={
  name: string;
  age: number;
}

function introduceUser(user: User): string {
  return `My name is ${user.name} and I am ${user.age} years old.`;
}

const user: User = {
  name: "Gyana",
  age: 22
};

console.log(introduceUser(user));