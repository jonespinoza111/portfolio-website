import { useState } from 'react';
import Home from './pages/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';

function App() {

  return (
    <div className="App relative bg-black min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/project/:id" element={<ProjectDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
