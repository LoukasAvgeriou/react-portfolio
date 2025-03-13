import "./Projects.css";
import itchioPic from "../assets/itchio.png";
import aicookPic from "../assets/aicook.png";


const projects = [
    {
        id: 1,
        title: "Itch.io Page",
        description: "In my itch.io page, you can find my game projects",
        image: itchioPic,
        siteLink: "https://github.com/yourusername/number-grid-puzzle",  // No site link
        githubLink: null
    },
    {
        id: 2,
        title: "AI Cook page",
        description: "A page where a recipe search engine that uses machine learning to recommend recipes based on ingredients you provide",
        image: aicookPic,
        siteLink: null,
        githubLink: "https://yourgamejamproject.com"
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

                        {/* Conditionally render buttons */}
                        <div className="project-buttons">
                            {project.siteLink && (
                                <a href={project.siteLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                    Visit Site
                                </a>
                            )}
                            {project.githubLink && (
                                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
