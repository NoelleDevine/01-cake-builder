import { useState } from "react";
import "./Header.css";
import dog from "../images/dogEatingCake.jpg";
import arrow from "../images/arrow.gif";

const Header = () => {
  return (
    <header className="Header">
      <h1>
        Welcome To <br></br>The Barking Baker
      </h1>
      <h2>Your Dog Wants a Cake</h2>
      <img className="dogPic" src={dog}></img>
      <h3>Start your cake today!</h3>
      <img src={arrow} alt="arrow"></img>
    </header>
  );
};

export default Header;
