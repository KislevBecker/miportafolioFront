import React, { useState, useEffect } from "react";
import axios from 'axios';
import './about.css';


function About() {
    const [information, setInformation] = useState({});
    useEffect(() => {
        axios.get('https://backendportfoliokislev.herokuapp.com/about')
            .then(
                res => setInformation(res.data[0])
            )
    }, [setInformation])
    return (
        <div className="About">
            <div className="div-foto">
                <img alt="foto random" src={information.Photo} />
            </div>
            <div>
                <h1>{information.name}</h1>
                <h2>{information.Profession}</h2>
                <p>{information.about_me}</p>
                <ul>
                    {information.skills && information.skills.map((skill, index) =>
                        <p>{skill}</p>
                    )}
                </ul>
            </div>
        </div>
    )
};
export default About;