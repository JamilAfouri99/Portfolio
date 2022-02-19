import classes from './Portfolio.module.css'
import React, { lazy, Suspense } from 'react'
const Header = lazy(() => import('./Header/Header'))
const Body = lazy(() => import('./Body/Body'))
const Footer = lazy(() => import('./Footer/Footer'))

const Portfolio = () => {
    return (
        <div className={classes.portfolio}>
            <Suspense fallback={
                <div className={classes.spinner}>
                    <div className='spinner-border' role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>}>
                <Header />
                <Body />
                <Footer />
            </Suspense>
        </div>
    )
}

export default Portfolio