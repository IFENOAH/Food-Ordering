import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfItems = cartCtx.items.reduce((currValue, item) => {
    return currValue + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfItems}</span>
    </button>
  );
};
export default HeaderCartButton;
