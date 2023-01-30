import React from 'react'
import { Link } from 'react-router-dom' 
import './Nav.scss'

const Nav:React.FC = () => {
  return (
    <nav>
      <div>
        <img src='/images/AB.svg'/>
      </div>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </ul>
      <div>
        <button>Hire me</button>
      </div>
    </nav>
  )
}

export default Nav
 