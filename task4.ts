 type  PaymentMethod  = "cash" | "card" | "mobile";
  interface Order {
    id : number;
    method: PaymentMethod;
  } 

  const order: Order = {
     id : 5,
     method: "card"
  }
  console.log(order)
