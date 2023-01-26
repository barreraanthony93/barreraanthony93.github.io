import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import About from './About'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './Projects'
import Resume from './Resume'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/Resume",
    element: <Resume/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
