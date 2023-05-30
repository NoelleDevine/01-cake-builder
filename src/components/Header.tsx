import { useState } from "react";
import "./Header.css";
import LayerAdd from "./LayerAdd";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        Welcome To <br></br>The Barking Baker
      </h1>
      <h2>Your Dog Wants a Cake</h2>
      <img src="./images/dogEatingCake.jpg" alt="" />
      <h3>Start your cake today!</h3>
      <img src="./images/arrow.gif" alt="" />
    </header>
  );
};

export default Header;
