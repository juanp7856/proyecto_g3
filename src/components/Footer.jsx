import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer = () => {
    return <div style={{ paddingTop: "20px" }}>

        <footer className="backimg text-white py-4" >
            <div style={{ marginLeft: "2%" }} >
                <div className="row row-cols-1 text-white gx-3 gy-3" style={{ paddingBottom: "10px" }} >
                    <div className="col-6 h4 d-flex " > Sign up to our newsletter for the latest PC news.</div>
                    <div className="col-2 fs-6 d-flex " >Build your PC</div>
                    <div className="col-2 fs-6 d-flex ">Goods</div>
                    <div className="col-2 fs-6 d-flex ">Terms & Conditions</div>
                </div>

                <div className="row row-cols-1 text-white gx-3 gy-3" >

                    <div className="col-6 h4 d-flex" >
                        <div className="col-3" >
                            <input type="text" className="text-white rounded-1 form-control bg-transparent" style={{ width: "200px", padding: "5.5px" }} placeholder="Email" ></input>
                        </div>
                        <div className="col-4">
                            <button type="button" className="both3 btn btn-danger border-0" style={{ padding: "6.5px", width: "140px" }}>SUBSCRIBE</button>
                        </div>
                    </div>

                </div>

            </div>





        </footer>
    </div>

}

export default Footer;

