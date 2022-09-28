import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import ReactPlayer from 'react-player'

const Historia17 = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container" style={{ marginLeft: "60px" }}>
            <div className="card" style={{ width: "645px", height: "700px" }}>
                <ReactPlayer url='https://www.youtube.com/watch?v=4vpPJb392Vg&feature=emb_logo'/>
                <div className="card-body">
                    <p className="card-text review1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

        </div>
    </div>
}



export default Historia17