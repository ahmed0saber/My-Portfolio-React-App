import React, { Component } from "react"
import OneProject from "./oneProject"
import "./Projects.css"

class Projects extends Component {
    state = {
        projects: [
            {
                id: "1",
                title: "XO Online",
                description: "XO game where you can play vs easy/hard bot. vs local/online player. Chat with people, invite them, win more games and rank up. Backend by Ahmed Yasser.",
                url: "https://xo-online.herokuapp.com/",
                img: "./images/projects/xo.png"
            },
            {
                id: "2",
                title: "Ask-Bin",
                description: "Ask-Bin is my first Full Stack website. It's where users can create {forms, quizzes, tests} , share them with people and receive their answers.",
                url: "https://ask-bin.000webhostapp.com/home.php",
                img: "./images/projects/ab.png"
            },
            {
                id: "3",
                title: "Math Exam",
                description: "An online math test that generates random math equations with leaderboard. Backend by Ahmed Yasser.",
                url: "https://ahmed0saber.github.io/Math-Exam/",
                img: "./images/projects/me.png"
            },
            {
                id: "4",
                title: "Online Quiz",
                description: "It's just an one-page web-skills quiz with leaderboard. Using Leaderboard API created by Ahmed Yasser.",
                url: "https://ahmed0saber.github.io/ehrth/HTML_Test.html",
                img: "./images/projects/oq.png"
            },
            {
                id: "5",
                title: "Puzzle 2048",
                description: "A game created by me, supported by leaderboard API which is created by Ahmed Yasser.",
                url: "https://ahmed0saber.github.io/puzzle-2048/",
                img: "./images/projects/p2.png"
            },
            {
                id: "6",
                title: "Image Store",
                description: "An image store using unsplashAPI where you can search for images and download them.",
                url: "https://ahmed0saber.github.io/ehrth/image_store.html",
                img: "./images/projects/is.png"
            },
            {
                id: "7",
                title: "Secret Space",
                description: "A website where you can send and receive messages without mentioning the message-sender name. Backend by Mohammed El Ganainy.",
                url: "https://secret-space.herokuapp.com/",
                img: "./images/projects/ss.png"
            },
            {
                id: "8",
                title: "Global Chat",
                description: "A website where you can send messages globally. Backend by Ahmed Yasser.",
                url: "https://globalonlinechat.herokuapp.com/",
                img: "./images/projects/gc.png"
            },
            {
                id: "9",
                title: "Technical Documentation",
                description: "A technical documentation or tutorial for C# programming language basics.",
                url: "https://ahmed0saber.github.io/freecodecamp-tasks/technical%20documentation/",
                img: "./images/projects/td.png"
            },
            {
                id: "10",
                title: "Live Code Editor",
                description: "A Live Code Editor for Web Development with HTML, CSS, JavaScript.",
                url: "https://ahmed0saber.github.io/bootstrap-projects/live%20web%20code%20editor/",
                img: "./images/projects/lce.png"
            }
        ]
    }
    render(){
        return (
            <main className="projects">
                <h1>My Projects</h1>
                <section className="projects-container">
                    <OneProject data={this.state.projects}/>
                </section>
            </main>
        )
    }
}

export default Projects;