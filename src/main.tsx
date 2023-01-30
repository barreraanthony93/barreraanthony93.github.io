import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import About from './About/About'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Projects from './Projects/Projects'
import Resume from './Resume/Resume'
import Nav from './Components/Nav/Nav'
import AppProvider from './Context/AppContext'
import Footer from './Components/Footer/Footer'
import ProjectPage from './ProjectPage/ProjectPage'
import Contact from './Contact/Contact'

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
    nested: [
      {
        path: "/gsm",
        element: <ProjectPage />
      },
      {
        path: "/besttreeserviceandlandscaping",
        element: <ProjectPage />
      }
    ]
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
];


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
      <div className='layout'>
        <div className='container'>
        <Nav />
        <div style={{marginTop: 140}}> 
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route}>
              {route.nested ?
                route.nested.map((nest) => (
                  <Route key={nest.path} path={route.path + nest.path} element={nest.element} />
                )):
                null
              }
            </Route>
          ))}
          <Route />

        </Routes>
        {/* <Footer /> */}
        </div>
        </div>
      </div>

      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>,
)
