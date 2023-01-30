import React from 'react'
import { Link } from 'react-router-dom'
import HireMeBlock from '../Blocks/HireMeBlock'
import LinkedinBlock from '../Blocks/LinkedinBlock'
import ArrowButton from '../Components/Buttons/ArrowButton'
import './About.scss'

const About: React.FC = () => {
  return (
    <div className='about page'>
      <h1 className='page-heading'>About Me</h1>
      <div className='grid'>
        <div className='block double about-img'></div>
        <div className='block double about__text'>
          <h1>Hey, I'm Anthony</h1>
          <p>Fullstack & Mobile Developer</p>
        </div>
        <div className='block about__me  flex col bottom'>
          <h1>About me</h1>
          <p>I am a highly skilled and experienced web developer with a passion for creating innovative and engaging websites and applications. I have over 6 years of experience in the field and have worked on a wide range of projects, from simple brochure websites to complex web and mobile applications.</p>
        </div>
        <div className='block triple about__experience flex col bottom'>
          <h1>Experience</h1>
          <div className='about__job'> 
            <span>Akoni Designs </span>
            <span className="divider"></span>
            <span>Freelance Fullstack and Movile Developer <span className='about__time'>2018 - Current</span></span>  
          </div>
          <div className='about__job'>
            <span>School District D300</span>
            <span className="divider"></span> 
            <span>Technology Support Technician <span className='about__time'>2016 - Current</span></span> 
          </div>
          <div className='about__job'>
            <span>RNJ2022 - Church of Christ in Elgin</span>
            <span className="divider"></span> 
            <span>Head of Web & Technology<span className='about__time'>2020 - 2022</span></span> 
          </div>
        </div>
        <HireMeBlock size='double'/>
        <Link to="/resume" className='block about__text  route-btn'>
          <p>Learn more about me</p>
          <h1>See Resume</h1>
          <ArrowButton styles={{
            position: 'absolute'
          }} direction='right'/>
        </Link>
        <LinkedinBlock/>

      </div>
    </div>
  )
}

export default About


 