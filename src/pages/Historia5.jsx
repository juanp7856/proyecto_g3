import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

const Historia5 = () => {
    return <div className="bg-dark">
        <Header />
        <div className="container" >
            <form className="row g-3 rounded-1 bg-white fs-5" style={{ width: "60%", height: "700px", marginLeft: "25%" }}>
                
                <div className="col-md-6">
                    <label className="form-label">First Name</label>
                    <input type="text" className="form-control"></input>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Last Name</label>
                    <input type="text" className="form-control"></input>
                </div>
 
                <div className="col-12">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"></input>
                </div>

                <div className="col-12">
                    <label className="form-label">Address</label>
                    <input type="email" className="form-control"></input>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Aparmament, suit, etc</label>
                    <input type="text" className="form-control"></input>
                </div>

                <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input type="text" className="form-control"></input>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Country/Region</label>
                    <select className="form-select">
                        <option selected>United States</option>
                        <option>...</option>
                    </select>
                </div>

                <div className="col-md-6">
                    <label className="form-label">Postal/zip code</label>
                    <input type="text" className="form-control"></input>
                </div>

                <div className="col-12">
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-control"></input>
                </div>

                <div className="col-md-4">
                    <button type="submit" class="btn btn-primary" style={{ width: "200px", height: "40px" }}>Update Info</button>
                </div>

                <div className="col-md-4">
                    <button type="button" className="btn btn-light btn-sm">Cancel</button>
                </div>

            </form>
        </div>

    </div>
}

export default Historia5