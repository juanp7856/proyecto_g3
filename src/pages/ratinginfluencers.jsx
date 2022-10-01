import React from "react"
import Header from "../components/Header"
import "bootstrap/dist/css/bootstrap.css"
import ReactPlayer from 'react-player'
import "../styles/H17.css"
import MrTop5 from "../assets/MrTop5.jpg"
import ShowCircuit from "../assets/ShortCircuit.jpg"
import Footer from "../components/Footer"

const Ratinginfluencers = () => {
    return <div className="bg-light">
        <Header />
        
        <div className="row" style={{ marginLeft: "120px" }}>

        <div className="text-dark h1" style={{ marginTop:"30px" }}>Influencers</div>

            <div className="card col-sm-6 border-light" style={{ width: "800px", height: "700px", marginRight:"150px", marginLeft:"300px", borderRadius:"" }}>
                <div>
                <ReactPlayer 
                url='https://www.youtube.com/watch?v=4vpPJb392Vg&feature=emb_logo'
                width='100%'
                height='370px'
                />
                </div>
                <div className="card-body" style={{paddingTop:"50px"}}>
                    <div className="background-autor-top">
                        Mr Top 5.
                    </div>
                    <p className="card-text review1 fs-5" style={{ paddingLeft:"100px", paddingRight:"100px"}}>
                        This computer is absolutely insane! Once again if you want to check out this brand new Redux gaming PC - it's an absolute super computer. Highly, highly recommend it.
                    </p>
                    <div className="row" style={{paddingTop:"20px"}}>
                        <div className="col-sm-3">
                        <img src= {MrTop5} className="MrTop5" style={{ width: "110px", height:"105px", borderRadius:"50%"}} alt="MrTop5"/>
                        </div>
                        <div className="col-sm-6">
                            <div style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"2.25em", fontStyle:"italic"}}>
                                <p>Mr Top 5.</p>
                            </div>
                            <div className="footer-top5"></div>
                            <div style={{width:"500px"}}>
                                <p>Thanks to <a href="https://www.youtube.com/c/MoreMrTop5">@MrTop5</a> for showing off the unboxing of the #BuildRedux PC! Check out his video to see his PC and setup!</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="card col-sm-6 border-light" style={{ width: "800px", height: "700px" }}>
                <div>
                <ReactPlayer 
                url='https://www.youtube.com/watch?v=UhO7MLntkDE'
                width='100%'
                height='370px'
                />
                </div>

                <div className="card-body" style={{paddingTop:"50px"}}>
                    <div className="background-autor-short">
                        Short Circuit
                    </div>
                    <p className="card-text review1 fs-5" style={{ paddingLeft:"100px", paddingRight:"100px"}}>
                        You basically just pick which games you play, which performance you want, and it'll suggest a rig for you. They make things much, much simpler and again for only $75 bucks? Okay!
                    </p>
                    <div className="row" style={{paddingTop:"10px"}}>
                        <div className="col-sm-3">
                        <img src= {ShowCircuit} className="ShowCircuit" style={{ width: "110px", height:"105px", borderRadius:"50%"}} alt="ShowCircuit"/>
                        </div>
                        <div className="col-sm-6">
                            <div style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", fontSize:"2.25em", fontStyle:"italic"}}>
                                <p>Short Circuit.</p>
                            </div>
                            <div className="footer-short"></div>
                            <div>
                                <p>Thanks for the awesome review <a href="https://www.youtube.com/c/ShortCircuit">@ShortCircuit</a>!</p>
                            </div>
                        </div>
                    </div>      
                </div>         
            </div>
        </div>
        <Footer />
    </div>
}



export default Ratinginfluencers