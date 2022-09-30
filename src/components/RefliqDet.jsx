import React from "react"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H6.css"
import REFLIQUIDA from "../assets/pc_comps/refliquida.png"

const RefliqDet = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container" style={{margintop:"10%",padding:"50px"}} >

            <div className="row mb-4" >

                <div className="col" style={{width:"20%",height:"150px"}} >

                    <div className="bg-light p-2 text-dark bg-opacity-10" style={{width:"60%" }}>

                        <div style={{marginLeft:"10%", width:"50%"}}>
                            <img  width={250} height={250} src={REFLIQUIDA} alt="REF LIQUIDA" />
                        </div>



                            <button id="bot" style={{marginLeft:"25%", width:"50%"}} type="button" className="both3 btn btn-danger border-0">Agrega al carrito</button>
                    </div>
                </div>

      


                <div className="col" >

                    <div className="bg-primary p-2 text-dark bg-opacity-25">

                        <h1>CORSAIR HIDRO SERIES    <br/>H100I RGB</h1>
                        <h2><b>89$</b></h2>

                        <h3>Shipping calculated at checkout.</h3>

                        <table style={{margintop:"20px"}}>
                            
                                <tr>
                                    <th><b>BRAND </b> </th><th>CORSAIR</th></tr>
                                <tr>
                                    <td><b>VOLTAGE</b></td><td>12V</td></tr>
                                <tr>
                                    <td><b>COMPATIBLE DEVICES</b>   </td><td>RADIATOR</td></tr>
                                <tr>
                                    <td><b>NOISE LEVEL</b>    </td><td>36dB </td></tr>
                                <tr>
                                    <td><b>MAXIMUM ROTATIONAL SPEED </b>    </td><td>2400 RPM</td></tr>
                            
                        </table>
                            

                    </div>

                </div>

            </div>
        </div>
    </div>

}

export default RefliqDet;
