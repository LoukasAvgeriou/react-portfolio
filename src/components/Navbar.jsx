import "./Navbar.css";

export default function Navbar({ setCurrentPage }) {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <button className="navbar-link" onClick={() => setCurrentPage("about")}>About</button>
                </li>

                <li className="navbar-item">
                    <button className="navbar-link" onClick={() => setCurrentPage("portfolio")}>Portfolio</button>
                </li>

            </ul>
        </nav>
    );
}