import React, { Component } from "react";
import OnePost from "./post"
import "./Blog.css"

class Blog extends Component {
    state = {
        posts: [
            {
                "id": "1",
                "title": "66 project ideas for frontend web developers",
                "img": "../images/blog1.png",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1By-AJDxL0GVM5Ic12V6Vow7S3S5A7Sij&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_frontend-project-ideas-activity-6969931693994467328-juOL?utm_source=share&utm_medium=member_desktop",
                "description": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum doloribus modi nihil libero quibusdam repellendus enim optio animi exercitationem.</p>"
            },
            {
                "id": "2",
                "title": "How to have a better GitHub account",
                "img": "../images/blog2.png",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1CrdoYSwVfI5AnWpTfmm4-dV5TDGoG_v7&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_github-tips-activity-6971751780414029824-o1Kr?utm_source=share&utm_medium=member_desktop",
                "description": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum doloribus modi nihil libero quibusdam repellendus enim optio animi exercitationem.</p>"
            },
            {
                "id": "3",
                "title": "Project Management For Frontend Web Developers",
                "img": "../images/blog3.png",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=11asMymfXU3zu1z6Taw5YVUeLdb6aitaH&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_project-management-for-frontend-developers-activity-6972864515025612800-ACig?utm_source=share&utm_medium=member_desktop",
                "description": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum doloribus modi nihil libero quibusdam repellendus enim optio animi exercitationem.</p>"
            }
        ]
    }
    render(){
        return (
            <main className="projects">
                <h1>My Blog</h1>
                <section className="projects-container">
                    <OnePost data={this.state.posts}/>
                </section>
            </main>
        )
    }
}

export default Blog;