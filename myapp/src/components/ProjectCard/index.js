
import './index.css'

const ProjectCard = (props) => {

    const {details} = props 
    const {name,url,techs,git,hostedUrl} = details

    return <li className="project-card">
        <img className="project-img" src={url} alt={name}/>
        <div className="card-container">
            <h4 className="project-name">{name}</h4>
            <ul className="tech-list">
                {techs.map(eachTech => <li className="tech" key={eachTech}>{eachTech}</li> )}
            </ul>
            <div className="project-btns-container">
                <a target="_main" href={hostedUrl} className="project-link"><button className="visit">Visit</button></a>
                <a target="_main" href={git} className="project-link"><button className="code">Code</button></a>
            </div>
        </div>
    </li>
}

export default ProjectCard