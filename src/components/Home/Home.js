import React, { Component } from "react";
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
                            <p>Frontend Web Developer</p>
                        </section>
                        <section className="social-media-icons">
                            <a aria-label="Facebook" style={{"--color": "#00e"}} rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100092736532709"><i className="fa fa-facebook"></i></a>
                            <a aria-label="WhatsApp" style={{"--color": "#0c0"}} rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=+201208611892&text=Hi"><i className="fa fa-whatsapp"></i></a>
                            <a aria-label="LinkedIn" style={{"--color": "#0bb"}} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ahmed0saber/"><i className="fa fa-linkedin"></i></a>
                            <a aria-label="GitHub" style={{"--color": "#b0b"}} rel="noreferrer" target="_blank" href="https://github.com/ahmed0saber"><i className="fa fa-github"></i></a>
                        </section>
                        <section className="home-btns">
                            <a rel="noreferrer" target="_self" href="https://drive.google.com/u/0/uc?id=1uCgR6ZYGdkmEyA4AwWVI4C1d-8VRsTY4&export=download" download>Download My Resume</a>
                        </section>
                    </section>
                </section>
            </main>
        )
    }
}

export default Home;
