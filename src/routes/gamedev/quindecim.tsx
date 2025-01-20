import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/quindecim")({
  component: RouteQuindecim,
});

function RouteQuindecim() {
  return (
    <>
      <Header id="header-tu-quindecim" pageTitle="LEVEL DESIGN //" detached="QUINDECIM" />
      <main>
        <section>
          <h2>Quindecim</h2>
          <div className="grid-1-2x">
            <Gallery columnCount={1} imgSrcs={["/assets/gamedev/tower-unite/quindecim/quindecim_9.webp"]} />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Tower Unite
                </li>
                <li>
                  <strong>Genre:</strong> Social
                </li>
                <li>
                  <strong>Solo Project</strong>
                </li>
              </ul>
              <p>
                As per the majority of things I&apos;ve made, since they weren&apos;t initially meant to be included in
                a portfolio and it&apos;s simply what I enjoy making at any given time, Quindecim is a re-creation of an
                existing piece of content. In this case, it&apos;s an environment/establishment seen within an anime
                titled Death Parade and its Pilot episode, Death Billiards.
              </p>
              <p>
                Mostly everything but the bamboo and jukebox are primitives and in-game props. Stained glass/other
                graphics were created as SVGs in Adobe Illustrator, Inkscape and GIMP. NPC is a character model which I
                created in VRoid Studio by adjusting physical features, creating hair and heavily modifying base
                template clothing to match that of the anime character. The model was then imported and rigged into
                Blender then brought over into Tower Unite.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/quindecim/quindecim_1.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_2.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_3.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_4.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_5.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_6.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_7.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_8.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_9.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_10.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_11.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_12.webp",
            ]}
          />
        </section>
        <section>
          <h2>Misc</h2>
          <p>
            Like a lot of my other projects if the platform allows it, I tend to reach into many different types of
            roles separate from purely level design or environmental art. As stated in the introductory paragraph, this
            project also included a bit of graphics, custom character creation and some basic rigging.
          </p>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/quindecim/quindecim_misc1.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_misc2.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_misc3.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_misc4.webp",
              "/assets/gamedev/tower-unite/quindecim/quindecim_misc5.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
