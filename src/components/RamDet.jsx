import React from "react"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H6.css"
import RAM from "../assets/pc_comps/ram.png"

const RamDet = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container" style={{margintop:"10%",padding:"50px"}} >

            <div className="row mb-4" >

                <div className="col" style={{width:"20%",height:"150px"}} >

                    <div className="bg-light p-2 text-dark bg-opacity-10" style={{width:"60%" }}>

                        <div style={{marginLeft:"10%", width:"50%"}}>
                            <img  width={250} height={250} src={RAM} alt="RAM" />
                        </div>



                            <button id="bot" style={{marginLeft:"25%", width:"50%"}} type="button" className="both3 btn btn-danger border-0">Agrega al carrito</button>
                    </div>
                </div>

      


                <div className="col" >

                    <div className="bg-primary p-2 text-dark bg-opacity-25">

                        <h1>16GB DDR4   <br/>DUAL CHANNEL</h1>
                        <h2><b>$69</b></h2>

                        <h3>Shipping calculated at checkout.</h3>

                        <table style={{margintop:"20px"}}>
                            
                                <tr>
                                    <th><b>TYPE </b> </th><th>288-Pin DDR4 SDRAM</th></tr>
                                <tr>
                                    <td><b>VOLTAGE</b></td><td>1.35V</td></tr>
                                <tr>
                                    <td><b>MULTI-CHANNEL KIT</b>   </td><td>DUAL CHANNEL KIT</td></tr>
                                <tr>
                                    <td><b>CAPACITY</b>    </td><td>16GB(2x8GB) </td></tr>
                                <tr>
                                    <td><b>RECOMMEND USE </b>    </td><td>HIGH PERFORMANCE OR <br/>GAMING MEMORY</td></tr>
                            
                        </table>
                            

                    </div>

                </div>

            </div>
        </div>
    </div>

}

export default RamDet;
