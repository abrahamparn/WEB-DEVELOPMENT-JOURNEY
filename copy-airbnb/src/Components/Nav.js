import React from "react";
import airBnbLogo from "../Airbnb-logo.png"
export default function Nav(){

    return (
        <nav className="nav">
            <img src={airBnbLogo} loading="lazy" className="nav-logo"/>

        </nav>
        

    )
}