import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

const Historia2 = () => {
    return <div className="bg-dark">

        <Header />        
        
        <form className="bg-dark container" style={{ width: "500px", paddingtop: "10px" }}>

            <div className="fst-italic text-white h6 ">LOG IN</div>

            <div className="text-white font-monospace fs-6" style={{paddingbottom:"30px", paddingTop: "10px"}}>Log in with your details below to view your order</div>


            <div className="mb-3">
                <input type="text" className="text-white bg-dark form-control" placeholder="Email" ></input>
            </div>

            <div className="mb-3">
                <input type="password" className="text-white bg-dark form-control" placeholder="Password" ></input>
            </div>

            <div className="d-grid gap-2" style={{ paddingbottom: "15px" }}>
                <button className="rounded border-0 btn-primary font-monospace h6" style={{ padding: "15px" }} type="button">LOGIN</button>
            </div>

            <div className="text-white font-monospace fs-6" style={{paddingBottom:"80px"}}>Forgot your password?</div>

            <div className="d-grid gap-2">
                <div className="text-white font-monospace fs-6">Don't have an account?</div>
                <button className="rounded border-0 btn-primary font-monospace h6" style={{padding:"15px"}} type="button">SIGN UP</button>
            </div>

        </form>
    </div>
}

export default Historia2