import React from "react"
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H6.css"
import CPU from "../assets/pc_comps/cpu.png"

const CpuDet = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container" style={{margintop:"10%",padding:"50px"}} >

            <div className="row mb-4" >

                <div className="col" style={{width:"20%",height:"150px"}} >

                    <div className="bg-light p-2 text-dark bg-opacity-10" style={{width:"60%" }}>

                        <div style={{marginLeft:"10%", width:"50%"}}>
                            <img  width={250} height={250} src={CPU} alt="CPU" />
                        </div>



                            <button id="bot" style={{marginLeft:"25%", width:"50%"}} type="button" className="both3 btn btn-danger border-0">Agrega al carrito</button>
                    </div>
                </div>

      


                <div className="col" >

                    <div className="bg-primary p-2 text-dark bg-opacity-25">

                        <h1>INTEL CORE  <br/>I7-12700F 12-CORE</h1>
                        <h2><b>$359</b></h2>

                        <h3>Shipping calculated at checkout.</h3>

                        <table style={{margintop:"20px"}}>
                            
                                <tr>
                                    <th><b>CHIPSET <br/> MANUFACTURER </b> </th><th>INTEL</th></tr>
                                <tr>
                                    <td><b>PROCESSOR NUMBER</b></td><td>I7-12700F</td></tr>
                                <tr>
                                    <td><b>TOTAL CORES</b>   </td><td>12</td></tr>
                                <tr>
                                    <td><b>MAX TURBO FREQUENCY</b>    </td><td>4.90GHz </td></tr>
                                <tr>
                                    <td><b>MAX MEMORY SIZE <br/> (Dependent on memory type) </b>    </td><td>128GB</td></tr>
                            
                        </table>
                            

                    </div>

                </div>

            </div>
        </div>
    </div>

}

export default CpuDet;
