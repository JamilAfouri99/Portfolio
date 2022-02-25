import classes from './project.module.css'

const Project = (props) => {
    return (
        <div className={`col-sm-12 col-md-6 col-lg-4 ${classes.work}`} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div style={{ height: '60%', overflow: 'hidden' }}><img src={props.img} /></div>
            <figcaption>
                <h3>
                    {props.name}
                </h3>
                <p>
                    {props.description}
                </p>
                <a href={props.link} >
                    LIVE PREVIEW
                </a>
            </figcaption>
        </div >
    )
}

export default Project