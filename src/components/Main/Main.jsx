import React, { useContext } from "react";
import './Main.css';
import { assets } from '../../assets/assets'
import { Context } from "../../context/Context";

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini clone</p>
                <img className="userImg" src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                {!showResult
                    ?
                    <>
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
                    </>
                    :
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p> {recentPrompt} </p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ?
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                :
                                <pre dangerouslySetInnerHTML={{ __html: resultData }}></pre>
                            }
                        </div>
                    </div>
                }
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        onSent();
                                    }
                                }}  />
                        <div>
                            {/* <img src={assets.add_image} alt="" />
                            <img src={assets.circle_microphone} alt="" /> */}
                            {input ?
                                <img onClick={() => onSent()} src={assets.paper_plane_top} alt="" />
                                : null
                            }
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