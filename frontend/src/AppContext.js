import React from "react";

export const AppContext = React.createContext({
  booking: null,
  wishList: [],
  handleToggleWishList: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
});
