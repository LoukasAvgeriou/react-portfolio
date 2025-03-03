import { useState } from "react";
import "./About.css"

export default function About() {
    const [activeTab, setActiveTab] = useState("experience");

    return (
        <div className="about">
            <h2 className="article-title">About Me</h2>
            <p className="about-text">
                I am a passionate developer with experience in game development and web development.
                My goal is to create innovative and engaging projects.
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
                        <li>🔹 Game Developer - Unity, Godot (3+ years)</li>
                        <li>🔹 Web Developer - React, JavaScript, HTML, CSS</li>
                        <li>🔹 Participated in multiple Game Jams</li>
                    </ul>
                )}
                {activeTab === "technologies" && (
                    <ul className="technologies-list">
                        <li>🖥️ JavaScript, HTML, CSS</li>
                        <li>🎮 Unity (C#), Godot (GDScript)</li>
                        <li>⚛️ React, Node.js</li>
                        <li>🗄️ SQL, Firebase</li>
                    </ul>
                )}
            </div>
        </div>
    );
}