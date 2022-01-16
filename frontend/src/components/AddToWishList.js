import React from "react";
import { AppContext } from "../AppContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./AddToWishList.css";

const AddToWishList = ({ itemId }) => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <button
            className="AddToWishList"
            onClick={() => context.handleToggleWishList(itemId)}
          >
            {context.wishList.includes(itemId) ? <FaHeart /> : <FaRegHeart />}
          </button>
        );
      }}
    </AppContext.Consumer>
  );
};

export default AddToWishList;
