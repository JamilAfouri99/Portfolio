import Footer from '../Footer/Footer'
import Nav from '../Header/Nav/Nav'
import classes from './Projects.module.css'
import smart_resturant from '../../assets/smart-resturant.png'
import landing_page from '../../assets/pure-javascript.png'

const Projects = () => {
    return (
        <div className={classes.projects}>
            <Nav />
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


                    <div className={`row ${classes.web_projects}`}>




                        <div className='col-md-6 col-sm-12'>
                            <img src={smart_resturant} alt="smart resturant!" />
                            <div>
                                <h2>SMART RESTURANT</h2>
                                <p>Technologies used : <br /><br />&#x25cf; [React.js (Hooks-Redux-Routing)]<br /> &#x25cf; [Firebase (Database-Authentication-Hosting)]<br />&#x25cf; [CSS (Bootstrap-Animation)] </p>
                            </div>
                            <span><a href='https://smart-restaurant-2c2d9.web.app/shop'>Link</a></span>
                        </div>





                        <div className='col-md-6 col-sm-12'>
                            <img src={landing_page} alt="landing page!" />
                            <div>
                                <h2>LANDING PAGE</h2>
                                <p>Technologies used : <br /><br />&#x25cf; [Pure (HTML-CSS-JavaScript)] </p>
                            </div>
                            <span><a href='https://jamilafouri99.github.io/PURE-JS-PROJECT/'>Link</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects