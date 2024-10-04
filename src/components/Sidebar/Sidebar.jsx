import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
const Sidebar = () => {
    const [open, setOpen] = useState(false);

    // const handleSidebarClick = () => {
    //     setOpen(!open);
    // }
    const { onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        // <div className={`sidebar ${open ? 'open' : ''}`}>
        <div className={`sidebar ${open == true ? 'open' : 'closed'}`}>
            <div className="top">
                <div className="icontop">
                    <div>
                    <img onClick={() => setOpen(prev => !prev)} className="menu icon" src={assets.menu_burger} alt="" />
                    </div>
                    {/* <img src={assets.menu_burger} onClick={handleSidebarClick} className="menu icon" alt="" /> */}
                    <div className="new-chat" onClick={() => newChat()}>
                        <img className="newChat icon" src={assets.plus} alt="" />
                        {open ? <p className="chat">New Chat</p> : null}

                    </div>
                </div>
                {open ?
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
                    {open ? <p className="chat">Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="icon" src={assets.time_past} alt="" />
                    {open ? <p className="chat">Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img className="icon" src={assets.settings} alt="" />
                    {open ? <p className="chat">Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
