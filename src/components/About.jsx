import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGamepad } from "react-icons/fa";
import "./About.css";

export default function About() {
    const [activeTab, setActiveTab] = useState("experience");

    const techItems = [
        { name: "JavaScript", icon: <FaJs className="tech-icon" />, color: "#F7DF1E" },
        { name: "HTML", icon: <FaHtml5 className="tech-icon" />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt className="tech-icon" />, color: "#1572B6" },
        { name: "React", icon: <FaReact className="tech-icon" />, color: "#61DAFB" },
        { name: "Node.js", icon: <FaNodeJs className="tech-icon" />, color: "#68A063" },
        { name: "SQL", icon: <FaDatabase className="tech-icon" />, color: "#FFCA28" },
        { name: "Unity (C#)", icon: <FaGamepad className="tech-icon" />, color: "#8C8C8C" }
    ];

    return (
        <div className="about">
            <p className="about-text">
                I am a Frontend Developer with 1+ years of experience in the field. I have a B.Sc. in Computer Science. I am experienced in HTML, CSS, JavaScript, and React. I am always eager to learn new technologies and improve my skills.
            </p>

            {/* Tabs Navigation */}
            <div className="tabs">
                <button
                    className={`tab-button ${activeTab === "experience" ? "active" : ""}`}
                    onClick={() => setActiveTab("experience")}
                >
                    Experience
                </button>
                <button
                    className={`tab-button ${activeTab === "technologies" ? "active" : ""}`}
                    onClick={() => setActiveTab("technologies")}
                >
                    Technologies
                </button>
            </div>

            {/* Tabs Content */}
            <div className="tab-content">
                {activeTab === "experience" && (
                    <ul className="experience-list">
                        <li>Bachelor's degree in Informatics & Telematics</li>
                        <li>Web Developer - React, JavaScript, HTML, CSS</li>
                        <li>Participated in multiple Game Jams</li>
                    </ul>
                )}
                {activeTab === "technologies" && (
                    <ul className="technologies-list">
                        {techItems.map((tech) => (
                            <li key={tech.name} style={{ backgroundColor: tech.color, color: "#fff" }}>
                                {tech.icon}
                                {tech.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
