import classes from './Doing.module.css'

const Doing = () => {
    return (
        <div style={{ backgroundColor: '#141414', marginBottom: '4rem', paddingTop: '2rem' }}>
            <div className={`container ${classes.Doing}`}>
                <div className={classes.whatIdo}>
                    <h3>What I Do</h3>
                </div>
                {/* <div className={classes.myServices}> */}
                <div className={`row ${classes.myServices}`}>
                    <div className='col-md-6 col-sm-12'>
                        <div>
                            <i className="fas fa-laptop"></i>
                        </div>
                        <div>
                            <h4>Web Development</h4>
                            <p>Build a professional websites with latest technologies in this field, such as React.js for front-end and Node.js for backend. Also dealing with animation libraries to make the project more attractive to users.</p>
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div>
                            <i className="fas fa-video"></i>
                        </div>
                        <div>
                            <h4>Video editing and Animation</h4>
                            <p>Figuring the best way to fit all the pieces together is what I do best. Creating amazing and memorable videos is what inspires me in life. </p>
                        </div>
                    </div>
                </div>
                {/* <div className={`row ${classes.myServices}`}>
                    <div className='col-md-6 col-sm-12'>
                        <div>
                            <i className="fas fa-paint-brush"></i>
                        </div>
                        <div>
                            <h4>Graphic Designer</h4>
                            <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Doing