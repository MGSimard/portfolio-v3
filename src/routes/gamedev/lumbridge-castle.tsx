import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/lumbridge-castle")({
  component: RouteLumbridgeCastle,
});

function RouteLumbridgeCastle() {
  return (
    <>
      <Header id="header-tu-lumbridge-castle" pageTitle="LEVEL DESIGN //" detached="LUMBRIDGE CASTLE" />
      <main>
        <section>
          <h2>Lumbridge Castle</h2>
          <div className="grid-1-2x">
            <Gallery
              columnCount={1}
              imgSrcs={["/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_1.webp"]}
            />
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
                Faithful, nearly perfect re-creation of Oldschool Runescape&apos;s Lumbridge Castle made within the
                Tower Unite Condo Creator.
              </p>
              <p>
                For reference, Tower Unite&apos;s apartment building tool is extremely barebones. Nearly entirely made
                out of cubes and other primitive shapes, this is a high fidelity re-creation of Runescape&apos;s
                &quot;Lumbridge Castle&quot;. Similarly to most of my other Tower Unite creations, this was made purely
                as a social space prior to the scripting update. Finishing the surrounding area of Lumbridge was also
                planned, however due to Quality of Life updates which never came, I opted to leave the map as-is since
                I&apos;d rather exclude the skybox detail than make one which doesn&apos;t look exactly the way I want
                it to.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_1.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_2.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_3.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_4.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_5.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_6.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_7.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_8.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_9.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_10.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_11.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_12.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_13.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_14.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_15.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_16.webp",
              "/assets/gamedev/tower-unite/lumbridge-castle/lumbridge-castle_17.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
