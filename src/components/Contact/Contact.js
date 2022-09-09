import React, { Component } from "react";
import "./Contact.css"

class Contact extends Component {
    state = {
        formData: {
            name: '',
            email: '',
            msg: ''
        },
        alert: {
            head: "",
            body: "",
            shown: false
        }
    }
    handleChange = (e) => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.id]: e.target.value
            }
        })
    }
    formSubmit = () => {
        if(this.state.formData.name.trim().length === 0 || this.state.formData.email.trim().length === 0 || this.state.formData.msg.trim().length === 0){
            this.setState({
                alert: {
                    head: "Validation Error",
                    body: "Please fill all fields.",
                    shown: true
                }
            })
            return
        }
        fetch('https://formsubmit.co/ajax/ahmed0saber33@gmail.com', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.formData)
        }).then(() => {
            this.setState({
                formData: {
                    name: '',
                    email: '',
                    msg: ''
                },
                alert: {
                    head: "Successfully Sent",
                    body: "Your message has been sent successfully, thanks for contacting me.",
                    shown: true
                }
            })
        })
    }
    hideAlert = () => {
        this.setState({
            alert: {
                shown: false
            }
        })
    }
    render(){
        return (
            <>
                <div className={this.state.alert.shown ? "custom-alert-overlay shown" : "custom-alert-overlay"}>
                    <div className="custom-alert">
                        <div className="custom-alert-head">
                            <h3>{this.state.alert.head}</h3>
                        </div>
                        <div className="custom-alert-body">
                            <p>{this.state.alert.body}</p>
                            <button onClick={this.hideAlert}>OK</button>
                        </div>
                    </div>
                </div>
                <main className="contact">
                    <section className="flexed">
                        <div>
                            <h1>Contact me</h1>
                            <p>Name: Ahmed Saber Fathy</p>
                            <p>Address: Desouk, Kafr El Sheikh, Egypt</p>
                            <p>Phone: +20 120 861 1892</p>
                            <p>Gmail: ahmed0saber33@gmail.com</p>
                            <section className="social-media-icons">
                                <a style={{"--color": "#00e"}} rel="noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100004875915808"><i className="fa fa-facebook"></i></a>
                                <a style={{"--color": "#0c0"}} rel="noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=+201208611892&text=Hi"><i className="fa fa-whatsapp"></i></a>
                                <a style={{"--color": "#0bb"}} rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/ahmed0saber/"><i className="fa fa-linkedin"></i></a>
                                <a style={{"--color": "#b0b"}} rel="noreferrer" target="_blank" href="https://github.com/ahmed0saber"><i className="fa fa-github"></i></a>
                            </section>
                        </div>
                        <div className="form">
                            <p>Use a valid email address, So I can reply back.</p>
                            <input value={this.state.formData.name} onChange={this.handleChange} type="text" id="name" placeholder="Enter your name"/>
                            <input value={this.state.formData.email} onChange={this.handleChange} type="email" id="email" placeholder="Enter your email"/>
                            <textarea value={this.state.formData.msg} onChange={this.handleChange} id="msg" placeholder="Enter your message"/>
                            <button onClick={this.formSubmit}>Send</button>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}

export default Contact;