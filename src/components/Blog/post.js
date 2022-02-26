import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

class OnePost extends Component {
    render(){
        const posts = this.props.data
        const allPosts = posts.map( post => {
            return(
                <div className="post" key={post.id} data-aos="fade-right">
                    <img src={post.img} alt="Post"/>
                    <div>
                        <h3>{post.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: post.description }} />
                        <NavLink to={`/blog/${post.id}`}>Read More</NavLink>
                    </div>
                    <Outlet/>
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