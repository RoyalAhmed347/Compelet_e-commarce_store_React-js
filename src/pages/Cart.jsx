import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";

import CartItems from "../components/CartItems";
import FormatePrice from "../Helper/FormatePrice";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { cartItem = [] } = useCartContext();
  const [subTotal, setsubTotal] = useState(0);

  useEffect(() => {
    let newSubTotal = cartItem.reduce((total, elem) => {
      return total + elem.price * elem.quantity;
    }, 0);
    setsubTotal(newSubTotal);
  }, [cartItem]);

  return (
    <div className="container">
      {isAuthenticated && (
        <div className="user_profile">
          <img src={user.picture} alt={user.name} />
          <p className="text">{user.name}</p>
        </div>
      )}
      <div className="cart_page">
        <CartItems />
        <div className="amount_box">
          <div className="total_amonut">
            <div className="row">
              <p className="text">Sutotal: </p>
              <p className="text">
                <span>
                  <FormatePrice price={subTotal} />
                </span>
              </p>
            </div>
            <div className="row">
              <p className="text">Shiping Fee: </p>
              <p className="text">
                <span>
                  <FormatePrice price={(subTotal / 100) * 2} />
                </span>
              </p>
            </div>
            <hr />
            <div className="row">
              <p className="text">Total: </p>
              <p className="text">
                <span>
                  <FormatePrice price={subTotal + (subTotal / 100) * 2} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
