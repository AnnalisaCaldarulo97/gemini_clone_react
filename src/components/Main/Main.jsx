import React from "react";
import './Main.css';
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className="main">
            <div className="nav">
                <p>Gemini clone</p>
                <img className="userImg" src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p>
                        <span>Hello, Dev.</span>
                    </p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>
                            Suggest beautiful places to see on an upcoming road trip
                        </p>
                        <img src={assets.compass} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Briefly summarize this concept: urban planning

                        </p>
                        <img src={assets.bulb} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Brainstorm team bonding activities for our work retreat
                        </p>
                        <img src={assets.interrogation} alt="" />
                    </div>
                    <div className="card">
                        <p>
                            Improve the readability of the following code
                        </p>
                        <img src={assets.code_simple} alt="" />
                    </div>
                </div>
                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.add_image} alt="" />
                            <img src={assets.circle_microphone} alt="" />
                            <img src={assets.paper_plane_top} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;