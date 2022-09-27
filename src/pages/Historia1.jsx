import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

const Historia1 = () => {
    return <div classNameName="bg-dark">
        <Header />
        <div className="bg-success container" style={{ width: "400px", paddingtop: "10px" }}>

            <label className="form-label fst-italic text-white h5 " >CREATE ACCOUNT </label>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="First Name"></input>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Last Name"></input>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email"></input>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password"></input>
            </div>

            <div className="d-grid gap-2" style={{paddingbottom:"15px"}}>
                <button className="rounded border-0 btn-primary font-monospace h6 fs-6" style={{ padding: "5px" }} type="button">CREATE</button>
            </div>

        </div>



    </div>

}

export default Historia1