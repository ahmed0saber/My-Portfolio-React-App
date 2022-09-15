import React, { Component } from "react";
import OnePost from "./post"
import "./Blog.css"

class Blog extends Component {
    state = {
        posts: [
            {
                "title": "66 project ideas for frontend web developers",
                "img": "../images/posts/project-ideas.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1By-AJDxL0GVM5Ic12V6Vow7S3S5A7Sij&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_frontend-project-ideas-activity-6969931693994467328-juOL?utm_source=share&utm_medium=member_desktop",
                "description": "Some project ideas that can inspire you"
            },
            {
                "title": "How to have a better GitHub account",
                "img": "../images/posts/github-tips.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1CrdoYSwVfI5AnWpTfmm4-dV5TDGoG_v7&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_github-tips-activity-6971751780414029824-o1Kr?utm_source=share&utm_medium=member_desktop",
                "description": "Having a good GitHub account is something you should do"
            },
            {
                "title": "Project Management For Frontend Web Developers",
                "img": "../images/posts/pm-in-frontend.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=11asMymfXU3zu1z6Taw5YVUeLdb6aitaH&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_project-management-for-frontend-developers-activity-6972864515025612800-ACig?utm_source=share&utm_medium=member_desktop",
                "description": "Know the steps you need to perform before starting to code"
            },
            {
                "title": "My preferred roadmap for frontend web developers",
                "img": "../images/posts/roadmap.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1DWpSOId2rV3AwoH5inmagq8z_YDBy6Yq&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_frontend-web-development-roadmap-activity-6973564459692769280-R_XS?utm_source=share&utm_medium=member_desktop",
                "description": "Technologies you need to learn to be a great frontend web developer"
            },
            {
                "title": "Some SEO tips you need to know",
                "img": "../images/posts/seo.svg",
                "downloadUrl": "",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_seo-searchengineoptimization-html-activity-6954132057870471168-ckJf?utm_source=share&utm_medium=member_desktop",
                "description": "Your guide to improve search engine optimization for your websites"
            },
            {
                "title": "How to gain experience without work",
                "img": "../images/posts/experience.svg",
                "downloadUrl": "",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_ahmed0saber-activity-6974364028915597312-8O4R?utm_source=share&utm_medium=member_desktop",
                "description": "Some different ways that can help you be more experienced"
            },
            {
                "title": "Practice coding by building projects",
                "img": "../images/posts/practice.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1itIRfDX3OMcZ0wHE9HvNee449fjoaQ9l&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_frontend-projects-to-practice-activity-6976084496999673856-WdW-?utm_source=share&utm_medium=member_desktop",
                "description": "Some websites where you can practice coding by building projects"
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