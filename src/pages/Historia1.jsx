import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"

const Historia1 = () => {
    return <div classNameName="bg-dark">
        <Header />
        
        <form className="bg-success container" style={{width:"350px", paddingtop:"10px"}}>

                <div className="fst-italic text-white h6 ">CREATE ACCOUNT</div>
                <div className="mb-3">
                  <input type="text" className="text-white bg-success form-control" id="exampleInputEmail1" placeholder="First Name" > </input>
                </div>
                
                <div className="mb-3">
                <input type="text" className="bg-success form-control" id="exampleInputEmail1" placeholder="Last Name"> </input>
                </div>

                <div className="mb-3">
                <input type="email" className="bg-success form-control" id="exampleInputEmail1" placeholder="Email"> </input>
                </div>

                <div className="mb-3">
                <input type="password" className="bg-success form-control" id="exampleInputEmail1" placeholder="Password"> </input>
                </div>

                <div className="d-grid gap-2" style="padding-bottom:15px;">
                    <button className="rounded border-0 btn-primary font-monospace h6 fs-6" style={{padding : "5px"}} type="button">CREATE</button>
                </div>
              </form>

    </div>
}

export default Historia1