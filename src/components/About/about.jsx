import React, { useState, useEffect } from "react";
import axios from 'axios';
import './about.css';
import avatar1 from '../../images/kislev.png';



function About() {
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://backendportfoliokislev.herokuapp.com/about')
            .then(
                res => setInformation(res.data[0])
            )
    }, [setInformation])
    return (
        <>
        <div className="img-bg-1">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                    <h1>{information.name}</h1>
                        <h2>{information.Profession}</h2>
                        <p className="text-start">{information.about_me}</p>
                    <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><p href="https://www.fiverr.com/share/qb8D02" target="_blank" className="btn btn-contact shadow"><i
                                        className="fab fa-facebook-f"></i></p></li>
                            <li className="list-inline-item"><p href="https://www.fiverr.com/share/qb8D02" target="_blank" className="btn btn-contact shadow"><i
                                        className="fab fa-instagram"></i></p></li>
                            <li className="list-inline-item"><p href="https://www.fiverr.com/share/qb8D02" target="_blank" className="btn btn-contact shadow"><i
                                        className="fab fa-youtube"></i></p></li>
                            <li className="list-inline-item"><p href="https://www.fiverr.com/share/qb8D02" target="_blank" className="btn btn-contact shadow"><i
                                        className="fab fa-twitter"></i></p></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <img alt="foto random" src={avatar1} className="shadow avatar" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="row">
                <div className="col-md-3 col-sm-12  mt-5">
                    <h2>My Skills</h2>
                </div>
                <div className="col-md-9 col-sm-12  mt-5">
                    <ul className="list-group list-group-horizontal-sm">
                        {information.skills && information.skills.map((skill, index) =>
                            <li className="list-group-item" key={index}>{skill}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
};
export default About;