import React, { useState } from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const signUpOnclick = () => {
        navigate("/register")

    }

    const logInOnclick = () => {
        if (email !== "" && password !== "") {
            navigate("/")
        }

    }

    return <div className="bg-dark">

        <Header />

        <form className="createaccount container" style={{ width: "550px", paddingtop: "10px" }}>

            <div className="fst-italic text-white h6 ">LOG IN</div>

            <div className="text-white font-monospace fs-6" style={{ paddingBottom: "20px", paddingTop: "10px" }}>Log in with your details below to view your order</div>


            <div className="mb-3">
                <input type="text" className="form-control text-white bg-transparent rounded-1 " style={{ padding: "7px" }} placeholder="Email"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                ></input>
            </div>

            <div className="mb-3">
                <input type="password" className=" form-control text-white bg-transparent rounded-1 " style={{ padding: "7px" }} placeholder="Password"
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                ></input>
            </div>

            <div className="d-grid gap-2" style={{ paddingBottom: "0px", paddingTop: "10px" }}>
                <button className="rounded border-0 btn-primary font-monospace h6" style={{ padding: "15px" }} type="button"
                    onClick={logInOnclick}
                >LOGIN</button>
            </div>

            <div style={{ paddingBottom: "80px" }}> <a className="font-monospace text-white" href="/passwordreset">Forgot your password?</a></div>

            <div className="d-grid gap-2">
                <div className="font-monospace text-white">Don't have an account?</div>
                <button className="rounded border-0 btn-primary font-monospace h6" style={{ padding: "15px" }} type="button"
                    onClick={signUpOnclick}
                >SIGN UP</button>
            </div>

        </form>
    </div>
}

export default Login