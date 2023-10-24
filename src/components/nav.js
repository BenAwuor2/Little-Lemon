import React from "react";
import logo from "../static/images/Logo .svg";
import  "../static/styles/nav.css";
function Nav () {
    return (
        <nav> 
            <img src={logo} alt="Logo"/> 
            <ul>
                <li><a href="https://example.com">Home</a></li>
                <li><a href="https://example2.com">About</a></li>
                <li><a href="https://example3.com">Menu</a></li>
                <li><a href="https://example3.com">Reservations</a></li>
                <li><a href="https://example3.com">Order Online</a></li>
                <li><a href="https://example3.com">Login</a></li>
            </ul>

        </nav>
    )
}

export default Nav;