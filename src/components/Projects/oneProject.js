import React, { Component } from "react";

class OneProject extends Component {
    render(){
        const projects = this.props.data
        const allProjects = projects.map( project => {
            return(
                <div className="project" key={project.id}>
                    <div className="img-container">
                        <img src={project.img} alt="Project"/>
                    </div>
                    <div className="project-details">
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <a href={project.url} rel="noreferrer" target="_blank">View Demo</a>
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