import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.scss";
import { CgWebsite } from 'react-icons/cg';
import { ImGithub } from 'react-icons/im';

type Props = {};
type Work = {
    name: string,
    description: string,
    links: string[],
    assets: string[],
    brief: string
};
const projects = [
    {
        name: "idce",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum illo at eum alias voluptatem velit eligendi hic sit rem magnam?",
        links: ["live site", "github"],
        assets: ["/images/idce.mov", "/images/idce-mobile-1.png" ,"/images/idce-mobile-2.png"],
        brief: "message about project"
    }
]

const ProjectPage = (props: Props) => {
    const { project } = useParams()
    const [work, setWork] = useState<Work>()

    useEffect(() => {
        const filtered = projects.filter((p) => p.name === project)[0]
        setWork(filtered)
    }, [project])

    // const filterProject = useCallback(() => {
    //     return projects.filter((p) => p.name === project)[0]
    // }, [project])

    // const { name, description, links, images, brief } = filterProject()


    return (
        work && <div className="project-page">
            <h2>{work.name}</h2>
            <h1>{work.description}</h1>
            <div className="flex row">
                <a href={work.links[0]}> <CgWebsite /></a>
                <a href={work.links[1]}> < ImGithub /></a>
            </div>
            {/* <img src={work.images} width="100%"/> */}
            <video autoPlay muted width="100%" loop>
                <source src={work.assets[0]} type="video/mp4"/>
            </video>
            <p>{work.brief}</p>
            <div className="images">
                <img className="iphone" src={work.assets[1]}/>
                <img className="iphone img-2" src={work.assets[2]}/>
            </div>
        </div>)
};

export default ProjectPage;
