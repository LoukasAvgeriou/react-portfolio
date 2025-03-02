import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Portfolio from './components/portfolio'
import './styles.css'


export default function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const renderPage = () => {
    if (currentPage === "about") return <About />;

    if (currentPage === "portfolio") return <Portfolio />;

  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <h1 className="page-title">
          {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
        </h1>
        <Navbar setCurrentPage={setCurrentPage} />
        {renderPage()}
      </div>
    </div>
  );
}


