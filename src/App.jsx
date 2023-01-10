import { useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';

function App() {

  return (
    <div className="App relative bg-black min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </div>
  )
}

export default App
