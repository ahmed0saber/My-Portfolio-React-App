import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Projects.css"

class Projects extends Component {
    render(){
        return (
            <main className="projects">
                <h1>My Projects</h1>
                <section className="projects-container">
                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/projects/xo.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>XO Online</h3>
                                <p>An online game</p>
                                <NavLink to="/">View a demo</NavLink>
                                <NavLink to="/">View on GitHub</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/projects/xo.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>XO Online</h3>
                                <p>An online game</p>
                                <NavLink to="/">View a demo</NavLink>
                                <NavLink to="/">View on GitHub</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/projects/xo.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>XO Online</h3>
                                <p>An online game</p>
                                <NavLink to="/">View a demo</NavLink>
                                <NavLink to="/">View on GitHub</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>
                    
                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/projects/xo.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>XO Online</h3>
                                <p>An online game</p>
                                <NavLink to="/">View a demo</NavLink>
                                <NavLink to="/">View on GitHub</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/projects/xo.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>XO Online</h3>
                                <p>An online game</p>
                                <NavLink to="/">View a demo</NavLink>
                                <NavLink to="/">View on GitHub</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/projects/xo.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>XO Online</h3>
                                <p>An online game</p>
                                <NavLink to="/">View a demo</NavLink>
                                <NavLink to="/">View on GitHub</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Projects;