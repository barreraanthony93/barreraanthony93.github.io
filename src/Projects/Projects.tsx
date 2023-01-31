import React from 'react' 
import Block from '../Blocks/Block'
import './Projects.scss'

const Projects: React.FC = () => {  
  return (
    <div className='page'>
      <h1 className='page-heading'>Projects</h1>
      <div className='grid'>
        <Block position='bottom-left'>
            <p>Mobile App</p>
            <h1>Gospel Share Missions</h1>
        </Block>  
        <Block position='top-left'>
            <p>Mobile App</p>
            <h1>Gospel Share Missions</h1>
        </Block>  
        <Block position='top-right' >
            <p>Mobile App</p>
            <h1>Gospel Share Missions</h1>
        </Block>  
        <Block position='bottom-right'>
            <p>Mobile App</p>
            <h1>Gospel Share Missions</h1>
        </Block>  
        <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div>
        <div className='block'></div>
      </div>
    </div>
  )
}

export default Projects


