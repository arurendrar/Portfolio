import { Github, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  return (
    <div className="card project-card">
      <div className="project-image">
        <span className="image-placeholder" aria-hidden="true">
          {project.title.charAt(0)}
        </span>
      </div>

      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>

      <div className="badges">
        {project.technologies.map((technology) => (
          <span className="badge small" key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a className="btn btn-ghost btn-small" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={16} /></a>
        <a className="btn btn-primary btn-small" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} demo`}><ExternalLink size={16} /></a>
      </div>
    </div>
  );
}

export default ProjectCard;