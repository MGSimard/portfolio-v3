import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/tu-misc")({
  component: RouteTuMisc,
});

function RouteTuMisc() {
  return (
    <>
      <Header id="header-tu-misc" pageTitle="LEVEL DESIGN //" detached="MISC" />
      <main>
        <section>
          <h2>Art Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/misc/art-gallery_1.webp",
              "/assets/gamedev/tower-unite/misc/art-gallery_2.webp",
              "/assets/gamedev/tower-unite/misc/art-gallery_3.webp",
              "/assets/gamedev/tower-unite/misc/art-gallery_4.webp",
            ]}
          />
        </section>
        <section>
          <section>
            <h2>Bus Stop</h2>
            <Gallery
              imgSrcs={[
                "/assets/gamedev/tower-unite/misc/bus-stop_1.webp",
                "/assets/gamedev/tower-unite/misc/bus-stop_2.webp",
                "/assets/gamedev/tower-unite/misc/bus-stop_3.webp",
                "/assets/gamedev/tower-unite/misc/bus-stop_4.webp",
                "/assets/gamedev/tower-unite/misc/bus-stop_5.webp",
              ]}
            />
          </section>
          <h2>Stairway</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/misc/stairway_1.webp",
              "/assets/gamedev/tower-unite/misc/stairway_2.webp",
              "/assets/gamedev/tower-unite/misc/stairway_3.webp",
              "/assets/gamedev/tower-unite/misc/stairway_4.webp",
            ]}
          />
        </section>
        <section>
          <h2>House</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/misc/house_1.webp",
              "/assets/gamedev/tower-unite/misc/house_2.webp",
              "/assets/gamedev/tower-unite/misc/house_3.webp",
              "/assets/gamedev/tower-unite/misc/house_4.webp",
              "/assets/gamedev/tower-unite/misc/house_5.webp",
              "/assets/gamedev/tower-unite/misc/house_6.webp",
            ]}
          />
        </section>
        <section>
          <h2>Pool</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/misc/pool_1.webp",
              "/assets/gamedev/tower-unite/misc/pool_2.webp",
              "/assets/gamedev/tower-unite/misc/pool_3.webp",
              "/assets/gamedev/tower-unite/misc/pool_4.webp",
            ]}
          />
        </section>
        <section>
          <h2>Metro</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/misc/metro_1.webp",
              "/assets/gamedev/tower-unite/misc/metro_2.webp",
              "/assets/gamedev/tower-unite/misc/metro_3.webp",
              "/assets/gamedev/tower-unite/misc/metro_4.webp",
              "/assets/gamedev/tower-unite/misc/metro_5.webp",
              "/assets/gamedev/tower-unite/misc/metro_6.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
