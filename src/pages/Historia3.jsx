import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import MainHeader from "../components/MainHeader"
import logo from "../assets/LOGO.png"
import Footer from "../components/Footer"

const Historia3 = () => {
    return <div className="bg-dark">
        <MainHeader />

        <div style={{ marginLeft: "5%", marginTop: "-3%" }}>
            <img style={{ height: "350px", width: "450px" }} src={logo} class="logo" alt="logo"/>
        </div>
        <div className="text-white" style={{ marginLeft: "7%", marginTop: "1%" }}>
            <h1 className="text-white" style={{marginTop:"2%"}}>
                Build your PC! 
            </h1>
            <div className="text-white" style={{marginTop:"2%"}}>
                Just for what you need
            </div>
            <div style={{marginTop:"2%"}}>
                <button type="button" className="btn btn-danger">Build for begginers</button>
                <button type="button" className="btn btn-danger" style={{marginLeft:"1%"}}>Advance building</button>
            </div>
        </div>
        <Footer/>
    </div>
}

export default Historia3