import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom"

const ProfileInfo = () => {

    const navigate = useNavigate();

    return <div className="bg-dark">
        <Header />

        <div className="container" >
            <div className="row ">
                <div className="col-4 text-white" >
                    <div class="d-grid gap-2">
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px"}} onClick={()=>{navigate("/orderHistory")}}>Order History</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px"}}>Profile Info</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px"}}>Log Out</button>
                    </div>
                </div>

                {/* <div className="col-1 text-white" >
                    <div class="d-grid gap-2">
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }}>Order History</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }}>Profile Info</button>
                        <button type="button" className="btn btn-light btn-lg" style={{ width: "320px", height: "50px" }}>Log Out</button>
                    </div>
                </div> */}

                <div className="col-8 text-white">
                    <form className="row g-3 rounded-1 bg-white" style={{ width: "100%", height: "700px" }}>
                        <div className="row ">HOLA</div>
                        <div className="col-md-6">
                            <label className="form-label text-black">First Name</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label ">Last Name</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-12">
                            <label className="form-label text-black">Email</label>
                            <input type="email" className="form-control"></input>
                        </div>

                        <div className="col-12">
                            <label className="form-label text-black">Address</label>
                            <input type="email" className="form-control"></input>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label text-black">Aparmament, suit, etc</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label">Country/Region</label>
                            <select className="form-select">
                                <option selected>United States</option>
                                <option>...</option>
                            </select>
                        </div>

                        <div className="col-md-6 text-black">
                            <label className="form-label">Postal/zip code</label>
                            <input type="text" className="form-control"></input>
                        </div>

                        <div className="col-12 text-black">
                            <label className="form-label">Phone</label>
                            <input type="tel" className="form-control"></input>
                        </div>

                        <div className="col-md-4 text-black">
                            <button type="submit" class="btn btn-primary" style={{ width: "200px", height: "40px" }}>Update Info</button>
                        </div>

                        <div className="col-md-4">
                            <button type="button" className="btn btn-light btn-sm">Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>




    </div>
}

export default ProfileInfo