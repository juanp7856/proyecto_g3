import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

const Support = () => {
    return <div className="bg-dark">
        <Header />
        <div className="container" style={{ textAlign: "center" }}>
            <div className="mb-2" style={{ width: "50%", float: "left" }}>
                <h1 className="text-white">Submit a Request</h1>
            </div>
        </div>
        
        <div className="container" >
            <form className="row g-3 rounded-1 bg-white fs-5" style={{ width: "80%", height: "650", marginLeft: "15%" }}>
                
                <div className="col-md-12">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control"></input>
                </div>

                <div className="col-md-12">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control"></input>
                </div>

                <div className="col-12">
                    <label className="form-label">Phone</label>
                    <input type="email" className="form-control"></input>
                </div>

                <div className="col-12">
                    <label className="form-label">Subject</label>
                    <input type="email" className="form-control"></input>
                </div>

               <div class="form-group">
                    <label for="exampleFormControlDescription">Description</label>
                    <textarea class="form-control" id="exampleFormControlDescription" rows="3"></textarea>
                </div>

                <div className="col-md-20" >
                    <button type="submit" class="btn btn-primary" style={{ width: "160px", height: "40px", padding: "5px",textAlign: "center"}}>Submit</button>
                </div>

            </form>
        </div>

    </div>
}

export default Support