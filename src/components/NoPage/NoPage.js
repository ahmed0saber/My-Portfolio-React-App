import React, { Component } from "react";
import "./NoPage.css"

class NoPage extends Component {
    render(){
        return (
            <main className="no-page">
                <h1>Error 404</h1>
                <p>Page not found</p>
            </main>
        )
    }
}

export default NoPage;