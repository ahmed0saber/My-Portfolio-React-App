import React, { Component } from "react";
import "./About.css"

class About extends Component {
    state = {
        skills: [
            {
                name: "HTML5",
                img: "html.png"
            },
            {
                name: "CSS3",
                img: "css.png"
            },
            {
                name: "JavaScript",
                img: "js.jpg"
            },
            {
                name: "JSON",
                img: "json.png"
            },
            {
                name: "jQuery",
                img: "jquery.png"
            },
            {
                name: "Bootstrap",
                img: "bootstrap.png"
            },
            {
                name: "Materialize",
                img: "matcss.png"
            },
            {
                name: "Sass",
                img: "sass.png"
            },
            {
                name: "Pug",
                img: "pugjs.png"
            },
            {
                name: "D3.js",
                img: "d3.png"
            },
            {
                name: "Chart.js",
                img: "chartjs.svg"
            },
            {
                name: "ElectronJS",
                img: "electron.png"
            },
            {
                name: "TypeScript",
                img: "ts.png"
            },
            {
                name: "React",
                img: "react.png"
            },
            {
                name: "Redux",
                img: "redux.png"
            },
            {
                name: "Next",
                img: "next.png"
            },
        ]
    }
    render(){
        return (
            <main className="about">
                <section className="right-left">
                    <section className="left-section">
                        <img src="./images/about.jpg" alt="Ahmed Saber, ahmed0saber"/>
                        <div>
                            <p><b>Name:</b> Ahmed Saber Fathy</p>
                            <p><b>Birth Date:</b> July 5th 2001</p>
                            <p><b>Phone Number:</b> +20 120 861 1892</p>
                            <p><b>Gmail:</b> ahmed0saber33@gmail.com</p>
                            <p><b>Address:</b> Desouk, Kafr El Sheikh, Egypt</p>
                        </div>
                    </section>
                    <section className="right-section">
                        <h2>Who am I <i className="fa fa-question"></i></h2>
                        <p>Hello there, My name is Ahmed Saber, I'm a 2-year experienced React.js Frontend Web Developer 
                        who enjoys building everything with JavaScript.</p>
                        <p>In this duration, I have learned a lot of technologies, 
                        created many cool websites, collaborated with great developers 
                        and contributed to open source projects.</p>
                        <p>So I'm always seeking to have an opportunity that matches my skills, 
                        to make the best use of all what I have learned.</p>
                        <h2>Education :-</h2>
                        <p>Studies Bachelor of Applied Science - Physics department at faculty of Science, Kafr El Sheikh university. 2019 - 2023</p>
                        <h2>Experience :-</h2>
                        <p>1&#41; Frontend Web Developer at Valinteca, Full-Time, April 2022 - June 2022 & July 2022 - Present</p>
                        <p>2&#41; React.js Web Developer at ATG, Internship, April 2022 - May 2022</p>
                        <h2>Certificates :-</h2>
                        <p>1&#41; SoloLearn certified Full Stack Web Developer</p>
                        <p>2&#41; FreeCodeCamp certified Frontend Web Developer</p>
                        <p>3&#41; Egypt fwd certified Web Designer</p>
                        <div>
                            <a href="https://github.com/ahmed0saber/certifications" rel="noreferrer" target="_blank">View More</a>
                        </div>
                    </section>
                </section>
                <section>
                    <h2 className="text-center">My Skills</h2>
                    <section className="skills-container">
                        {this.state.skills.map((skill, index) => 
                            <div className="skill" key={index}>
                                <div>
                                    <img src={`./images/skills/${skill.img}`} alt={skill.name}/>
                                </div>
                                <h4>{skill.name}</h4>
                            </div>
                        )}
                    </section>
                </section>
            </main>
        )
    }
}

export default About;