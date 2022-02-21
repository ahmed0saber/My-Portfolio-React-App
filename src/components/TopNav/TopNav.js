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
                    <div className="logo">
                        <NavLink onClick={this.toggle} to="/"><span>M</span>y <span>P</span>ortfolio</NavLink>
                    </div>
                    <div className={this.state.opened ? "links opened" : "links closed"}>
                        <div>
                            <NavLink onClick={this.state.opened ? this.toggle : null} className="link" to="/"><i className="fa fa-home"></i> Home</NavLink>
                            <NavLink onClick={this.state.opened ? this.toggle : null} className="link" to="/about"><i className="fa fa-info"></i> About</NavLink>
                            <NavLink onClick={this.state.opened ? this.toggle : null} className="link" to="/projects"><i className="fa fa-calendar-check"></i> Projects</NavLink>
                            <NavLink onClick={this.state.opened ? this.toggle : null} className="link" to="/blog"><i className="fa fa-newspaper"></i> Blog</NavLink>
                            <NavLink onClick={this.state.opened ? this.toggle : null} className="link" to="/contact"><i className="fa fa-phone"></i> Contact</NavLink>
                        </div>
                        <Outlet/>
                    </div>
                    <div className={this.state.opened ? "nav-btn fa-close" : "nav-btn fa-bars"}>
                        <button type="button" onClick={this.toggle}><i className="fa fa-bars nav-toggler"></i></button>
                    </div>
                </nav>
            </header>
        )
    }
}

export default TopNav;