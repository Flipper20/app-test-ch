import React from "react";
import Logo from "../images/logo.jpg"
import "./navbar.css"
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                    <img className="header__logo" src= { Logo } alt="logo de la tienda" />
                    <h2 className="header__nombre">Flipper Gaming</h2>
            </div>
            <ul className="header__navegacion">
                <li className="header__links">Home</li>
                <li className="header__links">Tienda</li>

                <CartWidget itemsEnCarrito = { 0 }/>
            </ul>
        </header>
    )
}