import React, { Fragment } from "react";
import image1 from "../../assets/meals.jpeg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1 className={styles.title}>Noah's-Kitchen</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={image1} alt="table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
