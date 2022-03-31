import React, { Fragment } from "react";
import image1 from "../../assets/meals.jpeg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Noah's</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={image1} alt="table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
