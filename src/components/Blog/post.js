import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

class OnePost extends Component {
    render(){
        const posts = this.props.data
        const allPosts = posts.map( post => {
            return(
                <div className="project" key={post.id}>
                    <span className="fa fa-arrow-right"></span>
                    <img src={post.img} alt="XO Online"/>
                    <div className="project-back">
                        <div>
                            <h3>{post.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: post.description }} />
                            <NavLink to={post.url}>Read More</NavLink>
                        </div>
                        <Outlet/>
                    </div>
                </div>
            )
        })

        return (
            <>
                {allPosts}
            </>
        )
    }
}

export default OnePost;