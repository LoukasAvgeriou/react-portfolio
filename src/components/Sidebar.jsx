import "./Sidebar.css";
import photo from '../assets/loukas.jpg';

export default function Sidebar() {
    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-info">
                    <figure className="avatar-box">
                        <img src={photo} alt="Loukas Avgeriou" width="80" />
                    </figure>
                    <div className='info-content'>
                        <h1 className='name'>Loukas Avgeriou</h1>
                        <button className='download-cv'>Download CV</button>
                    </div>
                </div>

                <ul className='contacts-list'>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <i className='fas fa-envelope'></i>
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>EMAIL</p>
                            <a href="mailto:loukasavgeriou@gmail.com" className='contact-link'>loukasavgeriou@gmail.com</a>
                        </div>
                    </li>
                    <li>
                        <div className='icon-box'>
                            <i className='fas fa-phone-alt'></i>
                        </div>
                        <div className='contact-info'>
                            <p className='contact-title'>PHONE</p>
                            <a href="tel:+306970603068" className='contact-link'>+30 6970603068</a>
                        </div>
                    </li>
                </ul>

                <ul className='social-list'>
                    <li className='social-item'>
                        <a href="https://github.com/LoukasAvgeriou" className='social-link'>
                            <i className='fab fa-github'></i>
                        </a>
                    </li>
                    <li className='social-item'>
                        <a href="https://www.linkedin.com/in/loukasavgeriou/" className='social-link'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                    </li>
                </ul>
            </aside>
        </>
    )
}