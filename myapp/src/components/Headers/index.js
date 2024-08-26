import {useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import './index.css'

const Headers = () => {
    
    const [sideBar,setSideBar] = useState(false);

    const sideBarStyle = sideBar ? "side-bar open" : "side-bar close"
   
    const handleSideBar = () => setSideBar(prev => !prev)

    return <header>
        <nav>
            <span className="logo">V.</span>
               <div className={`${sideBarStyle}`}>
                <button onClick={handleSideBar} type="button" className="cross-btn">
                    <RxCross2/>
                </button>
               <ul className="links-container">
                    <li className="home">HOME</li>
                    <li className="about">ABOUT</li>
                    <li className="skills">SKILLS</li>
                    <li className="projects">PROJECTS</li>
                    <li className="contact">CONTACT</li>
                </ul>
               </div>
               <button type="button" className="menu-btn" onClick={handleSideBar}>
                <IoIosMenu/>
               </button>
        </nav>
    </header>
} 

export default Headers