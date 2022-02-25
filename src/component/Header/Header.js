import classes from './Header.module.css'
import Info from "./Info/Info"
import Nav from "./Nav/Nav"
import { useEffect } from 'react'

const Header = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className={classes.Header}>
            <Nav />
            <Info />
        </div>
    )
}

export default Header