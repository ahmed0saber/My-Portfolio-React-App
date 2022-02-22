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
                        <p>My name is <b>Ahmed Saber</b>, and I'm an egyptian <b>Frontend Web Developer</b> who was born in 2001.</p>
                        <p>I have about <b>2 years of experience</b> with frontend web development and its technologies such as HTML5, CSS3, JavaScript(ES6), jQuery, Bootstrap, SASS, ElectronJS, React, Pug and GitHub.</p>
                        <p>I prefer learning from Documentations rather than youtube tutorials.</p>
                        <p>I'm seeking to have an opportunity that matches my skills, to improve my knowledge, experience and skills, technical and communicational ones.</p>

                        <h2>Education :-</h2>
                        <p>Studies Bachelor of Applied Science at faculty of Science, Kafr El Sheikh university.</p>

                        <h2>Certificates :-</h2>
                        <p>SoloLearn certified Full Stack Web Developer</p>
                        <p>FreeCodeCamp certified Frontend Web Developer</p>
                        <p>ShiyarAcademy certified Web Designer</p>
                    </section>
                </section>

                <section>
                    <h2 className="text-center">My Skills</h2>
                    <section className="skills-container">

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/html.png" alt="html"/>
                                </div>
                                <h4>HTML5</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/css.png" alt="css"/>
                                </div>
                                <h4>CSS3</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/js.jpg" alt="javascript"/>
                                </div>
                                <h4>JavaScript (ES6)</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/bootstrap.png" alt="javascript"/>
                                </div>
                                <h4>Bootstrap</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/sass.png" alt="javascript"/>
                                </div>
                                <h4>Sass</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/jquery.png" alt="javascript"/>
                                </div>
                                <h4>jQuery</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/electron.png" alt="javascript"/>
                                </div>
                                <h4>ElectronJS</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/js.jpg" alt="javascript"/>
                                </div>
                                <h4>React</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/js.jpg" alt="javascript"/>
                                </div>
                                <h4>Pug</h4>
                            </div>
                        </div>

                        <div>
                            <div class="skill">
                                <div>
                                    <img src="./images/skills/css.png" alt="css"/>
                                </div>
                                <h4>Materialize</h4>
                            </div>
                        </div>

                    </section>
                </section>
            </main>
        )
    }
}

export default About;