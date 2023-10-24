import React from "react";
import restaurant from "../static/images/restaurant.jpg";
import "../static/styles/footer.css";

function Footer () {
    return (
        <footer>       
            <nav>
            <img src={restaurant} alt="img"></img>
                <h1>Navigation</h1>
                <ul>
                    <li><a href="https://example.com">Home</a></li>
                    <li><a href="https://example2.com">About</a></li>
                    <li><a href="https://example3.com">Menu</a></li>
                    <li><a href="https://example3.com">Reservations</a></li>
                    <li><a href="https://example3.com">Order Online</a></li>
                    <li><a href="https://example3.com">Login</a></li>
                </ul>
            </nav>

            <nav>
                <h1>Conacts</h1>
                <ul>
                    <li><a href="https://example.com">Email</a></li>
                    <li><a href="https://example2.com">Telephone</a></li>
                    <li><a href="https://example3.com">Fax</a></li>
                </ul>
            </nav>

            <nav>
                <h1>Social links</h1>
                <ul>
                    <li><a href="https://example.com">Youtube</a></li>
                    <li><a href="https://example2.com">Twitter</a></li>
                    <li><a href="https://example3.com">Facebook</a></li>
                </ul>
            </nav>
            
            
        </footer>
    )
}

export default Footer;