import classes from './Portfolio.module.css'
import React, { lazy, Suspense } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const Portfolio = () => {
    return (
        <div className={classes.portfolio}>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Portfolio