import React, { Component } from "react";

class OnePost extends Component {
    render(){
        const posts = this.props.data
        const allPosts = posts.map((post, index) => {
            return(
                <div className="post" key={index}>
                    <div className="img-container">
                        <img src={post.img} alt="Post"/>
                    </div>
                    <div className="post-details">
                        <div>
                            <h3>{post.title}</h3>
                            <p>{post.description}</p>
                        </div>
                        <div className="btns-row">
                            <a className="pri-btn" rel="noreferrer" target="_self" href={post.downloadUrl} download>Download as pdf</a>
                            <a className="sub-btn" rel="noreferrer" target="_blank" href={post.linkedinUrl}><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="project-index">
                        {index + 1} / {posts.length}
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