import './App.css';
import React, { Component } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNav from "./components/TopNav/TopNav"
import Footer from "./components/Footer/Footer"
import BottomNav from "./components/BottomNav/BottomNav"

import Home from "./components/Home/Home"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Blog from "./components/Blog/Blog"
import Contact from "./components/Contact/Contact"
import NoPage from "./components/NoPage/NoPage"
import DetermineBlog from "./components/Blog/CurrentBlog"


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <>
          <TopNav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<DetermineBlog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NoPage/>} />
          </Routes>
          <Footer/>
          <BottomNav/>
        </>
      </BrowserRouter>
    )
  }
}

export default App;