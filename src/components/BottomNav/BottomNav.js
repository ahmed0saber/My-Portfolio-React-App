import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./BottomNav.css"

class BottomNav extends Component {
    render(){
        return (
            <div>
                <div className="bottom-nav hide-on-large-only">
                    <NavLink className="" to="/contact"><i className="fa fa-phone"></i></NavLink>
                    <NavLink className="" to="/projects"><i className="fa fa-calendar-check"></i></NavLink>
                    <NavLink className="" to="/"><i className="fa fa-home"></i></NavLink>
                    <NavLink className="" to="/blog"><i className="fa fa-newspaper"></i></NavLink>
                    <NavLink className="" to="/about"><i className="fa fa-info"></i></NavLink>
                </div>
                <Outlet/>
            </div>
        )
    }
}

export default BottomNav;