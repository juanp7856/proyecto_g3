import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

import CPU from "../assets/pc_comps/cpu.png"
import PC from "../assets/pc_recomendada.png"
import FUENTEPODER from "../assets/pc_comps/fuentepoder.png"
import GRAFICA from "../assets/pc_comps/grafica.png"
import PLACAMADRE from "../assets/pc_comps/placamadre.png"
import RAM from "../assets/pc_comps/ram.png"
import REFLIQUIDA from "../assets/pc_comps/refliquida.png"
import SSD from "../assets/pc_comps/ssd.png"
import VENTILADORES from "../assets/pc_comps/ventiladores.png"


const Rankingpcs = () => {
    return <div classNameName="bg-dark">
        <Header />
        <div className="container, fs-3" style={{ marginLeft : "60px" }}> 
            <div className="text-white" style={{ marginBottom: "30px" }}> Ranking best sellers builds</div>
            
            <div className="accordion" id="accordionExample">
                
                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" >
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Monster PC</div>
                      <div className="col-4 fs-3">$1899</div>
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient" style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {CPU} className="CPU" style= {{ width: "80px", height:"65px"}} alt="CPU"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORE I7-12700F 12-CORE</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$359</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {GRAFICA} className="Grafica" style= {{ width: "65px", height:"65px"}}  alt="GRAFICA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NVIDIA GEFORCE RTX 3070 8GB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$679</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {RAM} className="Ram" style= {{ width: "65px", height:"65px"}} alt="RAM"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">16 GB DDR4 DUAL CHANNEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$69</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {SSD} className="SSD" style= {{ width: "60px", height:"65px"}} alt="SSD"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">1TB NVME M.2</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center" ><img src= {REFLIQUIDA} className="REFLIQUIDA" style= {{ width: "65px", height:"65px"}} alt="REFLIQUIDA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR HIDRO SERIES H100I RGB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$89</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {VENTILADORES} className="PC-Gamer" style= {{ width: "50px", height:"65px"}} alt="VENTILADORES"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR ICUE QL120 3FAN PACK</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$29</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {PC} className="PC" style= {{ width: "50px", height:"65px"}} alt="PC"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NZXT H510</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {FUENTEPODER} className="Fuente" style= {{ width: "65px", height:"65px"}} alt="FUENTEPODER"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">700W ATX 80 PLUS GOLD</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$79</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src={PLACAMADRE} className="Placa" style= {{ width: "50px", height:"65px"}} alt="PLACA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">ASUS PRIME B650M-A | INTEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$149</div>
                        </div>
                    </div>
                  </div>
                </div>


                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Cruser Build</div>
                      <div className="col-4 fs-3">$1759</div>
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient" style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {CPU} className="CPU" style= {{ width: "80px", height:"65px"}} alt="CPU"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORE I7-12700F 12-CORE</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$359</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {GRAFICA} className="Grafica" style= {{ width: "65px", height:"65px"}}  alt="GRAFICA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NVIDIA GEFORCE RTX 3070 8GB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$679</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {RAM} className="Ram" style= {{ width: "65px", height:"65px"}} alt="RAM"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">16 GB DDR4 DUAL CHANNEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$69</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {SSD} className="SSD" style= {{ width: "60px", height:"65px"}} alt="SSD"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">1TB NVME M.2</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center" ><img src= {REFLIQUIDA} className="REFLIQUIDA" style= {{ width: "65px", height:"65px"}} alt="REFLIQUIDA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR HIDRO SERIES H100I RGB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$89</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {VENTILADORES} className="PC-Gamer" style= {{ width: "50px", height:"65px"}} alt="VENTILADORES"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR ICUE QL120 3FAN PACK</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$29</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {PC} className="PC" style= {{ width: "50px", height:"65px"}} alt="PC"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NZXT H510</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {FUENTEPODER} className="Fuente" style= {{ width: "65px", height:"65px"}} alt="FUENTEPODER"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">700W ATX 80 PLUS GOLD</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$79</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src={PLACAMADRE} className="Placa" style= {{ width: "50px", height:"65px"}} alt="PLACAMADRE"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">ASUS PRIME B650M-A | INTEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$149</div>
                        </div>
                    </div>
                  </div>
                </div>


                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Nasa PC</div>
                      <div className="col-4 fs-3">$1679</div>
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient" style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {CPU} className="CPU" style= {{ width: "80px", height:"65px"}} alt="CPU"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORE I7-12700F 12-CORE</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$359</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {GRAFICA} className="Grafica" style= {{ width: "65px", height:"65px"}}  alt="GRAFICA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NVIDIA GEFORCE RTX 3070 8GB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$679</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {RAM} className="Ram" style= {{ width: "65px", height:"65px"}} alt="RAM"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">16 GB DDR4 DUAL CHANNEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$69</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {SSD} className="SSD" style= {{ width: "60px", height:"65px"}} alt="SSD"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">1TB NVME M.2</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center" ><img src= {REFLIQUIDA} className="REFLIQUIDA" style= {{ width: "65px", height:"65px"}} alt="REFLIQUIDA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR HIDRO SERIES H100I RGB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$89</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {VENTILADORES} className="PC-Gamer" style= {{ width: "50px", height:"65px"}} alt="VENTILADORES"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR ICUE QL120 3FAN PACK</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$29</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {PC} className="PC" style= {{ width: "50px", height:"65px"}} alt="PC"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NZXT H510</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {FUENTEPODER} className="Fuente" style= {{ width: "65px", height:"65px"}} alt="FUENTEPODER"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">700W ATX 80 PLUS GOLD</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$79</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src={PLACAMADRE} className="Placa" style= {{ width: "50px", height:"65px"}} alt="PLACAMADRE"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">ASUS PRIME B650M-A | INTEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$149</div>
                        </div>
                    </div>
                  </div>
                </div>


                <div className="accordion-item" style={{ width: "50%" }}>
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" >
                      <div className="col-4 fs-3" style={{ textAlign: "left" }}>
                        <img src= {PC} className="PC-Gamer" style={{ width: "110px", height:"120px"}} alt="PC"/>
                      </div>
                      <div className="col-4 fs-3">Budget Build</div>
                      <div className="col-4 fs-3">$1299</div>
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample" >
                    <div className="accordion-body bg-gradient " style={{ backgroundColor: "blue"}}>
                            <div className="row row-cols-1 text-white gx-3 gy-3">
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {CPU} className="CPU" style= {{ width: "80px", height:"65px"}} alt="CPU"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORE I7-12700F 12-CORE</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$359</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {GRAFICA} className="Grafica" style= {{ width: "65px", height:"65px"}}  alt="GRAFICA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NVIDIA GEFORCE RTX 3070 8GB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$679</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {RAM} className="Ram" style= {{ width: "65px", height:"65px"}} alt="RAM"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">16 GB DDR4 DUAL CHANNEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$69</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {SSD} className="SSD" style= {{ width: "60px", height:"65px"}} alt="SSD"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">1TB NVME M.2</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center" ><img src= {REFLIQUIDA} className="REFLIQUIDA" style= {{ width: "65px", height:"65px"}} alt="REFLIQUIDA"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR HIDRO SERIES H100I RGB</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$89</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {VENTILADORES} className="PC-Gamer" style= {{ width: "50px", height:"65px"}} alt="VENTILADORES"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">CORSAIR ICUE QL120 3FAN PACK</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$29</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {PC} className="PC" style= {{ width: "50px", height:"65px"}} alt="PC"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">NZXT H510</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$99</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src= {FUENTEPODER} className="Fuente" style= {{ width: "65px", height:"65px"}} alt="FUENTEPODER"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">700W ATX 80 PLUS GOLD</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$79</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center"><img src={PLACAMADRE} className="Placa" style= {{ width: "50px", height:"65px"}} alt="PLACAMADRE"/></div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">ASUS PRIME B650M-A | INTEL</div>
                            <div className="col-4 fs-6 d-flex justify-content-center align-items-center">$149</div>
                        </div>
                    </div>
                  </div>
                </div>



        </div>
    </div>
    </div>
}

export default Rankingpcs