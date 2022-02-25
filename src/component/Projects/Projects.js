import Footer from '../Footer/Footer'
import Nav from '../Header/Nav/Nav'
import classes from './Projects.module.css'
// import smart_resturant from '../../assets/smart-resturant.png'
// import landing_page from '../../assets/pure-javascript.png'
import { useEffect, useState } from 'react'

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProjects();
    }, []);
    const fetchProjects = async () => {
        try {
            setLoading(true)
            const response = await fetch('https://portfolio-9ec35-default-rtdb.firebaseio.com/projects.json')
            const data = await response.json()
            // console.log('response', data)
            for (let key in data) {
                // console.log(data[key])
                setProjects((prev) => {
                    prev.push(data[key])
                    return [...prev]
                })
            }
            setLoading(false)
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }
    return (
        <div className={classes.projects}>
            <Nav />
            <div>
                <div className={classes.text}>
                    <h2>Projects !</h2>
                </div>
                <div className={`${classes.projects_body}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className={`col-12 ${classes.web_subject}`}>
                                <h3>WEBSITES</h3>
                            </div>
                        </div>
                        {loading && <div className={`spinner-border ${classes.spinner}`} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {!loading && <div className={`row ${classes.web_projects}`}>
                            {projects.length > 0 && projects.map((project, index) => (
                                <div className='col-md-6 col-sm-12' key={index}>
                                    <img src={project.img} alt="landing page!" />
                                    <div>
                                        <h2>{project.porject_name}</h2>
                                        {project.description.replaceAll("^\"|\"$", "")}
                                    </div>
                                    <span><a href={project.link}>Link</a></span>
                                </div>
                            ))}
                        </div>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects