import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    total = total + element.salary;
    console.log(total);
  }

  return (
    <div>
      <h5>Selected Total:{cart.length}</h5>
      <p>Playera:{cart.name}</p>
      <h4>Total Salary:${total}</h4>
    </div>
  );
};

export default Cart;
