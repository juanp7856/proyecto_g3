import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H1y2.css"
import Footer from "../components/Footer"
import "../styles/H1y2.css"


const Historia1 = () => {

    return <div classNameName="body bg-dark">
        <Header />

        <form className="createaccount container" style={{ width: "350px", paddingtop: "10px" }}>

            <div className="fst-italic text-white h6" style={{ paddingTop: "10px" }}>CREATE ACCOUNT</div>

            <div className="mb-3">
                <input type="text" className="text-white bg-transparent rounded-1 form-control " placeholder="First Name" ></input>
            </div>

            <div className="mb-3">
                <input type="text" className="text-white bg-transparent rounded-1 form-control" placeholder="Last Name" ></input>
            </div>

            <div className="mb-3">
                <input type="email" className="text-white bg-transparent rounded-1 form-control" placeholder="Email" ></input>
            </div>

            <div className="mb-3">
                <input type="password" className="text-white bg-transparent rounded-1 form-control" placeholder="Password" ></input>
            </div>

            <div className="d-grid gap-2" style={{ paddingbottom: "15px" }}>
                <button className="rounded border-0 btn-primary font-monospace h5" style={{ padding: "5px" }} type="button">CREATE</button>
            </div>

        </form>
    </div>

}

export default Historia1