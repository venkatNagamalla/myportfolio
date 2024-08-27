import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-scroll";
import "./index.css";

const Headers = () => {
  const [sideBar, setSideBar] = useState(false);

  const sideBarStyle = sideBar ? "side-bar open" : "side-bar close";

  const handleSideBar = () => setSideBar((prev) => !prev);

  return (
    <header>
      <nav>
        <Link to="hero" offset={-100} smooth={true} spy={true}>
          <span className="logo">V.</span>
        </Link>
        <div className={`${sideBarStyle}`}>
          <button onClick={handleSideBar} type="button" className="cross-btn">
            <RxCross2 />
          </button>
          <ul className="links-container">
            <Link
              activeClass="active"
              className="link"
              onClick={handleSideBar}
              offset={-100}
              spy={true}
              smooth={true}
              to="hero"
            >
              <li>HOME</li>
            </Link>
            <Link
              className="link"
              activeClass="active"
              onClick={handleSideBar}
              offset={-40}
              spy={true}
              to="about"
              smooth={true}
            >
              <li>ABOUT</li>
            </Link>
            <Link
              activeClass="active"
              to="skills"
              smooth={true}
              offset={-60}
              spy={true}
              className="link"
              onClick={handleSideBar}
            >
              <li>SKILLS</li>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              offset={-50}
              spy={true}
              className="link"
              onClick={handleSideBar}
            >
              <li>PROJECTS</li>
            </Link>
            <Link to="contact" spy={true} smooth={true} activeClass="active" onClick={handleSideBar} offset={-50} className="link">
              <li className="contact">CONTACT</li>
            </Link>
          </ul>
        </div>
        <button type="button" className="menu-btn" onClick={handleSideBar}>
          <IoIosMenu />
        </button>
      </nav>
    </header>
  );
};

export default Headers;
