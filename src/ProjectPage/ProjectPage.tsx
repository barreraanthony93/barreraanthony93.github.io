import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectPage.scss";

type Props = {};
// type Work = {
//     name: string,
//     description: string,
//     work: string[],
//     brief: string
// };
const projects = [
    {
        name: "idce",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum illo at eum alias voluptatem velit eligendi hic sit rem magnam?",
        links: ["live site", "github"],
        images: "url",
        brief: "message about project"
    }
]

const ProjectPage = (props: Props) => {
    const { project } = useParams()
    const [work, setWork] = useState()

    useEffect(() => {
        const filtered = projects.filter((p) => p.name === project)[0]
        setWork(filtered)
        // setWork((prev) => ({  prev, ...filtered }))
    }, [project])

    // const filterProject = useCallback(() => {
    //     return projects.filter((p) => p.name === project)[0]
    // }, [project])

    // const { name, description, links, images, brief } = filterProject()


    return (
    work && <div>
        <h1>{work.name}</h1>
        <p>{work.description}</p>
        <div className="flex row">
            <a>{work.links[0]}</a>
            <a>{work.links[1]}</a>
        </div>
        <p>{work.brief}</p>
    </div> )
};

export default ProjectPage;
