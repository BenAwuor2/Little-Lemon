import React from "react";
import "../static/styles/Location.css";
import Mario_and_Adrian_A from "../static/images/Mario_and_Adrian_A.jpg";
import restaurant_chef_B from "../static/images/restaurant chef B.jpg";


function Location() {
  return (
    <main className="main">
      <div className="rest-txt">
        <h1>Little Lemon</h1>
        <p>Nairobi, Kenya</p>
        <h2>We pride ourselves in serving fresh organic meals,<br></br> direct from the farm stright to your plate.</h2>
      </div>
      <div className="rest-img">
        <img className="img-2" src={Mario_and_Adrian_A} alt="rest-1"></img>
        <img className="img-1" src={restaurant_chef_B} alt="rest-2"></img>
      </div>
    </main>
  );
}

export default Location;
