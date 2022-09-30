import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../assets/pc_recomendada.png"
import "../styles/H14.css"

import CPU from "../assets/pc_comps/cpu.png"
import ANTENA from "../assets/pc_comps/antena.png"
import FUENTEPODER from "../assets/pc_comps/fuentepoder.png"
import GRAFICA from "../assets/pc_comps/grafica.png"
import PLACAMADRE from "../assets/pc_comps/placamadre.png"
import RAM from "../assets/pc_comps/ram.png"
import REFLIQUIDA from "../assets/pc_comps/refliquida.png"
import SSD from "../assets/pc_comps/ssd.png"
import VENTILADORES from "../assets/pc_comps/ventiladores.png"
import WINDOWS from "../assets/pc_comps/windows.png"
import ARMADO from "../assets/armado.png"

const historia14 = () => {
    return <div className="bg-dark">
        <Header />
        <div style={{ height: "-250px" }}>&nbsp;</div>

        <div className="container justify-content-start" >
            <div className="row">
                <div className="col-1">
                    <div class="d-grid gap-3">
                        <button className="btn bg-white text-left col" style={{ width: "320px", height: "50px" }}>Order History</button>
                        <button className="btn bg-white text-left col-md-6" style={{ width: "320px", height: "50px" }}>Profile Info</button>
                        <button className="btn bg-white text-left col-md-6" style={{ width: "320px", height: "50px" }}>Log Out</button>
                    </div>
                </div>
                
                <div className="col-10">
                <div style={{ width: "70%", float: "right" }}>
                <div className="bg-gradient" style={{ backgroundColor: "blue", width: "95%", height: "100%" }}>
                    <div className="row">
                        <div className="col mt-4">
                            <div>
                                <div style={{ width: "20%", float: "left" }}>
                                    <img className="listaimg" src={CPU} alt="CPU" />
                                </div>
                                <div style={{ width: "80%", float: "right" }}>
                                    <div style={{ width: "60%", float: "left" }}><p className="listatext">INTEL CORE I7-12700F 12-CORE</p></div>
                                    <div style={{ width: "25%", float: "right" }}><p className="listapr">21/09/2022</p></div>
                                    <div style={{ width: "15%", float: "right" }}><p className="listapr">359$</p></div>
                                </div>
                            </div>

                            <hr style={{ color: "black", height: "10px" }} />

                            <div className="mt-5">
                                <div style={{ width: "20%", float: "left" }}>
                                    <img className="listaimg" src={RAM} alt="RAM" />
                                </div>
                                <div style={{ width: "80%", float: "right" }}>
                                    <div style={{ width: "60%", float: "left" }}><p className="listatext">16GB DDR4 DUAL CHANNEL</p></div>
                                    <div style={{ width: "25%", float: "right" }}><p className="listapr">22/09/2022</p></div>
                                    <div style={{ width: "15%", float: "right" }}><p className="listapr">69$</p></div>
                                </div>
                            </div>

                            <hr style={{ color: "black", height: "20px" }} />

                            <div className="mt-5">
                                <div style={{ width: "20%", float: "left" }}>
                                    <img className="listaimg" src={REFLIQUIDA} alt="REF LIQUIDA" />
                                </div>
                                <div style={{ width: "80%", float: "right" }}>
                                    <div style={{ width: "60%", float: "left" }}><p className="listatext">CORSAIR HIDRO SERIES H100I RGB</p></div>
                                    <div style={{ width: "25%", float: "right" }}><p className="listapr">23/09/2022</p></div>
                                    <div style={{ width: "15%", float: "right" }}><p className="listapr">89$</p></div>
                                </div>
                            </div>

                            <hr style={{ color: "black", height: "20px" }} />

                            <div className="mt-5">
                                <div style={{ width: "20%", float: "left" }}>
                                    <img className="listaimg" src={PC} alt="CASE" />
                                </div>
                                <div style={{ width: "80%", float: "right" }}>
                                    <div style={{ width: "60%", float: "left" }}><p className="listatext">NZXT H510</p></div>
                                    <div style={{ width: "25%", float: "right" }}><p className="listapr">23/09/2022</p></div>
                                    <div style={{ width: "15%", float: "right" }}><p className="listapr">99$</p></div>
                                </div>
                            </div>

                            <hr style={{ color: "black", height: "20px" }} />

                            <div className="mt-5">
                                <div style={{ width: "20%", float: "left" }}>
                                    <img className="listaimg" src={PLACAMADRE} alt="PLACAMADRE" />
                                </div>
                                <div style={{ width: "80%", float: "right" }}>
                                    <div style={{ width: "60%", float: "left" }}><p className="listatext">ASUS PRIME B650M-A | INTEL</p></div>
                                    <div style={{ width: "25%", float: "right" }}><p className="listapr">24/09/2022</p></div>
                                    <div style={{ width: "15%", float: "right" }}><p className="listapr">149$</p></div>
                                </div>
                            </div>

                            <hr style={{ color: "black", height: "25px" }} />

                            <div className="mt-5">
                                <div style={{ width: "20%", float: "left" }}>
                                    <img className="listaimg" src={WINDOWS} alt="WINDOWS" />
                                </div>
                                <div style={{ width: "80%", float: "right" }}>
                                    <div style={{ width: "60%", float: "left" }}><p className="listatext">WINDOWS 11 HOME + USB RECOVERY</p></div>
                                    <div style={{ width: "25%", float: "right" }}><p className="listapr">27/09/2022</p></div>
                                    <div style={{ width: "15%", float: "right" }}><p className="listapr">120$</p></div>
                                </div>
                            </div>
                        </div>

                </div>

            </div>


            


                    </div>
                </div>
            </div>

        </div>

    </div>
}

export default historia14   