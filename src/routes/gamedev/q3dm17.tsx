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
            <Gallery columnCount={1} imgSrcs={[""]} />
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
              <p></p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gameplay</h2>
          <Gallery className="float-right" columnCount={1} imgSrcs={[]} />
          <p></p>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery imgSrcs={[]} />
        </section>
      </main>
    </>
  );
}
