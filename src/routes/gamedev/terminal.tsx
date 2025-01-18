import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";

export const Route = createFileRoute("/gamedev/terminal")({
  component: RouteTerminal,
});

function RouteTerminal() {
  return (
    <>
      <Header id="ue-terminal" pageTitle="LEVEL DESIGN //" detached=" Terminal" />
      <main>
        <section>
          <h2>Terminal</h2>
          <div className="grid-2-1x">
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Unreal Engine
                </li>
                <li>
                  <strong>Genre:</strong> Third-person Shooter
                </li>
                <li>
                  <strong>Solo Project - In Progress</strong>
                </li>
              </ul>
              <p>
                Project to learn UE5, aiming for all geometry to be built completely in-engine without utilizing outside
                software like Blender.
              </p>
            </div>
            <img alt="IMG" />
          </div>
        </section>
        <section>
          <h2>Log 1</h2>
          <div>
            <img alt="IMG" className="float-left" />
            <p>
              Jumped into experimenting with UE5's built-in modeling tools and some blueprint-based tools through Lyra.
              Drew up a couple sections and then started mapping them out in low detail. Geo dimensions is partly based
              on Unreal documentation's recommendations, real world scale, ADA standards and whatever else.
            </p>
            <p>
              Unsure if this is a project I want to finish completely. I jumped into the Unreal Editor with a very vague
              idea just for the sake of trying to migrate my level editor experience into an industry-standard engine so
              I'm learning stuff as I go. So far I've utilized the modeling tools, Lyra's procedural BP tools,
              Spline-based mesh generation for curved roads, material related stuff and basic things like transforms.
              Not much scripting as of yet for what you would consider a proper level.
            </p>
            <p>
              Next couple things to focus on would be adjoining the underground subway's maintenance section to the
              building's basement above. There are three conventional lanes to the map however two of them, being
              outdoors and part of the same-ish area, would require a bit of in-world lore problem solving to think of
              an excuse to separate them with geometry that can obstruct line of sight between the two.
            </p>
            <p>
              Past that, this map would still require a good amount of stuff to be considered a finished blockout as it
              only contains one spawn area and its connections to what would be considered the middle of the map.
            </p>
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <div className="grid-6x">
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
          </div>
        </section>
        <section>
          <h2>Scripting</h2>
          <div className="grid-6x">
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
            <img alt="IMG" />
          </div>
        </section>
      </main>
    </>
  );
}
