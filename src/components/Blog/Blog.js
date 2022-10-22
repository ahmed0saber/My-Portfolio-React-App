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
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1Hq9Xu1btSdC915v9DBBl7WEhzMFoPGgV&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_seo-for-frontend-developers-activity-6979712580508352512-EoYa?utm_source=share&utm_medium=member_desktop",
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
            },
            {
                "title": "Real internships vs Virtual ones",
                "img": "../images/posts/internships.svg",
                "downloadUrl": "",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_internship-internships-frontenddevelopment-activity-6977942698850684928-NUIv?utm_source=share&utm_medium=member_desktop",
                "description": "What is the difference ? and how to find them ?"
            },
            {
                "title": "Specialize vs Generalize ?",
                "img": "../images/posts/specialize.svg",
                "downloadUrl": "",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_ahmed0saber-activity-6975402605858439168-qhKz?utm_source=share&utm_medium=member_desktop",
                "description": "Should I specialize or generalize ?"
            },
            {
                "title": "You are trying in a wrong way",
                "img": "../images/posts/try-again.svg",
                "downloadUrl": "",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_%D9%84%D9%86-%D8%AA%D8%AC%D9%86%D9%89-%D8%AB%D9%85%D8%A7%D8%B1-%D8%A7%D9%84%D9%86%D8%AC%D8%A7%D8%AD-%D9%85%D9%86-%D8%A7%D8%B4%D8%AC%D8%A7%D8%B1-%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%87%D8%AA%D8%A7%D8%B1-%D9%85%D9%85%D9%83%D9%86-activity-6976927640548986880-THDz?utm_source=share&utm_medium=member_desktop",
                "description": "A better way to try"
            },
            {
                "title": "How to debug ?",
                "img": "../images/posts/debug.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1tuLS5VQJwMp_T-YC8UTdKCaJ-eOCTfpq&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_javascript-debugging-activity-6984796864868954112-iKIZ?utm_source=share&utm_medium=member_desktop",
                "description": "Let's get rid of some bugs"
            },
            {
                "title": "JavaScript best practices",
                "img": "../images/posts/best-practice.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=17-09blWqfNVD9sgM0WKB9bWbbGg8fhRl&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_javascript-best-practices-activity-6979380996332744704-mp2Y?utm_source=share&utm_medium=member_desktop",
                "description": "How to avoid bugs ?"
            },
            {
                "title": "Why React.js ?",
                "img": "../images/posts/react.svg",
                "downloadUrl": "",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_reactjs-ahmed0saber-activity-6965117976098279424-734w?utm_source=share&utm_medium=member_desktop",
                "description": "Some features offered by React.js"
            },
            {
                "title": "Validation in JavaScript",
                "img": "../images/posts/validation.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1MTJyZGVBRGaG0hVmIR_zRHlMjDcaZWpd&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_validation-in-javascript-activity-6988421490824105984-1GC2?utm_source=share&utm_medium=member_desktop",
                "description": "How to validate data ?"
            },
            {
                "title": "Regular Expressions in JavaScript",
                "img": "../images/posts/regex.svg",
                "downloadUrl": "https://drive.google.com/u/0/uc?id=1nyshRwch_l9NvJI3ZV11J_Ujwt2gd3T4&export=download",
                "linkedinUrl": "https://www.linkedin.com/posts/ahmed0saber_regex-in-javascript-activity-6989218902752825344-KuUD?utm_source=share&utm_medium=member_desktop",
                "description": "What is RegEx ? what to do with it ? how to write it ?"
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