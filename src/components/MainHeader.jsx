import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"


const MainHeader = () => {

    return <div className="header fs-3 " style={{ paddingBottom: "4%" }}>
        <nav>
            <ul className="nav-links" style={{ marginLeft: "35%" }}>
                <li> <a href="">Inicio</a> </li>
                <li> <a href="">Acerca</a> </li>
                <li> <a href="">Soporte</a> </li>
                <li> <a href="">Reseñas</a> </li>
                <li> 
                    <a href="">Ranking</a> 
                    <ul className="submenu">
                        <li> <a href="">Periféricos</a> </li>
                        <li> <a href="">Computadoras</a> </li>
                    </ul>
                </li>
            </ul>
            <ul class="nav-icons">
                <li> <button className="btn-header"> <i class="bi bi-search"></i> </button> </li>
                <li> <button className="btn-header"> <i class="bi bi-person-fill"></i> </button> </li>
                <li> <button className="btn-header"> <i class="bi bi-cart-fill"></i> </button> </li>
            </ul>
        </nav>
    </div>
}

export default MainHeader