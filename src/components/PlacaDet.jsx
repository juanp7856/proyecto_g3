import React from "react"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H6.css"
import PLACAMADRE from "../assets/pc_comps/placamadre.png"

const PlacaDet = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container" style={{margintop:"10%",padding:"50px"}} >

            <div className="row mb-4" >

                <div className="col" style={{width:"20%",height:"150px"}} >

                    <div className="bg-light p-2 text-dark bg-opacity-10" style={{width:"60%" }}>

                        <div style={{marginLeft:"10%", width:"50%"}}>
                            <img  width={250} height={250} src={PLACAMADRE} alt="PLACAMADRE" />
                        </div>



                            <button id="bot" style={{marginLeft:"25%", width:"50%"}} type="button" className="both3 btn btn-danger border-0">Agrega al carrito</button>
                    </div>
                </div>

      


                <div className="col" >

                    <div className="bg-primary p-2 text-dark bg-opacity-25">

                        <h1>ASUS PRIME    <br/>B650M-A | INTEL</h1>
                        <h2><b>149$</b></h2>

                        <h3>Shipping calculated at checkout.</h3>

                        <table style={{margintop:"20px"}}>
                            
                                <tr>
                                    <th><b>BRAND </b> </th><th>ASUS</th></tr>
                                <tr>
                                    <td><b>RAM</b></td><td>DDR4</td></tr>
                                <tr>
                                    <td><b>COMPATIBLE PROCESSORS</b>   </td><td>10th GEN INTEL CORE</td></tr>
                                <tr>
                                    <td><b>MEMORY SPEED</b>    </td><td>5000 MHz </td></tr>
                                <tr>
                                    <td><b>MEMORY STORAGE CAPACITY </b>    </td><td>128 GB</td></tr>
                            
                        </table>
                            

                    </div>

                </div>

            </div>
        </div>
    </div>

}

export default PlacaDet;
