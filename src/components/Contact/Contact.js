import React, { Component } from "react";
import {NavLink, Outlet} from "react-router-dom"
import "./Contact.css"

class Contact extends Component {
    state = {
        name: '',
        email: '',
        msg: ''
    }

    handleChange = (e) => {
        console.log(e.target.id + ": " + e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    formSubmit = () => {
        fetch('https://formsubmit.co/ajax/ahmed0saber33@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        .then(response => console.log(response))
        alert("Your messages has been sent successfully !");
        this.setState({
            name: '',
            email: '',
            msg: ''
        })
    }

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
                    <div className="form">
                        <p>Use a valid email address, So I can reply back.</p>
                        <input value={this.state.name} onChange={this.handleChange} type="text" id="name" placeholder="Enter your name"/>
                        <input value={this.state.email} onChange={this.handleChange} type="email" id="email" placeholder="Enter your email"/>
                        <textarea value={this.state.msg} onChange={this.handleChange} id="msg" placeholder="Enter your message"/>
                        <button onClick={this.formSubmit}>Send</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default Contact;