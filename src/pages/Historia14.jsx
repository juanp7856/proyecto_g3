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



const historia14 = () => {

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


                <div className="col-11 text-white">
                    <div className="container ms-auto " >
                        <div style={{ width: "70%", float: "right" }}>
                            <div className="bg-gradient" style={{ backgroundColor: "black", width: "90%", height: "100%" }}>
                                <div className="row">
                                    <div className="col mt-2">
                                        <div>
                                            <div style={{ backgroundColor: "white", width: "20%", float: "left" }}>
                                                <img className="listaimg" src={CPU} alt="CPU" />
                                            </div>
                                            <div style={{ width: "80%", float: "right" }}>
                                                <div style={{ backgroundColor: "white", width: "60%", float: "left" }}><p className="listatext">INTEL CORE I7-12700F 12-CORE</p></div>
                                                <div style={{ backgroundColor: "white", width: "25%", float: "right" }}><p className="listapr">21/09/2022</p></div>
                                                <div style={{ backgroundColor: "white", width: "15%", float: "right" }}><p className="listapr">359$</p></div>
                                            </div>
                                        </div>



                                        <div className="mt-5">
                                            <div style={{ backgroundColor: "white", width: "20%", float: "left" }}>
                                                <img className="listaimg" src={RAM} alt="RAM" />
                                            </div>
                                            <div style={{ width: "80%", float: "right" }}>
                                                <div style={{ backgroundColor: "white", width: "60%", float: "left" }}><p className="listatext">16GB DDR4 DUAL CHANNEL</p></div>
                                                <div style={{ backgroundColor: "white", width: "25%", float: "right" }}><p className="listapr">22/09/2022</p></div>
                                                <div style={{ backgroundColor: "white", width: "15%", float: "right" }}><p className="listapr">69$</p></div>
                                            </div>
                                        </div>



                                        <div className="mt-5">
                                            <div style={{ backgroundColor: "white", width: "20%", float: "left" }}>
                                                <img className="listaimg" src={REFLIQUIDA} alt="REF LIQUIDA" />
                                            </div>
                                            <div style={{ width: "80%", float: "right", }}>
                                                <div style={{ backgroundColor: "white", width: "60%", float: "left" }}><p className="listatext">CORSAIR HIDRO SERIES H100I RGB</p></div>
                                                <div style={{ backgroundColor: "white", width: "25%", float: "right" }}><p className="listapr">23/09/2022</p></div>
                                                <div style={{ backgroundColor: "white", width: "15%", float: "right" }}><p className="listapr">89$</p></div>
                                            </div>
                                        </div>



                                        <div className="mt-5">
                                            <div style={{ backgroundColor: "white", width: "20%", float: "left" }}>
                                                <img className="listaimg" src={PC} alt="CASE" />
                                            </div>
                                            <div style={{ width: "80%", float: "right" }}>
                                                <div style={{ backgroundColor: "white", width: "60%", float: "left" }}><p className="listatext">NZXT H510</p></div>
                                                <div style={{ backgroundColor: "white", width: "25%", float: "right" }}><p className="listapr">23/09/2022</p></div>
                                                <div style={{ backgroundColor: "white", width: "15%", float: "right" }}><p className="listapr">99$</p></div>
                                            </div>
                                        </div>

                                        <hr style={{ color: "black", height: "20px" }} />

                                        <div className="mt-5">
                                            <div style={{ backgroundColor: "white", width: "20%", float: "left" }}>
                                                <img className="listaimg" src={PLACAMADRE} alt="PLACAMADRE" />
                                            </div>
                                            <div style={{ width: "80%", float: "right" }}>
                                                <div style={{ backgroundColor: "white", width: "60%", float: "left" }}><p className="listatext">ASUS PRIME B650M-A | INTEL</p></div>
                                                <div style={{ backgroundColor: "white", width: "25%", float: "right" }}><p className="listapr">24/09/2022</p></div>
                                                <div style={{ backgroundColor: "white", width: "15%", float: "right" }}><p className="listapr">149$</p></div>
                                            </div>
                                        </div>

                                        <hr style={{ color: "black", height: "25px" }} />

                                        <div className="mt-5">
                                            <div style={{ backgroundColor: "white", width: "20%", float: "left" }}>
                                                <img className="listaimg" src={WINDOWS} alt="WINDOWS" />
                                            </div>
                                            <div style={{ width: "80%", float: "right" }}>
                                                <div style={{ backgroundColor: "white", width: "60%", float: "left" }}><p className="listatext">WINDOWS 11 HOME + USB RECOVERY</p></div>
                                                <div style={{ backgroundColor: "white", width: "25%", float: "right" }}><p className="listapr">27/09/2022</p></div>
                                                <div style={{ backgroundColor: "white", width: "15%", float: "right" }}><p className="listapr">120$</p></div>
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


        </div>
}

        export default historia14   