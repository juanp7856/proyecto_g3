import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import MainHeader from "../components/MainHeader"
import logo from "../assets/LOGO.png"
import Footer from "../components/Footer"
import "../styles/Footer.css"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const navigate = useNavigate();

    const customBuildonClick = () => {
        navigate("/custombuild")
    }

    const buildforBegginersonClick = () => {
        navigate("/prebuiltselect")
    }

    return <div className="body bg-dark">
        <MainHeader />

        <div style={{ marginLeft: "5%", marginTop: "-3%" }}>
            <img style={{ height: "350px", width: "450px" }} src={logo} class="logo" alt="logo" />
            <div className="text-white" style={{ marginTop: "1%" }}>
                <h1 className="text-white" style={{ marginTop: "2%" }}>
                    Build your PC!
                </h1>
                <div className="text-white" style={{ marginTop: "2%" }}>
                    Just for what you need
                </div>
                <div style={{ marginTop: "2%" }}>
                    <button type="button" className="both3 btn btn-danger border-0"
                        onClick={buildforBegginersonClick}>Build for begginers</button>
                    <button type="button" className="both3 btn btn-danger border-0" style={{ marginLeft: "1%" }}
                        onClick={customBuildonClick}
                    >Advance building</button>
                </div>
            </div>
        </div>


        <Footer />
    </div>
}

export default Home