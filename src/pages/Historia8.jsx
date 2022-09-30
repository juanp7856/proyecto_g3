import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../assets/pc_recomendada.png"
import "../styles/H8.css"

import CPU from "../assets/pc_comps/cpu.png"

import PLACAMADRE from "../assets/pc_comps/placamadre.png"
import RAM from "../assets/pc_comps/ram.png"
import REFLIQUIDA from "../assets/pc_comps/refliquida.png"

import ARMADO from "../assets/armado.png"

const Historia8 = () => {
    return <div className="bg-dark">
        <Header />

        

        


        <div className="container"  >
            
            <div className="mb-5" style={{ width: "50%", float: "left" }}>
                
                <h2 className="text-white">Articulos del carrito</h2>

            </div>


            <div className="mb-5" style={{ width: "50%", float: "right"}}>
                       
                <button className="btn btn-success" style={{ width: "125px", marginLeft: "15px" }}>
                       <i class="bi bi-cart-fill"></i> CHECKOUT
                </button>

                </div>
          
        </div>





        <div className="container" style={{ justifyContent: "center" }}>
            <div className="row" style={{ width: "75%", height:"100%"}}>

                    <div className="bg-gradient" style={{ backgroundColor: "white", width: "90%", height: "90%"}}>

                        <div className="row">

                            <div className="col mt-2">
                                <div>
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={CPU} alt="CPU"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"50%", float: "left"}}><p className="listatext">INTEL CORE I7-12700F 12-CORE</p></div>
                                        <div style={{width:"25%", float: "left"}}><p className="listapr">359$</p></div>
                                        <div style={{width:"25%", float: "right",fontSize:"40px"}}><i class="bi bi-trash" ></i></div>
                                    </div>
                                </div>


                                <hr style={{color: "black", height:"10px"}}/>

                                <div className="mt-5"  >
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={RAM} alt="RAM"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"50%", float: "left"}}><p className="listatext">16GB DDR4 DUAL CHANNEL</p></div>
                                        <div style={{width:"25%", float: "left"}}><p className="listapr">69$</p></div>
                                        <div style={{width:"25%", float: "right",fontSize:"40px"}}><i class="bi bi-trash" ></i></div>
                                    </div>
                                </div>




                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={REFLIQUIDA} alt="REF LIQUIDA"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"50%", float: "left"}}><p className="listatext">CORSAIR HIDRO SERIES H100I RGB</p></div>
                                        <div style={{width:"25%", float: "left"}}><p className="listapr">89$</p></div>
                                        <div style={{width:"25%", float: "right",fontSize:"40px"}}><i class="bi bi-trash" ></i></div>
                                    </div>
                                </div>
                                
                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={PC} alt="CASE"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"50%", float: "left"}}><p className="listatext">NZXT H510</p></div>
                                        <div style={{width:"25%", float: "left"}}><p className="listapr">99$</p></div>
                                        <div style={{width:"25%", float: "right",fontSize:"40px"}}><i class="bi bi-trash" ></i></div>
                                    </div>
                                </div>

                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={PLACAMADRE} alt="PLACAMADRE"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"50%", float: "left"}}><p className="listatext">ASUS PRIME B650M-A | INTEL</p></div>
                                        <div style={{width:"25%", float: "left"}}><p className="listapr">149$</p></div>
                                        <div style={{width:"25%", float: "right",fontSize:"40px"}}><i class="bi bi-trash" ></i></div>
                                    </div>
                                </div>

                                
                                <hr style={{color: "black", height:"20px"}}/>

                                <div className="mt-5">
                                    <div style={{width:"20%",float: "left"}}>
                                        <img className="listaimg" src={ARMADO} alt="ARMADO"/>
                                    </div>
                                    <div style={{width:"80%", float: "right"}}>
                                        <div style={{width:"50%", float: "left"}}><p className="listatext">ARMADO + TESTING + GARANTÍA</p></div>
                                        <div style={{width:"25%", float: "left"}}><p className="listapr">99$</p></div>
                                        <div style={{width:"25%", float: "right",fontSize:"40px"}}><i class="bi bi-trash" ></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
</div>

}

export default Historia8
