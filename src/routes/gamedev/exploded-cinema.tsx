import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/exploded-cinema")({
  component: RouteExplodedCinema,
});

function RouteExplodedCinema() {
  return (
    <>
      <Header id="header-tu-exploded-cinema" pageTitle="LEVEL DESIGN //" detached="EXPLODED CINEMA" />
      <main>
        <section>
          <h2>Exploded Cinema</h2>
          <div className="grid-1-2x">
            <Gallery columnCount={1} imgSrcs={["/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_9.webp"]} />
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
              <p>Inspired by the &quot;Exploded&quot; Cinema at the Wushang Zhongyan Mall in Wuhan, China.</p>
              <p>
                Not much to say about this creation other than the fact that it is a simple condo intended to be
                utilized as a movie theater. The overall look takes a few stylistic choices from the original Cinema
                design, such as the exploded foam block walls and light fixtures, along with the design of columns
                protruding through surfaces.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_1.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_2.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_3.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_4.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_5.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_6.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_7.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_8.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_9.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_10.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_11.webp",
              "/assets/gamedev/tower-unite/exploded-cinema/exploded-cinema_12.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
