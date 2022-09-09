import React, { Component } from "react";

class OneProject extends Component {
    render(){
        const projects = this.props.data
        const allProjects = projects.map((project, index) => {
            return(
                <div className="project" key={index}>
                    <div className="img-container">
                        <img src={project.img} alt="Project"/>
                    </div>
                    <div className="project-details">
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        <div className="btns-row">
                            <a className="pri-btn" href={project.demoUrl} rel="noreferrer" target="_blank">View Demo</a>
                            <a className="sub-btn" rel="noreferrer" target="_blank" href={project.githubUrl}><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-index">
                        {index + 1} / {projects.length}
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