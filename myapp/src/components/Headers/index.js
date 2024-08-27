import {useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import {Link} from 'react-scroll'
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
                    <Link className="link" onClick={handleSideBar} offset={-100} spy={true} smooth={true} to="hero"><li className="home">HOME</li></Link>
                    <Link className="link" onClick={handleSideBar} offset={-100} spy={true} to="about" smooth={true} ><li className="about">ABOUT</li></Link>
                    <Link className="link" onClick={handleSideBar} ><li className="skills">SKILLS</li></Link>
                    <Link className="link" onClick={handleSideBar} ><li className="projects">PROJECTS</li></Link>
                    <Link className="link"><li className="contact">CONTACT</li></Link>
                </ul>
               </div>
               <button type="button" className="menu-btn" onClick={handleSideBar}>
                <IoIosMenu/>
               </button>
        </nav>
    </header>
} 

export default Headers