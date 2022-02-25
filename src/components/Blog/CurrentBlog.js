import React, { Component } from "react";
import { useParams } from "react-router-dom";

class CurrentBlog extends Component {
    state = {
        posts: [
            {
                "id": "1",
                "title": "My Goals In 2022",
                "img": "../images/blog1.png",
                "description": "<p>In this blog, I will be dicussing the goals I want to achieve in 2022.</p>",
                "content": "<h3>Skills I need to improve</h3><p>By the beginning of 2022, I will be trying to get my web development skills to higher level, by creating more, more and more projects, which is going to make it hard for me to choose which projects to display on my portfolio.</p><p>As I learned Sass and Bootstrap recently, I'm willing to improve them more than any other technology I have ever learned, as you can see my blog and my portfolio are built with bootstrap which means I'm already performing my plan of 2022.</p><h3>Technologies I want to learn</h3><p>Frontend web development has a wide range of technologies, so making a decision of learning a new technology takes a long time from developers to determine.</p><p>For example, Vue, Angular or React ?? is a very popular asked question by frontend web developers including me who have early decided to learn React.</p><h3>Projects I'm willing to create</h3><p>I'm willing to create more than 100 web pages in 2022, single pages or even multi-page websites.</p><p>Some of these websites I'm thinking about right now are :-</p><ol><li>Educational website with helpful programs to correct answers and give hints to learners.</li><li>Gaming website with its own game engine, where all posted games will be created by me.</li></ol><h3>Teams I'm seeking to work with</h3><p>I'm not seeking to work with certain people but any group of helpful developers would be very great for me.</p><p>So if you are doing your own project right now, you can contact me to work on it together.</p><h5>Thanks for reading...</h5>"
            },
            {
                "id": "2",
                "title": "After vs Before",
                "img": "../images/blog2.png",
                "description": "<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias minus sequi laboriosam dolor facere delectus odit ad consectetur maxime quibusdam.</p>",
                "content": "<h3>To Be Continued...</h3>"
            },
            {
                "id": "3",
                "title": "My Coding Journey",
                "img": "../images/blog3.png",
                "description": "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam illum doloribus modi nihil libero quibusdam repellendus enim optio animi exercitationem.</p>",
                "content": "<h3>To Be Continued...</h3>"
            }
        ],
        post: {}
    }

    componentDidMount() {
        const id = this.props.params.id
        console.log(id)
        for(let i=0; i<this.state.posts.length; i++) {
            if(this.state.posts[i].id === id){
                console.log(this.state.posts[i])
                this.setState({
                    post: this.state.posts[i]
                })
            }
        }
    }

    render(){
        return (
            <main className="projects">
                <section className="projects-container">
                    <div className="post currentPost" key={this.state.post.id}>
                        <img src={this.state.post.img} alt="Post"/>
                        <div>
                            <h3>{this.state.post.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: this.state.post.description }} />
                            <div dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}

const DetermineBlog  = (props) => {
    const param = useParams()
    console.log(param)

    return (
        <CurrentBlog params={param}/>
    )
}

export default DetermineBlog ;