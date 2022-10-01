import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H10.css"
import { useNavigate } from "react-router-dom"

const PrebuiltSelect = () => {
    const navigate = useNavigate();

    return <div className="bg-dark">
        <Header />

        <div className="container" style={{ textAlign: "center" }}>
            <div className="mb-5" style={{ width: "50%", float: "left" }}>
                <h1 className="text-white">¿Qué necesitas?</h1>
            </div>
            <div className="mb-5" style={{ width: "50%", float: "right"}}>
                <button className="btn btn-light" style={{ width: "125px", marginRight: "15px" }} onClick={()=>{navigate("/")}}>ATRÁS</button>
                <button className="btn btn-success" style={{ width: "125px", marginLeft: "15px" }} onClick={()=>{navigate("/prebuilt")}}>SIGUIENTE</button>
            </div>
        </div>

        <div style={{ height:"200px" }}>&nbsp;</div>

        <div className="container" style={{ textAlign: "center" }}> 
            <div className="row mb-5">
                <div className="col">
                    <button className="boton btn-success">
                        <i class="bi bi-controller"></i>
                        <p>Gaming</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success">
                        <i class="bi bi-pencil-square"></i>
                        <p>Diseño</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success">
                        <i class="bi bi-code-slash"></i>
                        <p>Coding</p>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button className="boton btn-success">
                        <i class="bi bi-house-fill"></i>
                        <p>Render</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success">
                        <i class="bi bi-building"></i>
                        <p>Oficina</p>
                    </button>
                </div>
                <div className="col">
                    <button className="boton btn-success">
                        <i class="bi bi-alt"></i>
                        <p>Otros</p>
                    </button>
                </div>
            </div>
            </div>
    </div>
}

export default PrebuiltSelect