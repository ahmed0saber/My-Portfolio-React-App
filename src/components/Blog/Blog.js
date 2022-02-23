import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Blog.css"

class Blog extends Component {
    render(){
        return (
            <main className="projects">
                <h1>My Blog</h1>
                <section className="projects-container">
                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/blog1.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>My Goals in 2022</h3>
                                <p>Here, I'm talk about lorem, lorem and lorem</p>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                                <NavLink to="/">Read More</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/blog3.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>My Goals in 2022</h3>
                                <p>Here, I'm talk about lorem, lorem and lorem</p>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                                <NavLink to="/">Read More</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/blog2.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>My Goals in 2022</h3>
                                <p>Here, I'm talk about lorem, lorem and lorem</p>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                                <NavLink to="/">Read More</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/blog3.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>My Goals in 2022</h3>
                                <p>Here, I'm talk about lorem, lorem and lorem</p>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                                <NavLink to="/">Read More</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/blog2.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>My Goals in 2022</h3>
                                <p>Here, I'm talk about lorem, lorem and lorem</p>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                                <NavLink to="/">Read More</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>

                    <div className="project">
                        <span className="fa fa-arrow-right"></span>
                        <img src="./images/blog1.png" alt="XO Online"/>
                        <div className="project-back">
                            <div>
                                <h3>My Goals in 2022</h3>
                                <p>Here, I'm talk about lorem, lorem and lorem</p>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                                <NavLink to="/">Read More</NavLink>
                            </div>
                            <Outlet/>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

export default Blog;