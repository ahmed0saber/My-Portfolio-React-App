import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./BottomNav.css"

class BottomNav extends Component {
    render(){
        return (
            <div>
                <div className="bottom-nav hide-on-large-only">
                    <NavLink aria-label="Contact" className="" to="/contact">
                        <i className="fa fa-phone"></i>
                        <span>contact</span>
                    </NavLink>
                    <NavLink aria-label="Projects" className="" to="/projects">
                        <i className="fa fa-calendar-check"></i>
                        <span>projects</span>
                    </NavLink>
                    <NavLink aria-label="Home" className="" to="/">
                        <i className="fa fa-home"></i>
                        <span>home</span>
                    </NavLink>
                    <NavLink aria-label="Blog" className="" to="/blog">
                        <i className="fa fa-newspaper"></i>
                        <span>blog</span>
                    </NavLink>
                    <NavLink aria-label="About" className="" to="/about">
                        <i className="fa fa-info"></i>
                        <span>about</span>
                    </NavLink>
                </div>
                <Outlet/>
            </div>
        )
    }
}

export default BottomNav;