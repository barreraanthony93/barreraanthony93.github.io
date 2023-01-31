import React, { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import "./App.scss";
import Footer from "./Components/Footer/Footer";
import Home from './Home/Home';
import About from "./About/About";
import Projects from "./Projects/Projects";
import ProjectPage from "./ProjectPage/ProjectPage";
import Resume from "./Resume/Resume";
import Contact from "./Contact/Contact";

const routes = [
  {
    path: "/",
    // index: true,
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
        nested: [
          {
            path: "projects/:project",
            element: <ProjectPage />
          }
        ]
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  },

];


const App: React.FC = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:project" element={<ProjectPage />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Route>  
        </Routes>
      </div>
  );
};

function Layout() {
  return (
    <div className="layout">
      <div className='container'>
        <Nav />
        <div style={{ marginTop: 100 }}>
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
