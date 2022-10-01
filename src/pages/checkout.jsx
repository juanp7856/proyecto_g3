import React, { useState } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H8.css"


let itemsAComprar = JSON.parse(localStorage.getItem('ordenes') || "[]")

const Checkout = () => {

    const [active,setActive] = useState(false)

    const crearTarjeta = (name, price, img, id) => {
        return <div className="tarjetaco">
            <div style={{width:"20%",float: "left"}}>
                <img className="listaimg" src={img} alt="CPU"/>
            </div>
            <div style={{width:"80%", float: "right", marginBottom: "20px"}}>
                <div style={{width:"50%", float: "left"}}><p className="listatext">{name}</p></div>
                <div style={{width:"25%", float: "left"}}><p className="listapr">{price}$</p></div>
                <button type="button" style={{width:"25%", float: "right",fontSize:"40px", backgroundColor: "transparent",border: "none"}} onClick={
                    ()=>{
                        for (let x=0;x<itemsAComprar.length;x++) {
                            if(itemsAComprar[x].id == id) {
                                itemsAComprar.splice(x,1)
                                localStorage.setItem('ordenes',JSON.stringify(itemsAComprar))
                                setActive(true)
                                setTimeout(()=>{setActive(false)},1);
                            }
                        }
                    }
                }><i class="bi bi-trash" ></i></button>
            </div>
        </div>
    }

    const listarTarjetas = (active) => {

        let tarjetas = itemsAComprar.map( (comps) => {
            return crearTarjeta(comps.name, comps.price, comps.img, comps.id)
        });

        return tarjetas
    }


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
                                {listarTarjetas(active)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
</div>

}

export default Checkout
