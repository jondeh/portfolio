import React, {useEffect, useRef} from 'react';
import {TweenMax} from 'gsap';
import './LandingPage.css';
import {FaGithub, FaLinkedin, FaArrowDown} from 'react-icons/fa';

const LandingPage = (props) => {
    let name = useRef(null);
    let icons = useRef(null);
    let arrow = useRef(null);

    useEffect(() => {
        TweenMax.fromTo(
            name,
            3,
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ).delay(1)

        TweenMax.fromTo(
            icons,
            3,
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ).delay(3.5)

        TweenMax.fromTo(
            arrow,
            1,
            {
                opacity: 0
            },
            {
                opacity: 1
            }
        ).delay(5)

    }, [])

 


    return (
        <div className="landing-page-container">
            <div className="introduction" ref={el => {name = el}}>
                Jonathon Dehlin
            </div>
            <div className="nav-buttons" ref={el => {icons = el}}>
                <a href="https://github.com/jondeh"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jonathon-dehlin-02941b1a8/"><FaLinkedin /></a>
            </div>
            <div className="arrow-container" ref={el => {arrow = el}}><FaArrowDown /></div>
        </div>
    )
}   

export default LandingPage;