import { IconGitHub } from "./Icons";

interface ProjectDataTypes {
  title: string;
  tags: string;
  thumbnail: string;
  link: string;
  githubRepo?: string;
}

export function ProjectPreview({ projectData }: { projectData: ProjectDataTypes }) {
  const { title, tags, thumbnail, link, githubRepo } = projectData;

  return (
    <li
      className="project-preview"
      style={{
        backgroundImage: `linear-gradient(
          hsla(from var(--clrBg) h s l / 0.7) 0,
          rgba(0, 0, 0, 0) 20%,
          rgba(0, 0, 0, 0) 80%,
          hsla(from var(--clrBg) h s l / 0.7) 100%
        ), url(${thumbnail})`,
      }}>
      <a href={link} target="_blank" title={title} className="project-meta">
        <span className="project-title">{title}</span>
        <span className="project-tags">{tags}</span>
      </a>
      {githubRepo && (
        <a href={githubRepo} target="_blank" className="project-github" title={`${title} GitHub Repo`}>
          <IconGitHub />
        </a>
      )}
    </li>
  );
}
