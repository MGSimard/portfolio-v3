import { createFileRoute } from "@tanstack/react-router";
import projectsGD from "../../_data/projectsGD.json";
import { Header } from "../../_components/Header";
import { ProjectPreview } from "../../_components/ProjectPreview";
import { IconOut } from "../../_components/Icons";

export const Route = createFileRoute("/gamedev/")({
  component: RouteGamedev,
});

function RouteGamedev() {
  const gamedevProjects = projectsGD.data;

  return (
    <>
      <Header id="header-gamedev" pageTitle="GAME DEVELOPMENT" />
      <main>
        {Object.entries(gamedevProjects).map(([section, projects]) => (
          <section key={section}>
            <h2 className="section-title">
              {section}
              {projects.more && (
                <a href={projects.more} target="_blank" className="view-all">
                  View All
                  <IconOut />
                </a>
              )}
            </h2>
            <ul className="grid-6x">
              {projects.projects.map((project) => (
                <ProjectPreview key={project.title} projectData={project} newtab={false} />
              ))}
            </ul>
          </section>
        ))}
      </main>
    </>
  );
}
