import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

const Historia2 = () => {
    return <div className="bg-dark">

        <Header />
        <div className="bg-primary container" style={{ width: "450px", paddingtop: "10px" }}>

            <label className="form-label fst-italic text-white h5 " >LOG IN </label>

            <div className="text-white font-monospace fs-6" style={{ paddingbottom: "30px", paddingtop: "10px" }}>Log in with your details below to view your order</div>

            <div className="mb-3">
                <input type="text" className="form-control" placeholder="Email"></input>
            </div>

            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password"></input>
            </div>

            <div className="d-grid gap-2" style={{ paddingbottom: "15px" }}>
                <button className="rounded border-0 btn-primary font-monospace h6 fs-6" style={{ padding: "12px" }} type="button">LOGIN</button>
            </div>

            <div className="text-white font-monospace fs-6">Forgot your password?</div>

            <div className="d-grid gap-2" style={{paddingtop:"50px"}}>
                <div className="text-white font-monospace h6 " >Don't have an account?</div>
                <button className="rounded border-0 btn-primary font-monospace h5" style={{ padding: "15px" }} type="button">SIGN UP</button>
            </div>

        </div>
    </div>
}

export default Historia2