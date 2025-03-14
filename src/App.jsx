import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import './styles.css'


export default function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    if (currentPage === "about") return <About />;

    if (currentPage === "portfolio") return <Projects />;

  };

  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <div className='header-container'>
            <h1 className="page-title">
              {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </h1>
            <Navbar setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
          {renderPage()}
        </div>
      </div>
    </>
  );
}


