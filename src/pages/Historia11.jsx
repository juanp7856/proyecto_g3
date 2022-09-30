import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../assets/pc_recomendada.png"
import "../styles/H11.css"

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

const Historia11 = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container-fluid row" style={{ textAlign: "center" }}>
            <div className="mb-5 col-6">
                <h1 className="text-white">¡Arma tu propia PC!</h1>
            </div>
            <div className="mb-5 col-6">
                <button className="btn btn-light" style={{width: "125px", marginRight: "15px"}}>ATRÁS</button>
                <button className="btn btn-success" style={{width: "125px", marginRight: "15px"}}>
                    <i class="bi bi-cart-fill"></i> CARRITO
                </button>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div style={{ width: "30%", float: "left" }}>
                    <img src={PC} style={{ height: "350px", width: "350px" }} alt="PCBANNER"/>
                    <div style={{ marginTop: "20px", backgroundColor: "slategrey", width: "350px" }}>
                        <div  className="container" style={{ textAlign: "center" }}>
                            <div className="row">
                                <div className="col mt-2">
                                    <p style={{ color:"white" }}>Precio Componentes</p>
                                    <p  style={{ color:"white" }}>$1899</p>
                                </div>
                                <div className="col mt-2">
                                    <p  style={{ color:"white" }}>Costo armado</p>
                                    <p  style={{ color:"white" }}>$99</p>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>

                <div style={{ width: "70%", float: "right" }}>
                    <h2 className="mb-4" style={{ color:"white" }}>Componentes</h2>
                    <div className="bg-gradient" style={{ backgroundColor: "blue", width: "90%", height: "90%"}}>
                        <div className="row">
                            <div className="col mt-2">
                                <div>
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={CPU} alt="CPU"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">INTEL CORE I7-12700F 12-CORE</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">359$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"10px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={RAM} alt="RAM"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">16GB DDR4 DUAL CHANNEL</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">69$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={REFLIQUIDA} alt="REF LIQUIDA"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">CORSAIR HIDRO SERIES H100I RGB</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">89$</p></div>
                                    </div>
                                </div>
                                
                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={PC} alt="CASE"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">NZXT H510</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">99$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={PLACAMADRE} alt="PLACAMADRE"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">ASUS PRIME B650M-A | INTEL</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">149$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={WINDOWS} alt="WINDOWS"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">WINDOWS 11 HOME + USB RECOVERY</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">120$</p></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col mt-2">
                                <div>
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={GRAFICA} alt="GRAFICA"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">NVIDIA GEFORCE RTX 3070 8GB</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">679$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"10px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={SSD} alt="SSD"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">1TB NVME M.2</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">99$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={VENTILADORES} alt="VENTILADORES"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">CORSAIR ICUE QL120 3FAN PACK</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">29$</p></div>
                                    </div>
                                </div>
                                
                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={FUENTEPODER} alt="FUENTEPODER"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">700W ATX 80 PLUS GOLD</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">79$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={ANTENA} alt="ANTENA"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">WIRELESS 802.11C</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">29$</p></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={ARMADO} alt="ARMADO"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"80%", float: "left"}}><p className="listatext">ARMADO + TESTING + GARANTÍA</p></div>
                                        <div style={{width:"20%", float: "right"}}><p className="listapr">99$</p></div>
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

export default Historia11