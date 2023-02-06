import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.scss";
import { CgWebsite } from 'react-icons/cg';
import { ImGithub } from 'react-icons/im';

type Props = {};
type Work = {
    name: string,
    description: string,
    title: string,
    links: string[],
    assets: string[],
    brief: string
};
const projects = [
    {
        name: "idce",
        title: "Iglesia de Cristo en Elgin",
        description: "Modern and simplistic landing page for a church in Elgin, IL with smooth transitions and animations.",
        links: ["https://iglesiadecristoenelgin.com", "github"],
        assets: ["/images/idce/idce.mov", "/images/idce/idce-mobile-2.png", "/images/idce/idce-mobile-1.png", "/images/idce/idce-mobile-3.png"],
        brief: "Mobile responsive site with important information for any visitor to leave with the core teachings and information they need from the Church and the Gospel."
    }
]

const ProjectPage = (props: Props) => {
    const { project } = useParams()
    const [work, setWork] = useState<Work>()

    useEffect(() => {
        const filtered = projects.filter((p) => p.name === project)[0]
        setWork(filtered)
    }, [project]) 

    return (
        work && <div className="project-page">
            <span className="project__name">{work.name}</span>
            <h1 className="project__title">{work.title}</h1>
            <h1>{work.description}</h1>
            <div className="flex row project__links">
                <a href={work.links[0]} target="_blank"> <CgWebsite /></a>
                <a href={work.links[1]} target="_blank"> < ImGithub /></a>
            </div> 
            <video autoPlay muted width="100%" loop>
                <source src={work.assets[0]} type="video/mp4" />
            </video>
            <p className="project__brief">{work.brief}</p>
            <div className="images">
                <div className="iphone">
                    <img src={work.assets[1]} />
                </div>
                <div className="iphone">
                    <img src={work.assets[2]} />
                </div>
                <div className="iphone">
                    <img src={work.assets[3]} />
                </div>
            </div>
        </div>)
};

export default ProjectPage;
