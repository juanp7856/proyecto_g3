import React, { useState } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import "../styles/H1y2.css"
import "../styles/H1y2.css"

import { useNavigate } from "react-router-dom"


const Register = () => {
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    //Acceder a la pagina login
    const createOnClick = () => {
        if (firstname !== "" && lastname !== "" && email !== "" && password !== "") {
            navigate("/login")
        }
    }

    return <div classNameName="body bg-dark">
        <Header />

        <form className="createaccount container" style={{ width: "350px", paddingtop: "10px" }}>

            <div className="fst-italic text-white h6" style={{ paddingTop: "10px" }}>CREATE ACCOUNT</div>

            <div className="mb-3">
                <input type="text" className="text-white bg-transparent rounded-1 form-control " placeholder="First Name"
                    value={firstname}
                    onChange={(evt) => setFirstName(evt.target.value)}
                ></input>
            </div>

            <div className="mb-3">
                <input type="text" className="text-white bg-transparent rounded-1 form-control" placeholder="Last Name"
                    value={lastname}
                    onChange={(evt) => setLastName(evt.target.value)}
                ></input>
            </div>

            <div className="mb-3">
                <input type="email" className="text-white bg-transparent rounded-1 form-control" placeholder="Email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                ></input>
            </div>

            <div className="mb-3">
                <input type="password" className="text-white bg-transparent rounded-1 form-control" placeholder="Password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                ></input>
            </div>

            <div className="d-grid gap-2" style={{ paddingbottom: "15px" }}>
                <button className="rounded border-0 btn btn-primary font-monospace h5" style={{ padding: "5px" }} type="button"
                    onClick={createOnClick}
                >CREATE</button>
            </div>

        </form>
    </div>

}

export default Register