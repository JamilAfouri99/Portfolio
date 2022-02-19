import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`${classes.Footer}`}>
            <div className={`container`}>
                <div className="row">
                    <div className={`col-md-6 col-sm-12 ${classes.social_media}`}>
                        <div className='row'>
                            <div style={{ paddingBottom: '1.5rem' }} className='col-12'> <strong>SOCIAL MEDIA</strong> </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <ul>
                                    <li><a href='https://www.linkedin.com/in/jamil-afouri-18041b191/'><i title='Linkedin' className="fab fa-linkedin-in"></i></a></li>
                                    <li><a href='https://github.com/JamilAfouri99'><i title='Github' className="fab fa-github"></i></a></li>
                                    <li><a href='https://www.facebook.com/jamelhesham/'><i title='Facebook' className="fab fa-facebook"></i></a></li>
                                    <li><a href='https://www.instagram.com/jamil_afouri/'><i title='Instagram' className="fab fa-instagram"></i></a></li>
                                    <li><a href='https://twitter.com/70b5c9fc6f1b40b'><i title='Twitter' className="fab fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`col-md-6 col-sm-12 ${classes.contact_me}`}>
                        <div className='row'>
                            <div style={{ paddingBottom: '1.5rem' }} className='col-12'> <strong>CONTACT ME</strong> </div>
                        </div>
                        <div className='row'>
                            <div className='col-12'>
                                <div>
                                    <span><i className="fas fa-envelope"></i>&nbsp;&nbsp;&nbsp;</span>
                                    <span>afoure95@gmail.com</span>
                                </div>
                                <div>
                                    <span style={{ marginLeft: '-1rem' }}><i className="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;</span>
                                    <span>+962 79 620 8286</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <span>Ⓒ 2021 All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer