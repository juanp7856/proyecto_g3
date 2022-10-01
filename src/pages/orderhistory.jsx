import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../assets/pc_recomendada.png"
import "../styles/H14.css"
import CPU from "../assets/pc_comps/cpu.png"
import PLACAMADRE from "../assets/pc_comps/placamadre.png"
import RAM from "../assets/pc_comps/ram.png"
import REFLIQUIDA from "../assets/pc_comps/refliquida.png"
import WINDOWS from "../assets/pc_comps/windows.png"
import { useNavigate } from "react-router-dom"



const OrderHistory = () => {

    return <div className="bg-dark">
        <Header />
        <div className="container">

            <div className="row ">
                <div className="col-1 text-white" >
                    <div class="d-grid gap-2">
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }}>Order History</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }} onClick={()=>{}}>Profile Info</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }}>Log Out</button>
                    </div>
                </div>


                     <div className="container">

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={CPU} alt="CPU" /> </p>
                            </div>
                            <div className="col">
                            <p className="listatext">INTEL CORE I7-12700F 12-CORE</p>
                            </div>
                            <div className="col">
                            <p className="listapr">359$</p>
                            </div>
                            <div className="col">
                            <p className="listapr">21/09/2022</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={RAM} alt="RAM" /> </p>
                            </div>
                            <div className="col">
                            <p className="listatext">16GB DDR4 DUAL CHANNEL</p>
                            </div>
                            <div className="col">
                            <p className="listapr">69$</p>
                            </div>
                            <div className="col">
                            <p className="listapr">22/09/2022</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={REFLIQUIDA} alt="REF LIQUIDA" /></p>
                            </div>
                            <div className="col">
                            <p className="listatext">CORSAIR HIDRO SERIES H100I RGB</p>
                            </div>
                            <div className="col">
                            <p className="listapr">89$</p>
                            </div>
                            <div className="col">
                            <p className="listapr">23/09/2022</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={PC} alt="CASE" /></p>
                            </div>
                            <div className="col">
                            <p className="listatext">NZXT H510</p>
                            </div>
                            <div className="col">
                            <p className="listapr">99$</p>
                            </div>
                            <div className="col">
                            <p className="listapr">23/09/2022</p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={PLACAMADRE} alt="PLACAMADRE" /></p>
                            </div>
                            <div className="col">
                            <p className="listatext">ASUS PRIME B650M-A | INTEL</p>
                            </div>
                            <div className="col">
                            <p className="listapr">149$</p>
                            </div>
                            <div className="col">
                            <p className="listapr">24/09/2022</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={WINDOWS} alt="WINDOWS" /></p>
                            </div>
                            <div className="col">
                            <p className="listatext">WINDOWS 11 HOME + USB RECOVERY</p>
                            </div>
                            <div className="col">
                            <p className="listapr">120$</p>
                            </div>
                            <div className="col">
                            <p className="listapr">27/09/2022</p>
                            </div>
                        </div>
                        
                    </div>

              
                </div>
            </div>


        </div>
}

export default OrderHistory   