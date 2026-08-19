"use strict";
const product = { title: "Laptop", price: 55000 };
const product2 = { title: "Mouse", price: 500, inStock: true };
function showPrice(product) {
    console.log(product.price);
}
showPrice(product);
showPrice(product2);
