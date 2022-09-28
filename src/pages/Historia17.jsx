import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import ReactPlayer from 'react-player'
import "../styles/H17.css"

const Historia17 = () => {
    return <div className="bg-dark">
        <Header />

        <div className="container" style={{ marginLeft: "60px" }}>
            <div className="card" style={{ width: "800px", height: "700px" }}>
                <ReactPlayer 
                url='https://www.youtube.com/watch?v=4vpPJb392Vg&feature=emb_logo'
                width='100%'
                height='400px'
                />
                <div className="card-body">
                    <p className="card-text review1 fs-5" style={{ paddingLeft:"100px", paddingRight:"100px"}}>This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer. Highly, highly recommend it.</p>
                    <p>"Thanks to" <a href="https://www.youtube.com/c/MoreMrTop5">@MrTop5</a> "for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!"</p>
                </div>
            </div>

        </div>
    </div>
}



export default Historia17