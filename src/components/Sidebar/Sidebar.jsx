import React, { useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className="menu icon" src={assets.menu_burger} alt="" />
                <div className="new-chat">
                    <img className="newChat icon" src={assets.plus} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img className="icon" src={assets.comment_alt_middle} alt="" />
                            <p>What is react...</p>
                        </div>
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
