import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./TopNav.css"

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            opened: false
        })
    }
    toggle = () => {
        if(this.state.opened) {
            this.setState({
                opened: false
            })
        }else{
            this.setState({
                opened: true
            })
        }
    }
    render(){
        return (
            <header>
                <nav>
                    <div className="navbar">
                        <div className="logo">
                            <NavLink onClick={this.state.opened ? this.toggle : null} to="/"><span>M</span>y <span>P</span>ortfolio</NavLink>
                        </div>
                        <div className="nav-btn">
                            <button aria-label="open menu" type="button" onClick={this.toggle}><i className={this.state.opened ? "nav-toggler fa fa-close" : "nav-toggler fa fa-bars"}></i></button>
                        </div>
                    </div>
                    <div className={this.state.opened ? "links opened" : "links closed"}>
                        <div>
                            <NavLink aria-label="Home" onClick={this.state.opened ? this.toggle : null} className="link" to="/"><i className="fa fa-home"></i> Home</NavLink>
                            <NavLink aria-label="About" onClick={this.state.opened ? this.toggle : null} className="link" to="/about"><i className="fa fa-info"></i> About</NavLink>
                            <NavLink aria-label="Projects" onClick={this.state.opened ? this.toggle : null} className="link" to="/projects"><i className="fa fa-calendar-check"></i> Projects</NavLink>
                            <NavLink aria-label="Blog" onClick={this.state.opened ? this.toggle : null} className="link" to="/blog"><i className="fa fa-newspaper"></i> Blog</NavLink>
                            <NavLink aria-label="Contact" onClick={this.state.opened ? this.toggle : null} className="link" to="/contact"><i className="fa fa-phone"></i> Contact</NavLink>
                        </div>
                        <Outlet/>
                    </div>
                </nav>
            </header>
        )
    }
}

export default TopNav;