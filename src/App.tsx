import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.scss";
import ArrowButton from "./Components/Buttons/ArrowButton";
import CodeStack from "./Components/CodeStack/CodeStack";
import { ImLinkedin } from "react-icons/im";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="grid">
        <Link to="/about" className="welcome block">
          <div className="welcome__info">
            <img src="./src/assets/profile-img.gif" width={70} />
            <div className="welcome__text">
              <h1>Hey, I'm Anthony</h1>
              <p>Fullstack / Mobile App Developer</p>
            </div>
          </div>
          <ArrowButton direction="right" />
        </Link>
        <Link to="/resume" className="resume block">
          <div className="resume__text">
            <h1>Resume</h1>
            <p>Check out my experience</p>
          </div>
          <ArrowButton direction="right" />
        </Link>
        <Link to="/projects" className="project block">
          <div className="project__text__above">
            <p>responsive web app</p>
            <h1>Iglesia de Cristo</h1>
            <CodeStack stack={["react", "next", "node", "html", "css"]} />
          </div>
          <ArrowButton direction="right" />
        </Link>
        <Link to="/projects/idce" className="project block">
          <div className="project__text__above">
            <p>Mobile app</p>
            <h1>Gospel Share Missions</h1>
            <CodeStack stack={["react", "expo", "node", "html", "css"]} />
          </div>
          <ArrowButton direction="right" />
        </Link>
        <Link to="/projects/gsm" className="project block">
          <div className="project__text__above">
            <p>Mobile app</p>
            <h1>Gospel Share Missions</h1>
            <CodeStack stack={["react", "expo", "node", "html", "css"]} />
          </div>
          <ArrowButton direction="right" />
        </Link>
        <Link to="/projects/idchimnos" className="project double block">
          <div className="project__text__above">
            <p>Mobile app</p>
            <h1>Gospel Share Missions</h1>
            <CodeStack stack={["react", "expo", "node", "html", "css"]} />
          </div>
          <ArrowButton direction="right" />
        </Link>
        <a href="" className="block linkedin">
          <ImLinkedin  size={100}/>
          <ArrowButton direction="right" />
        </a>
        <Link to="/contact" className="contact triple block">
          <div className="contact__text">
            <p>What to hire me?</p>
            <h1>Get in touch</h1>
            {/* <CodeStack stack={["react", "expo", "node", "html", "css"]} /> */}
          </div>
          <ArrowButton direction="right" />
        </Link>
        {/* {new Array(8).fill(1).map((d, i) => (
          <div key={i} className={`div${i + 1} block`}>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default App;
