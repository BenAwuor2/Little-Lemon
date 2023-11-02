import React from "react";
import "../static/styles/CustomersSay.css";
import prof from "../static/images/restaurant chef B.jpg";

function CustomersSay() {
  return (
    <main className="testimonials">
        <h1>
            Testimonials
        </h1>
        <div className="users">
            <div className="rate">
                <h2>Ratings</h2>
                <div className="profile">
                    <img src={prof} alt="profile"></img>
                    <p>Scores</p>
                </div>
                <h2>User Profile</h2>
            </div>

            <div className="rate">
                <h2>Ratings</h2>
                <div className="profile">
                    <img src={prof} alt="profile"></img>
                    <p>Scores</p>
                </div>
                <h2>User Profile</h2>
            </div>

            <div className="rate">
                <h2>Ratings</h2>
                <div className="profile">
                    <img src={prof} alt="profile"></img>
                    <p>Scores</p>
                </div>
                <h2>User Profile</h2>
            </div>

            <div className="rate">
                <h2>Ratings</h2>
                <div className="profile">
                    <img src={prof} alt="profile"></img>
                    <p>Scores</p>
                </div>
                <h2>User Profile</h2>
            </div>
        </div>
    </main>
  );
}

export default CustomersSay;
