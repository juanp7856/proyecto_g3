import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import logo from "../assets/LOGO.png"

const Header = () => {

    return <div className="header fs-3 bg-dark" style={ {paddingBottom : "4%"} }>
    <nav>
        <img src={logo} className="logo" />
        <ul className="nav-links">
            <li> <a href="">Inicio</a> </li>
            <li> <a href="">Acerca</a> </li>
            <li> <a href="">Soporte</a> </li>
            <li> 
                <a href="">Reseñas</a> 
                <ul className="submenu">
                    <li> <a href="">Usuarios</a> </li>
                    <li> <a href="">Influencers</a> </li>
                </ul>
            </li>
            <li> 
                <a href="">Ranking</a> 
                <ul className="submenu">
                    <li> <a href="">Periféricos</a> </li>
                    <li> <a href="">Computadoras</a> </li>
                </ul>
            </li>
        </ul>
        <ul className="nav-icons">
            <li> <button className="btn-header"> <i class="bi bi-search"></i> </button> </li>
            <li> <button className="btn-header"> <i class="bi bi-person-fill"></i> </button> </li>
            <li> <button className="btn-header"> <i class="bi bi-cart-fill"></i> </button> </li>
        </ul>
    </nav>
</div>
}

export default Header