/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
// import  Link from 'react-bootstrap';
import axios from 'axios';
import './portfolio.css';
import foto from '../../images/1tjg32bo.png'


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
        <div className="bg-myprojects pb-5">
        <div className="container mt-2 bg-myprojects">
                <h2 className="text-left">My Projects</h2>
                <div className="row">
                    {projects.length > 0 && projects.map((project, index) =>
                        <div className="col-md-3 col-sm-6 mb-2">
                            <div className="card img-contenedor border-card-circle shadow-card" key={index}>
                                <div className="card-body">
                                    <img alt="foto del proyecto" className="w-100" src={foto}></img>
                                    <p className="card-text">{project.descripcion}</p>
                                    <h1 className="card-title">{project.name}</h1>
                                    <a target="_blank" className="card-text" href={project.link}>Let's see this {project.name}!</a>
                                    {/* <Link to={{ pathname: project.link }} target="_blank" /> */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
            
        </>
    )
}
export default Portfolio