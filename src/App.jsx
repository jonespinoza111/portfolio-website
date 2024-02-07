import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Portfolio from './pages/Portfolio';

function App() {
  const [open, setOpen] = useState(window.innerWidth <= 768 ? false : true);
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
