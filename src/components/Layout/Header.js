import mealsImage from "../../assets/meals.jpg";
import React, { useState } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Modal from "../UI/Modal/Modal";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table Full of delicious food!" />
      </div>
    </React.Fragment>
  );
};

export default Header;
