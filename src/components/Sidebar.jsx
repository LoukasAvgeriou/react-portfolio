import "./Sidebar.css";
import photo from '../assets/loukas.jpg';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarker } from "react-icons/fa";
import CV from '../assets/Loukas_Avgeriou_CV.pdf';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={photo} alt="Loukas Avgeriou" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name">Loukas Avgeriou</h1>
                    <button className="download-cv">
                        <a href={CV} target="_blank">Download CV</a>
                    </button>
                    <div className='separator'></div>
                </div>
            </div>

            <ul className="contacts-list">
                <li className="contact-item">
                    <div className="icon-box">
                        <FaEnvelope />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">EMAIL</p>
                        <a href="mailto:loukasavgeriou@gmail.com" className="contact-link">loukasavgeriou@gmail.com</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <FaPhone />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">PHONE</p>
                        <a href="tel:+306970603068" className="contact-link">+30 6970603068</a>
                    </div>
                </li>
                <li className="contact-item">
                    <div className="icon-box">
                        <FaMapMarker />
                    </div>
                    <div className="contact-info">
                        <p className="contact-title">LOCATION</p>
                        <p className="contact-title">EU Citizen</p>
                    </div>
                </li>
            </ul>

            <ul className="social-list">
                <li className="social-item">
                    <a href="https://github.com/LoukasAvgeriou" target="_blank" className="social-link">
                        <FaGithub />
                    </a>
                </li>
                <li className="social-item">
                    <a href="https://www.linkedin.com/in/loukasavgeriou/" target="_blank" className="social-link">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
        </aside >
    )
}