import React from "react";
import salad from "../static/images/greek salad.jpg";
import "../static/styles/Specials.css";


function Specials () {
    return (
        <main className="specials"> 
            
                <div className="txt">
                    <h1>This weeks specials!</h1>
                    <button>Reserve a Table</button>
                </div>
                <div className="specials-desc">
                    <div className="specials-cont">
                        <img src={salad} alt="pics"></img>
                        <div className="meal-txt">
                            <h3>Nyama Choma</h3>
                            <span>$ 12.00</span>
                        </div>
                        <p>It includes Goat meat special, grilled and smoked over fire to achieve a dripping juicy tenderness. Served alongside ugali and mokimo.</p>
                        <div className="order-sec">
                            <h3>Order Online <span>--></span></h3>
                            
                        </div>
                    </div>

                    <div className="specials-cont">
                        <img src={salad} alt="pics"></img>
                        <div className="meal-txt">
                            <h3>Nyama Choma</h3>
                            <span>$ 12.00</span>
                        </div>
                        <p>It includes Goat meat special, grilled and smoked over fire to achieve a dripping juicy tenderness. Served alongside ugali and mokimo.</p>
                        <div className="order-sec">
                            <h3>Order Online <span>--></span></h3>
                            
                        </div>
                    </div>

                    <div className="specials-cont">
                        <img src={salad} alt="pics"></img>
                        <div className="meal-txt">
                            <h3>Nyama Choma</h3>
                            <span>$ 12.00</span>
                        </div>
                        <p>It includes Goat meat special, grilled and smoked over fire to achieve a dripping juicy tenderness. Served alongside ugali and mokimo.</p>
                        <div className="order-sec">
                            <h3>Order Online <span>--></span></h3>
                            
                        </div>
                    </div>


                </div>
                
            
            
        </main>
    )
}

export default Specials;