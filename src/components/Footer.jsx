import React from "react"
import "../styles/header.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer = () => {
    return <div >

        <footer className="text-white py-4 bg-primary" >
            <div >
                <nav>
                    <ul className="list-unstyled" style={{ marginLeft: "2%"}}>
                        <li className="font-weight-bold  fs-1">Sign up to our newsletter for the latest PC news.</li>
                        <li>
                            <input type="text" className="text-white bg-transparent form-control"
                             placeholder="Email" style={{width:"200px", height:"70px"}}></input>
                            <button className="text-white rounded border-0 btn font-monospace bg-success" type="button" style={{}}>CREATE</button>
                        
                        
                        </li> 
                    </ul>
                    <div>
                        

                    </div>



                </nav>

            </div>


        </footer>
    </div>

}

export default Footer;

