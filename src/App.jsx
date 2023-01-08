import { useState } from 'react';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App relative sm:-8 bg-[#13131a] min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
