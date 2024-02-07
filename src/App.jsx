import { useEffect, useState } from 'react';
import Home from './pages/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import Sidebar from './components/Sidebar';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';

function App() {
  const [open, setOpen] = useState(true);
    const closeSidebar = () => {
        setOpen(false);
    }
    const openSidebar = () => {
      setOpen(true);
  }

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth > 768) {
        openSidebar();
      } else {
        closeSidebar();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="App bg-blue-200 min-h-screen flex flex-row">
      {/* <Navbar /> */}
      <Sidebar open={open} closeSidebar={closeSidebar} />
      <Routes>
        <Route exact path="/" element={<Portfolio open={open} openSidebar={openSidebar} />} />
        <Route exact path="/home" element={<Portfolio open={open} openSidebar={openSidebar} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
