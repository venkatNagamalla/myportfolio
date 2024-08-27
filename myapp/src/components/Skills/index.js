import "./index.css";

const Skills = () => (
  <section id="skills" className="skills-container">

    <div className="skills-heading-container">
        <h1 className="skills-heading">Skills</h1>
    </div>
      
      <div className="container">
        <h1>Front End Technologies</h1>
        <ul className="skills-icons-container">
          <li className="skill-icon">
            <i className="html fa-brands fa-html5"></i>
            <p className="skill-name">HTML5</p>
          </li>
          <li className="skill-icon">
            <i className="css fa-brands fa-css3-alt"></i>
            <p className="skill-name">CSS3</p>
          </li>
          <li className="skill-icon">
            <i className="bs fa-brands fa-bootstrap"></i>
            <p className="skill-name">Bootstrap</p>
          </li>
          <li className="skill-icon">
            <i className="js fa-brands fa-js"></i>
            <p className="skill-name">Java Script</p>
          </li>
          <li className="skill-icon">
            <i className="react fa-brands fa-react"></i>
            <p className="skill-name">React</p>
          </li>
        </ul>
      </div>

      <div className="container">
        <h1>Back End Technologies</h1>
        <ul className="skills-icons-container">
          <li className="skill-icon">
            <i className="py fa-brands fa-python"></i>
            <p className="skill-name">Python</p>
          </li>

          <li className="skill-icon">
            <i className="node fa-brands fa-node"></i>
            <p className="skill-name">Node</p>
          </li>
          <li className="skill-icon">
            <i className="sql fa-solid fa-database"></i>
            <p className="skill-name">SQL</p>
          </li>
          
        </ul>
      </div>

      <div className="container">
      <h1>Tools</h1>
         <ul className="skills-icons-container">
         <li className="skill-icon">
            <i className="github fa-brands fa-github"></i>
            <p className="skill-name">Git Hub</p>
          </li>
         </ul>
      </div>

  </section>
);

export default Skills;
