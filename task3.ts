interface  Product  {
   title: string;
   price: number;
   inStock?: boolean
}
 
const product: Product  =  { title: "Laptop", price: 55000 } 

const product2: Product ={ title: "Mouse", price: 500, inStock: true }

function showPrice(product: Product):void{
    console.log(product.price)
}

showPrice(product)
showPrice(product2)