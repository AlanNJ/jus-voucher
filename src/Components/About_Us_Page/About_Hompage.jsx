import React from 'react'
import About_card from './About_Us_3'
import Vision from './About_Us_2'
import About_Us from './About_Us_1'
import "./About.css";


const About_Hompage = () => {
    return (
        <div className='about_parent'>
            <About_Us />
            <Vision />
            <About_card />

        </div>
    )
}

export default About_Hompage