import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import ResumeAndURLPage from "./screens/ResumeAndURLPage";
import ResultsPage from "./screens/ResultsPage";
import './styles/App.css'; 

export default class App extends Component{
  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact default path="/" element={<LandingPage />} />
          <Route path="/resume-and-url" element={<ResumeAndURLPage />} />
          <Route path="/result" element={<ResultsPage />} />
        </Routes>
      </div>
    );
  }
}