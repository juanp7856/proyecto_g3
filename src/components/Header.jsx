import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import logo from "../assets/LOGO.png"

const Header = () => {

    return <div className="header fs-3" style={ {paddingBottom : "4%"} }>
    <nav>
        <img src={logo} class="logo" />
        <ul className="nav-links">
            <li> <a href="">Inicio</a> </li>
            <li> <a href="">Acerca</a> </li>
            <li> <a href="">Soporte</a> </li>
            <li> <a href="">Reseñas</a> </li>
            <li> <a href="">Ranking</a> </li>
        </ul>
        <ul class="nav-icons">
            <li> <button className="btn-header"> <i class="bi bi-search"></i> </button> </li>
            <li> <button className="btn-header"> <i class="bi bi-person-fill"></i> </button> </li>
            <li> <button className="btn-header"> <i class="bi bi-cart-fill"></i> </button> </li>
        </ul>
    </nav>
</div>
}

export default Header