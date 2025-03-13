import "./Navbar.css";

export default function Navbar({ setCurrentPage, currentPage }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button
                        className={`navbar-link ${currentPage === "about" ? "active" : ""}`}
                        onClick={() => setCurrentPage("about")}
                    >
                        About
                    </button>
                </li>

                <li className="navbar-item">
                    <button
                        className={`navbar-link ${currentPage === "portfolio" ? "active" : ""}`}
                        onClick={() => setCurrentPage("portfolio")}
                    >
                        Portfolio
                    </button>
                </li>
            </ul>
        </nav>
    );
}
