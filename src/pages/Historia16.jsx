import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

const Historia16 = () => {
    return <div className="bg-dark">
        <Header />

        <h1 className="text-black" style={{ marginTop: "2%" }}> User Reviews </h1>
      
        <div className="container">
		
			
                <div className="row">
                    <p className="listatitle">Global Rate</p>

                </div>

                <div className="row">
                    <p className="listatitle">Juan Lopez</p>
                    <p className="listatext">I completely recomend this service </p>
                </div>


                <div className="row">
                    <p className="listatitle">Jhon Doe</p>
                    <p className="listatext">Great Service</p>
                </div>
				

                <div className="row">
                    <p className="listatitle">Carl Johnson</p>
                    <p className="listatext">PC well builded and nice case quality</p>
                </div>

			
          </div>

    </div>
}

export default Historia16