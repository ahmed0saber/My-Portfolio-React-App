import React, { Component } from "react";

class OneProject extends Component {
    render(){
        const projects = this.props.data
        const allProjects = projects.map( project => {
            // <NavLink to={project.url}>View a demo</NavLink>
            // <a onClick={()=> window.open(project.url, "_blank")}>View a demo</a>
            return(
                <div className="project" key={project.id} data-aos="fade-right">
                    <span className="fa fa-arrow-right"></span>
                    <img src={project.img} alt="XO Online"/>
                    <div className="project-back">
                        <div>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.url} rel="noreferrer" target="_blank">View Demo</a>
                        </div>
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