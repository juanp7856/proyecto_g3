import React, { useState } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import PC from "../assets/pc_recomendada.png"
import "../styles/H12.css"
import CPU from "../assets/pc_comps/cpu.png"
import {graphic, processor, memory, storage, cooling, windows, psupply} from "../modules/components.js"
import { useNavigate } from "react-router-dom"

let itemsAComprar = []
let ordenCompra = 0;

const Custombuild = () => {
    
    const navigate = useNavigate();
    


    const [itemSelec, setitemSelect] = useState("graphic");
    const [precioComps, setprecioComps] = useState(0);
    const [selected, setSelected] = useState(false);

    const alternarSelec = (itemSelec) => {
        if (itemSelec == "graphic") {
            return graphic;
        } else if (itemSelec === "processor") {
            return processor;
        } else if (itemSelec === "memory") {
            return memory;
        } else if (itemSelec === "storage") {
            return storage;
        } else if (itemSelec === "cooling") {
            return cooling;
        } else if (itemSelec === "windows") {
            return windows;
        } else if (itemSelec === "psupply") {
            return psupply;
        }
    }

    const crearTarjeta = (name,price,img) => {
        
        return <div className="bg-white tarjeta">
            <img src={img} className="tarjetaimg"/>
            {/* <div className="col-2">
                <img src={PC} className="tarjetaimg"/>
            </div> */}
            <div className="tarjetaname">
                {name}
            </div>
            <div>
                ${price}
            </div>
            <button className="btn btn-success tarjetabutton" onClick={
                () => {
                    setprecioComps(precioComps + price)
                    agregarCompra(name, price, img)
                    // setSelected(true)
                    // setTimeout(() => {
                    //     setSelected(false)
                    // }, 10);
                }
            }>+</button>
        </div>
    }

    const listarTarjetas = (itemSelec) => {
        let arrComps = alternarSelec(itemSelec);

        let tarjetas = arrComps.map( (comps) => {
            return crearTarjeta(comps.name, comps.price, comps.img)
        });

        return tarjetas
    }

    const agregarCompra = (name, price, img) => {
        let comp = {}

        comp.name = name
        comp.price = price
        comp.img = img

        itemsAComprar.push(comp)
    }

    const guardarOrden = () => {
        localStorage.setItem('ordenes',JSON.stringify(itemsAComprar))
    }

    const crearTarjetaCompra = (name, price, img) => {
        return <div>
            <div className="bg-gradient tarjetacompra p-3">
                <img src={img} className="tarjetaimg"/>
                <div className="tarjetanamecompra">
                    {name}
                </div>
                <div className="tarjetapricecompra">
                    ${price}
                </div>
            </div>
            <div style={{height:"5px", backgroundColor: "black"}}></div>
        </div>
        
    }

    const listarTarjetasCompra = () => {
        let tarjetas = itemsAComprar.map( (comps) => {
            return crearTarjetaCompra(comps.name, comps.price, comps.img)
        });

        return tarjetas
    }


    return <div className="bg-dark">
        <Header />

        <div className="container-fluid row" style={{ textAlign: "center" }}>
            <div className="mb-5 col-6">
                <h1 className="text-white">¡Arma tu propia PC!</h1>
            </div>
            <div className="mb-5 col-6">
                <button className="btn btn-light" style={{width: "125px", marginRight: "15px"}} onClick={()=>{navigate("/")}}>ATRÁS</button>
                <button className="btn btn-success" style={{width: "125px", marginRight: "15px"}} onClick={()=>{navigate("/checkout"); guardarOrden()}}>
                    <i class="bi bi-cart-fill"></i> CARRITO
                </button>
            </div>
        </div>

        <div className="container-fluid row" style={{ textAlign: "center" }}>

            <div className="col-3">
                <img src={PC} style={{ height: "350px", width: "350px" }} alt="PCBANNER"/>
                <div className="container-fluid" style={{ marginTop: "20px", backgroundColor: "slategrey", width: "350px" }}>
                    <div  className="container" style={{ textAlign: "center" }}>
                        <div className="row">
                            <div className="col mt-2">
                                <p style={{ color:"white" }}>Precio Componentes</p>
                                <p  style={{ color:"white" }}>${precioComps}</p>
                            </div>
                            <div className="col mt-2">
                                <p  style={{ color:"white" }}>Costo armado</p>
                                <p  style={{ color:"white" }}>$99</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="col-sm-4">
                <div className="row pb-5">
                    <button className="col m-1 btn btn-success" style={{width: "25%"}} onClick={()=>setitemSelect("graphic")} id="graphic">Gráfica</button>
                    <button className="col-2 m-1 btn btn-success" style={{width: "25%"}} onClick={()=>setitemSelect("processor")} id="processor">Procesador</button>
                    <button className="col m-1 btn btn-success" style={{width: "25%"}} onClick={()=>setitemSelect("memory")} id="memory">Memoria</button>
                    <button className="col-3 m-1 btn btn-success" style={{width: "40%"}} onClick={()=>setitemSelect("storage")} id="storage">Almacenamiento</button>
                    <button className="col-1 m-1 btn btn-success" style={{width: "33%"}} onClick={()=>setitemSelect("cooling")} id="cooling">Ventilación</button>
                    <button className="col-3 m-1 btn btn-success" style={{width: "30%"}} onClick={()=>setitemSelect("windows")} id="windows">Windows</button>
                    <button className="col-3 m-1 btn btn-success" style={{width: "33%"}} onClick={()=>setitemSelect("psupply")} id="psupply">Fuente poder</button>
                </div>

                {listarTarjetas(itemSelec)}
            </div>

            <div className="col-sm-4">
                {listarTarjetasCompra()}
            </div>
        </div>
    </div>
}

export default Custombuild