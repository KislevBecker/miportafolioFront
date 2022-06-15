import React, { useState, useEffect } from "react";
import axios from 'axios';
import './portfolio.css';


function Portfolio() {
    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get('https://backendportfoliokislev.herokuapp.com/portfolio')
            .then(
                res => setProjects(res.data)
            )
    }, [setProjects])
    return (
        <>
            <div className="card-portfolio">
                {projects.length > 0 && projects.map((project, index) =>
                    <div>
                        <h1>{project.name}</h1>
                        <img alt="foto del proyecto" src={project.image}></img>
                        <p>{project.descripcion}</p>
                        <p>{project.link}</p>
                    </div>
                )}
            </div>

        </>
    )
}
export default Portfolio