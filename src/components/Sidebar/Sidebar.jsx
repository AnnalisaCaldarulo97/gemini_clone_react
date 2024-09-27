import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu icon" src={assets.menu_burger} alt="" />
                <div className="new-chat" onClick={() => newChat()}>
                    <img className="newChat icon" src={assets.plus} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {
                            previousPrompt.map((item, index) => {
                                return (
                                    <div onClick={() => loadPrompt(item)} className="recent-entry">
                                        <img className="icon" src={assets.comment_alt_middle} alt="" />
                                        <p> {item.slice(0, 18)}... </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    :
                    null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img className="icon" src={assets.interrogation} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="icon" src={assets.time_past} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="icon" src={assets.settings} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
