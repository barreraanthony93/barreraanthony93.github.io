import React from 'react'
import './About.scss'

const About: React.FC = () => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='grid'>
        <div className='block triple about-img'></div>
        <div className='block about__greetings'>
          <h1>Greetings, My name is Anthony</h1>
          <p>Fullstack & App Developer</p>
        </div>
        <div className='block about__me double flex col bottom'>
          <h1>About me</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
        </div>
        <div className='block double about_experience flex col bottom'></div>
        <div className='block '></div>
        <div className='block double'></div>
        <div className='block '></div>
      </div>
    </div>
  )
}

export default About


 