import React from "react";

const CartWidget = () => {
    return(
        <button type="button" className="btn btn-primary position-relative">
        <img src="images/cart.svg" alt="carrito" width="32"/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    1
  </span>
</button>
    )
}

export default CartWidget;