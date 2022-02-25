import classes from './Nav.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import face from '../../../assets/jamilFace.jpg'
const Nav = () => {
    const [isShow, isShowChanger] = useState(false)

    const handleShow = () => {
        isShowChanger(true)
    }
    const handleHidden = () => {
        isShowChanger(false)
    }
    return (
        <div className={`flex ${classes.Nav}`}>
            <div className="container">
                <div className={`float-start ${classes.whole_name}`}>
                    <NavLink to='/home' style={{ textDecoration: 'none' }}>
                        {/* <div className={classes.first_letter}>J</div> */}
                        <div className={classes.faceImg}>
                            <img src={face} alt="my face" />
                        </div>
                    </NavLink>
                    <div className={classes.myName}>Jamil Afouri</div>
                </div>
                {!isShow && <div className={`float-end ${classes.ul}`}>
                    <ul>
                        {/* <li><NavLink activeclassname={classes.active} to='/resume'>Resume</NavLink></li> */}
                        <li><NavLink activeclassname={classes.active} to='/home'>Home</NavLink></li>
                        <li><NavLink activeclassname={classes.active} to='/projects'>Projects</NavLink></li>
                        <li><NavLink activeclassname={classes.active} to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>}
                {!isShow && <div className={`float-end ${classes.showIcon}`} style={{ position: 'relative', top: '1.6vh' }}>
                    <button onClick={handleShow}><i className="fas fa-list-ul"></i></button>
                </div>}
                <div className={`${classes.small_nav} ${isShow ? classes.show : ''}`}>
                    {isShow && <div className='float-end' style={{ zIndex: '10', position: 'relative', top: '1.6vh' }}>
                        <button onClick={handleHidden}><i className="fas fa-times"></i></button>
                    </div>}
                    <h3>PORTFOLIO</h3>
                    <ul>
                        <li><NavLink activeclassname={classes.active} to='/home'>Home</NavLink></li>
                        <li><NavLink activeclassname={classes.active} to='/projects'>Projects</NavLink></li>
                        <li><NavLink activeclassname={classes.active} to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav