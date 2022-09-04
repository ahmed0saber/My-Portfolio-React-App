import React, { Component } from "react";
import "./About.css"

class About extends Component {
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
                        <div className="skill">
                            <div>
                                <img src="./images/skills/html.png" alt="HTML5"/>
                            </div>
                            <h4>HTML5</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/css.png" alt="CSS3"/>
                            </div>
                            <h4>CSS3</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/js.jpg" alt="JavaScript (ES6)"/>
                            </div>
                            <h4>JavaScript</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/json.png" alt="JSON"/>
                            </div>
                            <h4>JSON</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/jquery.png" alt="jQuery"/>
                            </div>
                            <h4>jQuery</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/bootstrap.png" alt="Bootstrap"/>
                            </div>
                            <h4>Bootstrap</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/matcss.png" alt="Materialize"/>
                            </div>
                            <h4>Materialize</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/sass.png" alt="Sass"/>
                            </div>
                            <h4>Sass</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/pugjs.png" alt="Pug"/>
                            </div>
                            <h4>Pug</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/d3.png" alt="D3JS"/>
                            </div>
                            <h4>D3.js</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/chartjs.svg" alt="ChartJS"/>
                            </div>
                            <h4>Chart.js</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/electron.png" alt="ElectronJS"/>
                            </div>
                            <h4>ElectronJS</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/ts.png" alt="TypeScript"/>
                            </div>
                            <h4>TypeScript</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/react.png" alt="React"/>
                            </div>
                            <h4>React</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/redux.png" alt="Redux"/>
                            </div>
                            <h4>Redux</h4>
                        </div>
                        <div className="skill">
                            <div>
                                <img src="./images/skills/next.png" alt="Next"/>
                            </div>
                            <h4>Next</h4>
                        </div>
                    </section>
                </section>
            </main>
        )
    }
}

export default About;