"use strict";
function findById(items, id) {
    return items.find((item) => item.id === id);
}
const users = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];
const result = findById(users, 5);
console.log(result);
