import classes from './Body.module.css'
import Doing from './Doing/Doing'
import Social_Media from './Social Media/Social_Media'

const Body = ()=>{
    return(
        <div className={`${classes.Body}`}>
            <Doing/>
            {/* <Social_Media/> */}
        </div>
    )
}

export default Body