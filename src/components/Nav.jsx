import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdMenu, MdClose } from "react-icons/md";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Nav = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [manuToggler, setmanuToggler] = useState(false);
  const { cartItem } = useCartContext();
  const [totalCartItems, settotalCartItems] = useState(0);
  useEffect(() => {
    let newTotal = cartItem.reduce((total, elem) => {
      return total + elem.quantity;
    }, 0);
    settotalCartItems(newTotal);
  }, [cartItem]);

  return (
    <div className="flex navbar">
      <div className="brand_logo">
        <Link to="/">
          <img className="logo_img" src="./assets/images/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className=" nav_manu">
        <ul className={manuToggler ? `main_menu togged` : `main_menu `}>
          <NavLink to="/" onClick={() => setmanuToggler(false)}>
            <li className="nav_list">Home</li>
          </NavLink>
          <NavLink to="/about" onClick={() => setmanuToggler(false)}>
            <li className="nav_list">About</li>
          </NavLink>
          <NavLink to="/products" onClick={() => setmanuToggler(false)}>
            <li className="nav_list">Products</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => setmanuToggler(false)}>
            <li className="nav_list">Contact</li>
          </NavLink>
          {isAuthenticated ? (
            <NavLink onClick={() => setmanuToggler(false)}>
              <li className="nav_list">
                <button
                  className="btn login_btn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Log Out
                </button>
              </li>
            </NavLink>
          ) : (
            <NavLink onClick={() => setmanuToggler(false)}>
              <li className="nav_list">
                <button className="btn" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              </li>
            </NavLink>
          )}

          <NavLink to="/cart" onClick={() => setmanuToggler(false)}>
            <div className="cart_troly">
              <AiOutlineShoppingCart className="troly" size={25} />
              <span className="cart_count">{totalCartItems}</span>
            </div>
          </NavLink>
        </ul>
      </div>
      <div className="toggler">
        {manuToggler ? (
          <MdClose size={22} onClick={() => setmanuToggler(!manuToggler)} />
        ) : (
          <MdMenu size={22} onClick={() => setmanuToggler(!manuToggler)} />
        )}
      </div>
    </div>
  );
};

export default Nav;
