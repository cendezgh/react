import React from "react";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

const CartWidget = ({itemsInCart}) => {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={itemsInCart} color="error">
        <ShoppingCartIcon htmlColor="#FFF" />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
