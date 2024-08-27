import ProjectCard from '../ProjectCard'
import './index.css'


const projectsList = [
    {
      id:1,
      url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747898/tigedepwdsf49rqgg4i0.png",
      name: "Netflix Clone",
      techs: ["Html", "Css"],
      git: "https://github.com/venkatNagamalla/netflix_clone",
      hostedUrl:"https://venkatsnetflix.ccbp.tech/"
    },
    {
        id:2,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747881/ugj8ip3cqnji63zgncbc.png",
        name: "Youtube Clone",
        techs: ["React.js"],
        git: "https://github.com/venkatNagamalla/react_69-nxt_watch_app-",
        hostedUrl:"https://venkatsyt.ccbp.tech/"
      },
      {
        id:3,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724751684/nwdkwfvripxcnzvon0xs.png",
        name: "Movies Website",
        techs: ["React.js"],
        git: "https://github.com/venkatNagamalla/venkatstmdbproject",
        hostedUrl:"https://venkatstmdbproject.netlify.app/"
      },
      {
        id:4,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747867/irparev8uobrsvocpqbr.png",
        name: "Ecommerce Website",
        techs: ["React.js"],
        git: "https://github.com/venkatNagamalla/nxt_trendz5/",
        hostedUrl:"https://venkatsecom.ccbp.tech/"
      },
      {
        id:5,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747860/bmg0sau2luruvzlgn8zi.png",
        name: "Food Munch",
        techs: ["Html", "Css", "Bootstrap"],
        git: "",
        hostedUrl:"https://venkatfoodmuch.ccbp.tech"
      },
      {
        id:6,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747851/yfozhrv99ssnhni2lsgq.png",
        name:"Todo-list",
        techs:["Html", "Css", "Javascript"],
        git:"https://github.com/venkatNagamalla/todolist",
        hostedUrl:"https://venkattodolist1.ccbp.tech/"
      },
      {
        id:7,
        url:"https://res.cloudinary.com/dkm6rcqj9/image/upload/v1724747834/cyn8mrp235hzssootppm.png",
        name:"Calculator",
        techs:["Html", "Css", "Javascript"],
        git:"https://github.com/venkatNagamalla/calculatorproject",
        hostedUrl:"https://calculatorpro.ccbp.tech/"
      },
]

const Projects = () => (
    <section id="projects" className="projects-container">
        <div className="projects-heading-container">
        <h1 className="projects-heading">Projects</h1>
    </div>
    <ul className="projects-list">
        {projectsList.map((eachProject) => <ProjectCard key={eachProject.id} details={eachProject}/> )}
    </ul>
    </section>
)

export default Projects