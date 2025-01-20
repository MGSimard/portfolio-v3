import { createFileRoute } from "@tanstack/react-router";
import projectsWD from "../_data/projectsWD.json";
import { Header } from "../_components/Header";
import { ProjectPreview } from "../_components/ProjectPreview";
import { IconOut } from "../_components/Icons";

export const Route = createFileRoute("/webdev")({
  component: RouteWebdev,
});

function RouteWebdev() {
  const webdevProjects = projectsWD.data;

  return (
    <>
      <Header id="header-webdev" pageTitle="WEB DEVELOPMENT" />
      <main>
        {Object.entries(webdevProjects).map(([section, projects]) => (
          <section key={section}>
            <h2 className="section-title">
              <span className="section-title-core">{section}</span>
              {projects.more && (
                <a href={projects.more} target="_blank" className="view-all">
                  View All
                  <IconOut />
                </a>
              )}
            </h2>
            <ul className="grid-6x">
              {projects.projects.map((project) => (
                <ProjectPreview key={project.title} projectData={project} newtab={true} />
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
