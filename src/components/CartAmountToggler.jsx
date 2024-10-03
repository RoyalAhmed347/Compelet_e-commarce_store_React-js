import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const CartAmountToggler = ({ totalitem, Decreacs, Increacs, min = 1 }) => {
  return (
    <div className="toggler_style">
      <button disabled={totalitem <= min} onClick={() => Decreacs()}  >
        <FaMinus />
      </button>

      <p className="text">{totalitem}</p>

      <button onClick={() => Increacs()}>
        <FaPlus />
      </button>
    </div>
  );
};

export default CartAmountToggler;
