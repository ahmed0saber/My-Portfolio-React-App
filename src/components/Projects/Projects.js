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
                title: "Web Pigeon",
                description: "A website where you can send and receive messages without mentioning the message-sender name.",
                url: "https://webpigeon.000webhostapp.com/",
                img: "./images/projects/wp.png"
            },
            {
                id: "3",
                title: "Ask Bin",
                description: "Ask-Bin is my first Full Stack website. It's where users can create {forms, quizzes, tests} , share them with people and receive their answers.",
                url: "https://ask-bin.000webhostapp.com/home.php",
                img: "./images/projects/ab.png"
            },
            {
                id: "4",
                title: "Coffee Time",
                description: "A fully animated responsive landing page.",
                url: "https://ahmed0saber.github.io/coffee-time/",
                img: "./images/projects/ct.png"
            },
            {
                id: "5",
                title: "Global Chat",
                description: "A website where you can send messages globally. Backend by Ahmed Yasser.",
                url: "https://globalonlinechat.herokuapp.com/",
                img: "./images/projects/gc.png"
            },
            {
                id: "6",
                title: "Reen",
                description: "A fully animated responsive landing page.",
                url: "https://ahmed0saber.github.io/landing-page/",
                img: "./images/projects/reen.png"
            },
            {
                id: "7",
                title: "Old Portfolio",
                description: "The portfolio I created before that one you are on now, built with bootstrap.",
                url: "https://ahmed0saber.github.io/bootstrap-projects/portfolio/",
                img: "./images/projects/op.png"
            },
            {
                id: "8",
                title: "Photo Store",
                description: "An image store using unsplashAPI where you can search for images and download them.",
                url: "https://ahmed0saber.github.io/photostore/",
                img: "./images/projects/ps.png"
            },
            {
                id: "9",
                title: "Math Exam",
                description: "An online math test that generates random math equations with leaderboard. Backend by Ahmed Yasser.",
                url: "https://ahmed0saber.github.io/Math-Exam/",
                img: "./images/projects/me.png"
            },
            {
                id: "10",
                title: "Puzzle 2048",
                description: "A game created by me, supported by leaderboard API which is created by Ahmed Yasser.",
                url: "https://ahmed0saber.github.io/puzzle-2048/",
                img: "./images/projects/p2.png"
            },
            {
                id: "11",
                title: "Online Quiz",
                description: "It's just an one-page web-skills quiz with leaderboard. Using Leaderboard API created by Ahmed Yasser.",
                url: "https://ahmed0saber.github.io/online-quiz/html.html",
                img: "./images/projects/oq.png"
            },
            {
                id: "12",
                title: "Live Code Editor",
                description: "A Live Code Editor for Web Development with HTML, CSS, JavaScript.",
                url: "https://ahmed0saber.github.io/bootstrap-projects/live%20web%20code%20editor/",
                img: "./images/projects/lce.png"
            },
            {
                id: "13",
                title: "Quote Generator",
                description: "A simple quote generator built with react.",
                url: "https://quote-generator-niu5.onrender.com/",
                img: "./images/projects/qg.png"
            },
            {
                id: "14",
                title: "Technical Documentation",
                description: "A technical documentation or tutorial for C# programming language basics.",
                url: "https://ahmed0saber.github.io/freecodecamp-tasks/technical%20documentation/",
                img: "./images/projects/td.png"
            },
            {
                id: "15",
                title: "MarkDown Previewer",
                description: "A simple MarkDown Previewer that converts MarkDown to HTML, built with react.",
                url: "https://markdown-previewer.onrender.com/",
                img: "./images/projects/mp.png"
            },
            {
                id: "16",
                title: "Tenzi Game",
                description: "A simple web game.",
                url: "https://ahmed0saber.github.io/tenzi-game/",
                img: "./images/projects/tg.png"
            },
            {
                id: "17",
                title: "Product List",
                description: "A simple react app to calculate total price of some products.",
                url: "https://product-list.onrender.com/",
                img: "./images/projects/pl.png"
            },
            {
                id: "18",
                title: "Drum Machine",
                description: "A simple Drum Machine built with react.",
                url: "https://drum-machine.onrender.com/",
                img: "./images/projects/dm.png"
            },
            {
                id: "19",
                title: "Simple Calculator",
                description: "A simple calculator built with react.",
                url: "https://simple-calculator-nu8b.onrender.com/",
                img: "./images/projects/sc.png"
            },
            {
                id: "20",
                title: "Clipboard Landing Page",
                description: "A simple landing page from frontend mentor challenges.",
                url: "https://ahmed0saber.github.io/GDSC-Kafr-El-Sheikh/4-Landing-Page/",
                img: "./images/projects/cb.png"
            },
            {
                id: "21",
                title: "Dashboard",
                description: "A simple dashboard built with the help of chart.js.",
                url: "https://ahmed0saber.github.io/data-visualization-with-D3-and-chart/Chart-Projects/1-dashboard/",
                img: "./images/projects/db.png"
            }
        ]
    }
    render(){
        return (
            <main className="projects" data-aos="fade-right">
                <h1>My Projects</h1>
                <section className="projects-container">
                    <OneProject data={this.state.projects}/>
                </section>
            </main>
        )
    }
}

export default Projects;