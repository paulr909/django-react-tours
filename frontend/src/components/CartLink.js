import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const CartLink = ({ item }) => {
  return (
    <Link className="Cart" to="/checkout">
      <FaShoppingCart />
      {item && item.name}
    </Link>
  );
};

export default CartLink;
