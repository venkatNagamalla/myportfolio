import "./index.css";

const About = () => (
  <section className="about-container">
    <div className="hr-container mobile animation1">
        <h1 className="about-heading">About Me</h1>
    </div>
    <div className="about-text-img-container">
    <div className="about-img-container animation2">
        <img className="about-img" src="https://i.pinimg.com/564x/e4/56/94/e4569443714172f2773aea229195685c.jpg" alt="code"/>
    </div>
    <div className="about-text-container animation1">
    <div className="hr-container animation desktop">
        <h1 className="about-heading">About Me</h1>
    </div>
    <p className="about-text">
     <span className="dash">--</span> As a passionate and detail-oriented Full-Stack Web Developer with
      expertise in both front-end and back-end technologies. My goal is to
      contribute to a dynamic team where I can utilize my problem-solving
      abilities, stay current with industry trends, and drive impactful projects
      that enhance user experience and achieve business objectives.
    </p>
    </div>
    </div>
  </section>
);

export default About;
