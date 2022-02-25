import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

class OneProject extends Component {
    render(){
        const projects = this.props.data
        const allProjects = projects.map( project => {
            return(
                <div className="project" key={project.id}>
                    <span className="fa fa-arrow-right"></span>
                    <img src={project.img} alt="XO Online"/>
                    <div className="project-back">
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <NavLink to={project.url}>View a demo</NavLink>
                        </div>
                        <Outlet/>
                    </div>
                </div>
            )
        })

        return (
            <>
                {allProjects}
            </>
        )
    }
}

export default OneProject;