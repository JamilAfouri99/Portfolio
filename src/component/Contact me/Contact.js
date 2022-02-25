import Footer from '../Footer/Footer'
import Nav from '../Header/Nav/Nav'
import classes from './Contact.module.css'
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form/form';
// import { useHistory, Prompt } from 'react-router-dom';
// import Authentication from '../../Support/auth-context';
const Contact = () => {
    const [isLoading, setIsLoading] = useState(false)
    // const history = useHistory();
    // const authCtx = useContext(Authentication)
    const handleLoading = ($state) => {
        $state == true ? setIsLoading(true) : setIsLoading(false)
    }
    return (
        <>
            <Nav />
            <div className={classes.ContactUs}>
                <div className={classes.text}>Contact Us !</div>
                <div className={`container pt-4 ${classes.FormBack}`} style={{ width: '100%' }}>
                    <div className={`container py-4 mt-4 ${classes.formContainer} ${!isLoading ? 'text-left' : 'text-center'}`}>
                        {/* <!-- Bootstrap 5 starter form --> */}
                        {isLoading && <div className="spinner-border" style={{ width: '3rem', height: '3rem', marginTop: '12rem', marginBottom: '10rem', color: '#02a2fd' }} role="status">
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {!isLoading && <Form handleLoading={handleLoading} />}

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )

}

export default Contact