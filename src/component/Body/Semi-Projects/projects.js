import Project from '../../Projects/project/project'
import classes from './projects.module.css'
import { useState, useEffect } from 'react'


const Semi_projects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetchProjects()
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
        <div className="container">
            <div className={`row`}>
                <div className={classes.projectsTopic}>
                    <h3>My Projects</h3>
                </div>
                {loading && <div className={`spinner-border ${classes.spinner}`} role="status">
                    <span className="sr-only">Loading...</span>
                </div>}
                {!loading && <div className={`row ${classes.card}`}>
                    {projects.map((project, index) => (
                        <Project key={index} name={project.project_name} img={project.img} link={project.link} description={project.description} />
                    ))}
                </div>}
            </div>
        </div >
    )
}


export default Semi_projects