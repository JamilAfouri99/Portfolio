import classes from './Portfolio.module.css'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import React from 'react'
const Portfolio = () => {
    return (
        <div className={classes.portfolio}>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Portfolio