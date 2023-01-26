import { useState } from 'react' 
import './App.scss'

function App() { 

  return (
    <div className='App'>

      <div className="grid"> 
        {new Array(8).fill(1).map((d, i) => (
          <div className={`div${i + 1} block`}></div>
          ))}
    
      </div>
    </div>
  )
}

export default App
