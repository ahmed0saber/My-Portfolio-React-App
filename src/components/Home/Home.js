import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Home.css"

class Home extends Component {
    render(){
        return (
            <main>
                <section className="container home">
                    <section className="resizable">
                        <section>
                            <h3>Ahmed Saber</h3>
                        </section>
                        <section>
                            <p>Full Stack Web Developer</p>
                        </section>
                        <section className="social-media-icons">
                            <NavLink Style="--ahmed: #00c" to="/"><i className="fa fa-facebook"></i></NavLink>
                            <NavLink Style="--ahmed: #0c0" to="/"><i className="fa fa-whatsapp"></i></NavLink>
                            <NavLink Style="--ahmed: #0bb" to="/"><i className="fa fa-linkedin"></i></NavLink>
                            <NavLink Style="--ahmed: #b0b" to="/"><i className="fa fa-github"></i></NavLink>
                        </section>
                        <section className="home-btns">
                            <NavLink to="/"><button className="cp-btn">Download My Resume</button></NavLink>
                        </section>
                        <Outlet/>
                    </section>
                </section>
            </main>
        )
    }
}

export default Home;