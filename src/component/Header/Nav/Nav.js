import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react'

const Nav =()=>{
    const [isShow, isShowChanger] = useState(false)

    const handleShow=()=>{
        isShowChanger(true)
    }
    const handleHidden=()=>{
        isShowChanger(false)
    }
    return(
        <div className={`container flex ${classes.Nav}`}>
            <div className={`float-start ${classes.whole_name}`}>
                <div className={classes.first_letter}>J</div>
                <div className={classes.myName}>Jamil Afouri</div>
            </div>
            {!isShow&&<div className={`float-end ${classes.ul}`}>
                <ul>
                    {/* <li><NavLink activeClassName={classes.active} to='/resume'>Resume</NavLink></li> */}
                    <li><NavLink activeClassName={classes.active} to='/about_me'>About me</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/projects'>Projects</NavLink></li>
                    <li><NavLink activeClassName={classes.active} to='/contact'>Contact</NavLink></li>
                </ul>
            </div>}
            {!isShow && <div className={`float-end ${classes.showIcon}`}>
                <button onClick={handleShow}><i class="fas fa-list-ul"></i></button>
            </div>}
            {isShow && <div className='float-end' style={{zIndex:'10'}}>
                <button onClick={handleHidden}><i class="fas fa-times"></i></button>
            </div>}
            <div className={`${classes.small_nav} ${isShow?classes.show:''}`}>
                <h3>PORTFOLIO</h3>
                    <ul>
                        <li><NavLink activeClassName={classes.active} to='/about_me'>About me</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to='/projects'>Projects</NavLink></li>
                        <li><NavLink activeClassName={classes.active} to='/contact'>Contact</NavLink></li>
                    </ul>
            </div>
        </div>
    )
}

export default Nav