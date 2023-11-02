import React from "react";
import "../static/styles/header.css";
import rest from "../static/images/restauranfood.jpg";

function Header() {
  return (
    <header className="header">
      <div className="header-intro">
        <h1>Little Lemon</h1>
        <span>Nairobi, Kenya</span>
        <p>We pride ourselves in serving fresh organic meals,<br></br> direct from the farm straight to your plate.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="header-image">
        <img src={rest} alt="pic" />
      </div>
    </header>
  );
}

export default Header;
