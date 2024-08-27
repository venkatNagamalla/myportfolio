
import './index.css'

const Home = () => (
    <main>
        <div id="hero" className="hero-section">
        <div className="hero-container">
            <img className="hero" src="https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724661245/bpkiffb4lxrcvkmtupyi.jpg" alt="hero" />
        </div>
        </div>
        <div className="name-container">
            <h1 className="hero-text"><span className="hii">Hello</span>I'm</h1>
            <h1 className="name">Venkat Nagamalla</h1>
            <p className="role">------ Full Stack Developer</p>
            <div className="icons-container">
                    <a className="icons" href="https://www.linkedin.com/in/venkat-nagamalla/" target="main" ><i className="in fa-brands fa-linkedin"></i></a>
                    <a className="icons" href="https://github.com/venkatNagamalla" target="_main" ><i className="git fa-brands fa-github"></i></a>
                </div>
        </div>
    </main>
)

export default Home