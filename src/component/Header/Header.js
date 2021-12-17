import classes from './Header.module.css'
import Info from "./Info/Info"
import Nav from "./Nav/Nav"

const Header =()=>{
    return(
        <div className={classes.Header}>
            <Nav/>
            <Info/>
        </div>
    )
}

export default Header