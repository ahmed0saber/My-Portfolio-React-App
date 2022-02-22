import React, { Component } from "react";
import {NavLink, Outlet} from "react-router-dom"
import "./Contact.css"

class Contact extends Component {
    render(){
        return (
            <main className="contact">
                <section className="flexed">
                    <div>
                        <h1>Contact me</h1>
                        <p>Name: Ahmed Saber Fathy</p>
                        <p>Address: Desouk, Kafr El Sheikh, Egypt</p>
                        <p>Phone: +20 120 861 1892</p>
                        <p>Gmail: ahmed0saber33@gmail.com</p>
                        <section className="social-media-icons">
                                <NavLink Style="--ahmed: #00e" to="/"><i className="fa fa-facebook"></i></NavLink>
                                <NavLink Style="--ahmed: #0c0" to="/"><i className="fa fa-whatsapp"></i></NavLink>
                                <NavLink Style="--ahmed: #0bb" to="/"><i className="fa fa-linkedin"></i></NavLink>
                                <NavLink Style="--ahmed: #b0b" to="/"><i className="fa fa-github"></i></NavLink>
                        </section>
                        <Outlet/>
                    </div>
                    <div>
                        <form>
                            <p>Use a valid email address, So I can reply back.</p>
                            <input type="text" placeholder="Enter your name"/>
                            <input type="email" placeholder="Enter your email"/>
                            <textarea placeholder="Enter your message"/>
                            <input type="button" value="Send"/>
                        </form>
                    </div>
                </section>
            </main>
        )
    }
}

export default Contact;