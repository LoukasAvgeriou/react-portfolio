import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-item">
                        <a href="/" className="navbar-link active">About</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/resume" className="navbar-link">Resume</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/portfolio" className="navbar-link">Portfolio</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/contact" className="navbar-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}