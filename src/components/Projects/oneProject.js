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
                        <div className="btns-row">
                            <a className="pri-btn" href={project.url} rel="noreferrer" target="_blank">View Demo</a>
                            <a className="sub-btn" rel="noreferrer" target="_blank" href={project.src}><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                    <div className="project-index">
                        {project.id} / {projects.length}
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