import classes from './Body.module.css'
import Doing from './Doing/Doing'
import Social_Media from './Social Media/Social_Media'
import Project from '../Projects/project/project'
import Semi_projects from './Semi-Projects/projects'
import Form from '../Contact me/Form/form'
const Body = () => {
    return (
        <div className={`${classes.Body}`}>
            <Doing />
            <Semi_projects />
            <div className={classes.partForm} >
                <div className='container'>
                    <div className={classes.projectsTopic}>
                        <h3>Contact with me</h3>
                    </div>
                    <span><Form /></span>
                </div>
            </div>
        </div>
    )
}

export default Body