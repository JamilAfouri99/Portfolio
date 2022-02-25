import classes from './form.module.css'
import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [inName, setInName] = useState(null)
    const [inEmail, setInEmail] = useState(null)
    const [inMessage, setInMessage] = useState(null)
    const [isAble, setIsAble] = useState(false)
    const [error, setError] = useState('')
    const [isEntered, setIsEntered] = useState(false)
    const [alert, setAlert] = useState(false)

    // Start Validation Data 
    const handleName = (data) => {
        setName(data.target.value);
    }
    const handleEmail = (data) => {
        setEmail(data.target.value)
    }
    const handleMessage = (data) => {
        setMessage(data.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        checkLoggedIn()
        // console.log({ name, email, message })
    }
    useEffect(() => {
        name.trim().length > 8 && email.includes('@') && message.trim().length > 0 ? setIsAble(true) : setIsAble(false)
    }, [handleName, handleEmail, handleMessage]);
    const handleBlurName = () => {
        name.trim().length < 8 ? setInName(true) : setInName(false)
    }
    const handleBlurEmail = () => {
        !email.includes('@') ? setInEmail(true) : setInEmail(false)
    }
    const handleBlurMessage = () => {
        message.trim().length <= 0 ? setInMessage(true) : setInMessage(false)
    }
    // Start Send Data 
    const handlePOSTData = async (e) => {
        e.preventDefault()
        props.handleLoading(true)
        try {
            const response = await fetch('https://portfolio-9ec35-default-rtdb.firebaseio.com/contactus.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
            })
            if (!response.ok) throw 'Faild POST Data!'
            console.log('DATA SENT SUCCESSFULLY!')
            navigate('/home');
            setName(''); setEmail(''); setMessage('');
            setInName(null); setInEmail(null); setInMessage(null);
            setIsEntered(false)
        } catch (error) {
            setError(error.message)
            props.handleLoading(false)
        }
        props.handleLoading(false)
    }
    // End Send Data
    const handleFocus = () => {
        setIsEntered(true)
    }
    let ContactUsData = <h1>{'Contact Us'.toUpperCase()}</h1>
    return (
        <form id="contactForm" className='container' onSubmit={handlePOSTData} onFocus={handleFocus} >

            {/* <!-- Name input --> */}
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input value={name} className={`form-control ${inName ? classes.notValid : inName == null ? classes.BeforeCheck : classes.Valid}`} id="name" type="text" placeholder="Name" data-sb-validations="required" onChange={handleName} onBlur={handleBlurName} />
                {inName && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Name is required.</div>}
            </div>

            {/* <!-- Email address input --> */}
            <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input value={email} className={`form-control ${inEmail ? classes.notValid : inEmail == null ? classes.BeforeCheck : classes.Valid}`} id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required, email" onChange={handleEmail} onBlur={handleBlurEmail} />
                {inEmail && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Email is not valid.</div>}
            </div>

            {/* <!-- Message input --> */}
            <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea value={message} className={`form-control ${inMessage ? classes.notValid : inMessage == null ? classes.BeforeCheck : classes.Valid}`} id="message" type="text" placeholder="Message" style={{ height: '10rem' }} data-sb-validations="required" onChange={handleMessage} onBlur={handleBlurMessage}></textarea>
                {inMessage && <div style={{ color: '#f30f0f', paddingTop: '0.4rem' }}>Message is required.</div>}
            </div>

            {/* <!-- Form submissions success message --> */}
            <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">Form submission successful!</div>
            </div>

            {/* <!-- Form submissions error message --> */}
            <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>

            {/* <!-- Form submit button --> */}
            <div className="d-grid">
                <button className={`btn ${classes.btnCustom} btn-lg`} type="submit" disabled={isAble ? false : true}>Submit</button>
            </div>

        </form>
    )
}

export default Form