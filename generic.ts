function getFirst<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirst([10, 20, 30]);

const firstName = getFirst(["Gyana", "Kamal", "Rahim"]);