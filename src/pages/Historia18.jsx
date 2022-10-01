import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

import headset from "../assets/periferics/headset.png"
import mouseykeyboard from "../assets/periferics/mouseykeyboards.jpg"
import standardmouse from "../assets/periferics/standardmousepad.jpg"
import Xlmousepad from "../assets/periferics/XLmousepad.jpg"

const Historia18 = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container, fs-3" style={{ marginLeft : "60px" }}> 
            <div className="text-white" style={{ marginBottom: "30px" }}> Ranking best sellers Periferics</div>
            
            <div className="container">

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={headset} alt="headset" /> </p>
                            </div>
                            <div className="col">
                            <p className="listatext">Headset</p>
                            </div>
                            <div className="col">
                            <p className="listapr">25$</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={mouseykeyboard} alt="mouseykeyboard" /> </p>
                            </div>
                            <div className="col">
                            <p className="listatext">Mouse & Keyboards</p>
                            </div>
                            <div className="col">
                            <p className="listapr">39$</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={standardmouse} alt="standardmouse" /> </p>
                            </div>
                            <div className="col">
                            <p className="listatext">Standard Mouse Pad</p>
                            </div>
                            <div className="col">
                            <p className="listapr">19$</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col">
                            <p><img className="listaimg" src={Xlmousepad} alt="Xlmousepad" /> </p>
                            </div>
                            <div className="col">
                            <p className="listatext">XL Mouse Pad</p>
                            </div>
                            <div className="col">
                            <p className="listapr">29$</p>
                            </div>
                        </div>

                    </div>



        </div>
    </div>
}

export default Historia18