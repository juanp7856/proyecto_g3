import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer = () => {
    return <div style={{ paddingTop: "20px" }}>

        <footer className="backimg text-white py-4" >

            <div className="container" style={{ marginLeft: "2%" }} >
                <div className="row ">
                    <div className="col-6"> Sign up to our newsletter for the latest PC news.</div>
                    <div className="col-2">Build your PC</div>
                    <div className="col-2">Good.</div>
                    <div className="col-2">Terms & Conditions</div>

                </div>

                <div className="row" style={{ paddingTop: "2%" }}>
                    <div className="col-3"> <input type="text" className="text-white rounded-1 form-control bg-transparent" style={{ width: "320px", padding: "7.5px" }} placeholder="Email" ></input></div>
                    <div className="col-3"> <button type="button" className="both3 btn btn-danger border-0" style={{ padding: "8.5px", width: "140px" }}>SUBSCRIBE</button></div>
                    <div className="col">Why Redux</div>
                    <div className="col">Better.</div>
                    <div className="col">Privacy Policy</div>
                </div>

                <div className="row" style={{ paddingTop: "0.8%" }}>
                    <div className="col-6"> </div>
                    <div className="col-2">Support</div>
                    <div className="col-2">Best</div>
                    <div className="col-2">Refund Policy</div>

                </div>

                <div>
                    <a style={{paddingRight:"2%"}} href=""><span id="boot-icon" className="bi bi-facebook" style={{ fontSize: "40px", color: "rgb(255, 255, 255)" }}></span></a>
                    <a style={{paddingRight:"2%"}} href=""><span id="boot-icon" className="bi bi-twitter" style={{ fontSize: "40px", color: "rgb(255, 255, 255)" }}></span></a>
                    <a style={{paddingRight:"2%"}} href=""><span id="boot-icon" className="bi bi-instagram" style={{ fontSize: "40px", color: "rgb(255, 255, 255)" }}></span></a>
                </div>

            </div>
            <div className="row d-flex aligns-items-center justify-content-center">
                Copyright © 2022 Build Redux. All Rights Reserved.
            </div>
        </footer>
    </div>

}

export default Footer;

