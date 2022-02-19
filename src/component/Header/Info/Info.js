import classes from './Info.module.css'
import image from '../../../assets/Desk_Picture.jpg'
import CV from '../../../assets/Afouri-CV-2022.pdf'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
const Info = () => {
    // Start Auto Writing 
    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span className="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    // window.onload = function () {

    // };
    useEffect(() => {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
        document.body.appendChild(css);
    }, [])
    // End Auto Writing 
    return (
        <div className={`container ${classes.Info}`}>
            <div className="row">
                <div className={`col-lg-5 col-md-12`}>
                    {/* <img src="http://placekitten.com/324/324" alt="my picture!"/> */}
                    <div className={classes.image}>
                        <div className={classes.img_circle}><img src={image} alt="my picture!" /></div>
                    </div>
                </div>
                <div className={`col-lg-7 col-md-12 ${classes.data}`}>
                    {/* <h6>Web Developer</h6> */}
                    <h4><strong>I am a</strong>
                        <span
                            className="txt-rotate"
                            data-period="2000"
                            data-rotate='[" Software Engineer.", " Video Editor and Animator." ]'></span>
                    </h4>
                    <h1 className={classes.h1}>Jamil Afouri</h1>
                    <p className={classes.p}>An ambitious Software developer who seeks to develop his design and engineering skillset to fulfill the expectation of rigorous market of UI engineering, highly motivated, and organized person. I always tend to keep up with new technologies and learn new things by myself. Looking forward to becoming successful and an influencer in a wide range.</p>
                    <div className="flex">
                        <a href={CV} download='CV for Jamil Afouri'><button className={`btn btn-primary ${classes.downloadBtn}`}>Download CV</button></a>
                        <NavLink to='/contact'><button className={`btn btn-primary ${classes.contactBtn}`}>Contact</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info



