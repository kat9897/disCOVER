import React, { Component } from "react";
 
import { Route, Routes } from "react-router-dom";
 
import Navbar from "./components/navbar";
import PostingList from "./components/postingList";
import Edit from "./components/edit";
import Create from "./components/create";
import LandingPage from "./screens/LandingPage";
import ResumeAndURLPage from "./screens/ResumeAndURLPage";
import './styles/App.css'; 

export default class App extends Component{
  render() {
    return (
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
          <Route path="/resume-and-url" element={<ResumeAndURLPage />} />
        </Routes>
      </div>
    );
  }
}