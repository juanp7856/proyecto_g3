import React, { useState } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom"

const HistoriaExtraFP = () => {
    return <div>
        <Header />

        <form className="createaccount container" style={{ width: "750px", paddingtop: "10px" }}>

            <div className="fst-italic text-white h3" style={{ paddingTop: "10px" }}>RECUPERE SU CUENTA</div>
            <p className="text-white">Por favor, ingrese su correo electrónico, le enviaremos un enlace para que restablezca</p>
            <div className="input-group">
                <span className="input-group-text">Correo electrónico</span>
                <input type="text" className="form-control"></input>
            </div>
            <div style={{ paddingBottom: "0px", paddingTop: "10px" }}>
                <button className="rounded border-0 btn-primary h5" style={{ padding: "15px" }} type="button">Restablecer contraseña</button>
            </div>


        </form >
    </div >


}

export default HistoriaExtraFP