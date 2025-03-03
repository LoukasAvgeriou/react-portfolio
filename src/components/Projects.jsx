import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "Number Grid Puzzle",
        description: "A Unity puzzle game where numbers add up to 10 to disappear.",
        image: "number-grid.png", // Add the image in the public folder or assets
        link: "https://github.com/yourusername/number-grid-puzzle"
    },
    {
        id: 2,
        title: "Tribe Totem Spirit",
        description: "A game jam project where you play as a spirit guiding a tribe.",
        image: "tribe-totem.png",
        link: "https://yourgamejamproject.com"
    },
    {
        id: 3,
        title: "Portfolio Website",
        description: "My personal portfolio built with React and custom CSS.",
        image: "portfolio-site.png",
        link: "https://github.com/yourusername/portfolio"
    }
];

export default function Projects() {
    return (
        <div className="projects">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-name">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
