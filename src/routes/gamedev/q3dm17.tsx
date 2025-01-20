import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/q3dm17")({
  component: RouteQ3dm17,
});

function RouteQ3dm17() {
  return (
    <>
      <Header id="header-rs-q3dm17" pageTitle="LEVEL DESIGN //" detached="Q3DM17" />
      <main>
        <section>
          <h2>Q3DM17</h2>
          <div className="grid-1-2x">
            <Gallery columnCount={1} imgSrcs={["/assets/gamedev/roblox-studio/q3dm17/q3dm17_1.webp"]} />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Roblox Studio
                </li>
                <li>
                  <strong>Genre:</strong> FPS
                </li>
                <li>
                  <strong>Solo Project</strong>
                </li>
              </ul>
              <p>
                Another remake I loved making a while back - as per most other projects which were never really intended
                to appear in a portfolio it was made purely for fun. This was one of my first attempts at doing
                primitive shape-based mapping on Roblox Studio. Experimenting with math calcs, union operations and
                setting up texture coordinates using the original textures from Quake. I also learned a couple of plugin
                toolsets to facilitate my time since Roblox Studio lacked vertex snapping features and the likes. As
                stated everything apart from the teleporters are made of primitives, while the textures are ripped from
                Quake.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/roblox-studio/q3dm17/q3dm17_1.webp",
              "/assets/gamedev/roblox-studio/q3dm17/q3dm17_2.webp",
              "/assets/gamedev/roblox-studio/q3dm17/q3dm17_3.webp",
              "/assets/gamedev/roblox-studio/q3dm17/q3dm17_4.webp",
              "/assets/gamedev/roblox-studio/q3dm17/q3dm17_5.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
