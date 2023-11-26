import React, { Component } from "react"
import OneProject from "./oneProject"
import "./Projects.css"

class Projects extends Component {
    state = {
        projects: [
            {
                title: "TestMode",
                description: "A website where you can test your skills in some technologies related to programming and get certified when you pass any test.",
                demoUrl: "https://testmode.vercel.app/",
                githubUrl: "https://github.com/ahmed0saber/testmode",
                img: "./images/projects/testmode.png"
            },
            {
                title: "Puzzle 2048",
                description: "A game created by me, supported by leaderboard API which is created by Ahmed Yasser.",
                demoUrl: "https://puzzle-2048.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/Puzzle-2048-React-App",
                img: "./images/projects/p2.png"
            },
            {
                title: "E-Commerce",
                description: "A simple website where user can view products, add or remove them from cart.",
                demoUrl: "https://my-simple-ecommerce-site.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/e-commerce-with-react-and-redux-toolkit",
                img: "./images/projects/e-commerce.png"
            },
            {
                title: "XO Online",
                description: "XO game where you can play vs easy/hard bot. vs local/online player. Chat with people, invite them, win more games and rank up. Backend by Ahmed Yasser.",
                demoUrl: "https://xo-online.herokuapp.com/",
                githubUrl: "https://github.com/ahmed0saber/XO-online",
                img: "./images/projects/xo.png"
            },
            {
                title: "Web Pigeon",
                description: "A website where you can send and receive messages without mentioning the message-sender name.",
                demoUrl: "https://webpigeon.000webhostapp.com/",
                githubUrl: "https://github.com/ahmed0saber/web-pigeon-last-version",
                img: "./images/projects/wp.png"
            },
            {
                title: "Ask Bin",
                description: "Ask-Bin is my first Full Stack website. It's where users can create {forms, quizzes, tests} , share them with people and receive their answers.",
                demoUrl: "https://ask-bin.000webhostapp.com/home.php",
                githubUrl: "https://github.com/ahmed0saber/ask-bin",
                img: "./images/projects/ab.png"
            },
            {
                title: "Coffee Time",
                description: "A fully animated responsive landing page.",
                demoUrl: "https://ahmed0saber.github.io/coffee-time/",
                githubUrl: "https://github.com/ahmed0saber/coffee-time",
                img: "./images/projects/ct.png"
            },
            {
                title: "Global Chat",
                description: "A website where you can send messages globally. Backend by Ahmed Yasser.",
                demoUrl: "https://globalonlinechat.herokuapp.com/",
                githubUrl: "https://github.com/ahmed0saber/onlinechat",
                img: "./images/projects/gc.png"
            },
            {
                title: "WhatsApp Exported Chat Viewer",
                description: "A website that converts WhatsApp chats exported as text file into a chat for easier view, and adds the ability to search for certain messages.",
                demoUrl: "https://ahmed0saber.github.io/whatsapp-exported-chat-viewer/",
                githubUrl: "https://github.com/ahmed0saber/whatsapp-exported-chat-viewer",
                img: "./images/projects/whatsapp-chat-viewer.png"
            },
            {
                title: "WhatsApp Form Creator",
                description: "A website where you can create a form and share it with others to receive their submits on WhatsApp.",
                demoUrl: "https://whatsapp-form-creator.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/whatsapp-form-creator",
                img: "./images/projects/whatsapp-form-creator.png"
            },
            {
                title: "Todo List",
                description: "A progressive web application where user can store his tasks, mark them as completed, or delete them.",
                demoUrl: "https://my-todo-tasks.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/todo-pwa-in-react",
                img: "./images/projects/todo-list.png"
            },
            {
                title: "Reen",
                description: "A fully animated responsive landing page.",
                demoUrl: "https://ahmed0saber.github.io/landing-page/",
                githubUrl: "https://github.com/ahmed0saber/landing-page",
                img: "./images/projects/reen.png"
            },
            {
                title: "Old Portfolio",
                description: "The portfolio I created before that one you are on now, built with bootstrap.",
                demoUrl: "https://ahmed0saber.github.io/bootstrap-projects/portfolio/",
                githubUrl: "https://github.com/ahmed0saber/bootstrap-projects/tree/main/portfolio",
                img: "./images/projects/op.png"
            },
            {
                title: "Photo Store",
                description: "An image store using unsplashAPI where you can search for images and download them.",
                demoUrl: "https://ahmed0saber.github.io/photostore/",
                githubUrl: "https://github.com/ahmed0saber/photostore",
                img: "./images/projects/ps.png"
            },
            {
                title: "Math Exam",
                description: "An online math test that generates random math equations with leaderboard. Backend by Ahmed Yasser.",
                demoUrl: "https://ahmed0saber.github.io/Math-Exam/",
                githubUrl: "https://github.com/ahmed0saber/Math-Exam",
                img: "./images/projects/me.png"
            },
            {
                title: "Online Quiz",
                description: "It's just an one-page web-skills quiz with leaderboard. Using Leaderboard API created by Ahmed Yasser.",
                demoUrl: "https://ahmed0saber.github.io/online-quiz/",
                githubUrl: "https://github.com/ahmed0saber/online-quiz",
                img: "./images/projects/oq.png"
            },
            {
                title: "Live Code Editor",
                description: "A Live Code Editor for Web Development with HTML, CSS, JavaScript.",
                demoUrl: "https://ahmed0saber.github.io/bootstrap-projects/live%20web%20code%20editor/",
                githubUrl: "https://github.com/ahmed0saber/bootstrap-projects/tree/main/live%20web%20code%20editor",
                img: "./images/projects/lce.png"
            },
            {
                title: "Quote Generator",
                description: "A simple quote generator built with react.",
                demoUrl: "https://quote-generator-niu5.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/quote-generator-react-app",
                img: "./images/projects/qg.png"
            },
            {
                title: "Technical Documentation",
                description: "A technical documentation or tutorial for C# programming language basics.",
                demoUrl: "https://ahmed0saber.github.io/freecodecamp-tasks/technical%20documentation/",
                githubUrl: "https://github.com/ahmed0saber/freecodecamp-tasks/tree/main/technical%20documentation",
                img: "./images/projects/td.png"
            },
            {
                title: "MarkDown Previewer",
                description: "A simple MarkDown Previewer that converts MarkDown to HTML, built with react.",
                demoUrl: "https://markdown-previewer.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/markdown-previewer-react-app",
                img: "./images/projects/mp.png"
            },
            {
                title: "Tenzi Game",
                description: "A simple web game.",
                demoUrl: "https://ahmed0saber.github.io/tenzi-game/",
                githubUrl: "https://github.com/ahmed0saber/tenzi-game",
                img: "./images/projects/tg.png"
            },
            {
                title: "Product List",
                description: "A simple react app to calculate total price of some products.",
                demoUrl: "https://product-list.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/product-list-react-app",
                img: "./images/projects/pl.png"
            },
            {
                title: "Drum Machine",
                description: "A simple Drum Machine built with react.",
                demoUrl: "https://drum-machine.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/Drum-Machine-React-App",
                img: "./images/projects/dm.png"
            },
            {
                title: "Simple Calculator",
                description: "A simple calculator built with react.",
                demoUrl: "https://simple-calculator-nu8b.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/calculator-react-app",
                img: "./images/projects/sc.png"
            },
            {
                title: "Clipboard Landing Page",
                description: "A simple landing page from frontend mentor challenges.",
                demoUrl: "https://ahmed0saber.github.io/GDSC-Kafr-El-Sheikh/4-Landing-Page/",
                githubUrl: "https://github.com/ahmed0saber/GDSC-Kafr-El-Sheikh/tree/main/4-Landing-Page",
                img: "./images/projects/cb.png"
            },
            {
                title: "Dashboard",
                description: "A simple dashboard built with the help of chart.js.",
                demoUrl: "https://ahmed0saber.github.io/data-visualization-with-D3-and-chart/Chart-Projects/1-dashboard/",
                githubUrl: "https://github.com/ahmed0saber/data-visualization-with-D3-and-chart/tree/main/Chart-Projects/1-dashboard",
                img: "./images/projects/db.png"
            },
            {
                title: "Memory Game",
                description: "A simple memory game built with react.",
                demoUrl: "https://memory-game.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/pwa-memory-game-with-react-js",
                img: "./images/projects/mg.png"
            },
            {
                title: "ToGraph",
                description: "A website that converts plots into graph.",
                demoUrl: "https://ahmed0saber.github.io/ToGraph/",
                githubUrl: "https://github.com/ahmed0saber/ToGraph",
                img: "./images/projects/to-graph.png"
            },
            {
                title: "Translatable Article",
                description: "A simple page where user can switch between Arabic and English.",
                demoUrl: "https://translatable-article.onrender.com/",
                githubUrl: "https://github.com/ahmed0saber/translatable-article",
                img: "./images/projects/translatable-article.png"
            },
            {
                title: "Connect 4",
                description: "A simple connect 4 game.",
                demoUrl: "https://ahmed0saber.github.io/connect-4/",
                githubUrl: "https://github.com/ahmed0saber/connect-4",
                img: "./images/projects/connect-4.png"
            },
            {
                title: "Wheel Of Fortune",
                description: "A simple wheel of fortune game.",
                demoUrl: "https://ahmed0saber.github.io/wheel-of-fortune/",
                githubUrl: "https://github.com/ahmed0saber/wheel-of-fortune",
                img: "./images/projects/wheel-of-fortune.png"
            },
            {
                title: "Excel Sheet Generator",
                description: "A website where user can create a table with certain number of rows and columns, edit them, then download this table as excel sheet.",
                demoUrl: "https://ahmed0saber.github.io/excel-sheet-generator/",
                githubUrl: "https://github.com/ahmed0saber/excel-sheet-generator",
                img: "./images/projects/excel-sheet-generator.png"
            },
            {
                title: "Photo Editor",
                description: "A website where user can edit his photos online and download them.",
                demoUrl: "https://ahmed0saber.github.io/photo-editor/",
                githubUrl: "https://github.com/ahmed0saber/photo-editor",
                img: "./images/projects/photo-editor.png"
            },
            {
                title: "Wikipedia Search Engine",
                description: "A website where user can search for certain topics on Wikipedia.",
                demoUrl: "https://ahmed0saber.github.io/wikipedia-search-engine/",
                githubUrl: "https://github.com/ahmed0saber/wikipedia-search-engine",
                img: "./images/projects/wikipedia-search-engine.png"
            },
            {
                title: "Turn Based Game",
                description: "A simple game where 2 local players can play together.",
                demoUrl: "https://ahmed0saber.github.io/turn-based-role-playing-game/",
                githubUrl: "https://github.com/ahmed0saber/turn-based-role-playing-game",
                img: "./images/projects/turn-based-game.png"
            },
            {
                title: "Todo List",
                description: "A website where user can store his tasks, mark them as completed, or delete them.",
                demoUrl: "https://ahmed0saber.github.io/todo-app-with-typescript/",
                githubUrl: "https://github.com/ahmed0saber/todo-app-with-typescript",
                img: "./images/projects/todo-list-ts.png"
            },
            {
                title: "Quote Generator",
                description: "A simple quote generator built with TypeScript.",
                demoUrl: "https://ahmed0saber.github.io/quote-generator-with-typescript/",
                githubUrl: "https://github.com/ahmed0saber/quote-generator-with-typescript",
                img: "./images/projects/qg-ts.png"
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
