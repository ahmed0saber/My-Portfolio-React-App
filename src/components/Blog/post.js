import React, { Component } from "react";
import { Outlet, NavLink } from "react-router-dom";

class OnePost extends Component {
    render(){
        const posts = this.props.data
        const allPosts = posts.map( post => {
            return(
                <div className="post" key={post.id}>
                    <div className="img-container">
                        <img src={post.img} alt="Post"/>
                    </div>
                    <div className="post-details">
                        <div>
                            <h3>{post.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: post.description }} />
                        </div>
                        <div className="btns-row">
                            <a className="pri-btn" rel="noreferrer" target="_self" href={post.downloadUrl} download>Download as pdf</a>
                            <a className="sub-btn" rel="noreferrer" target="_blank" href={post.linkedinUrl}><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="project-index">
                        {post.id} / {posts.length}
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