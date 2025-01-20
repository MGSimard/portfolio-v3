import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/thy-kingdom-come")({
  component: RouteThyKingdomCome,
});

function RouteThyKingdomCome() {
  return (
    <>
      <Header id="header-rs-thy-kingdom-come" pageTitle="LEVEL DESIGN //" detached="THY KINGDOM COME" />
      <main>
        <section>
          <h2>Thy Kingdom Come</h2>
          <div className="grid-1-2x">
            <Gallery
              columnCount={1}
              imgSrcs={["/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_4.webp"]}
            />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Roblox Studio
                </li>
                <li>
                  <strong>Genre:</strong> Social
                </li>
                <li>
                  <strong>Solo Project</strong>
                </li>
              </ul>
              <p>
                Based on a subsection of the "Thy Kingdom Come" level in Mirror's Edge Catalyst. There was no particular
                purpose for this one other than practicing modular environment modeling entirely out of primitives. I
                went on to build the same level for a world in VRChat using Blender & Unity.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_1.webp",
              "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_2.webp",
              "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_3.webp",
              "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_4.webp",
              "/assets/gamedev/roblox-studio/thy-kingdom-come/thy-kingdom-come_5.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
