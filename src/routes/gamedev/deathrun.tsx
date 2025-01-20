import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/deathrun")({
  component: RouteDeathrun,
});

function RouteDeathrun() {
  return (
    <>
      <Header id="header-halo-deathrun" pageTitle="LEVEL DESIGN //" detached="DEATHRUN" />
      <main>
        <section>
          <h2>DEATHRUN</h2>
          <div className="grid-1-2x">
            <img src="/assets/gamedev/halo-infinite/deathrun/deathrun_1.webp" alt="IMG" />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Halo Infinite Forge
                </li>
                <li>
                  <strong>Genre:</strong> Deathrun
                </li>
                <li>
                  <strong>Solo Project - In Progress</strong>
                </li>
              </ul>
              <p>
                This project is currently a work in progress. In the same fashion as the rest of my creations, it aims
                to modernize and introduce classic game modes into Halo. In this case, deathrun.
              </p>
              <p>
                Deathrun is a mode coming from old Source game servers (such as Garry's Mod, Counter-Strike: Source
                etc). The objective is quite simple; one to two "deaths" control the traps alongside a linear map and
                attempt to prevent runners from reaching the end. Each runner only gets one life, and each trap can only
                be triggered once. The general idea is that a death can win the round were they to average at least one
                kill per trap.
              </p>
              <p>
                This project, like others such as the planned improved sequel to the popular Lake Hot Pursuit, has been
                placed on-hold for different reasons. Whether or not I find time to continue development is still up in
                the air, it's extremely time consuming to put out something of this quality as a one man team, having to
                handle full cycle responsibilities from game design, level design, environmental art, scripting,
                lighting, sound design, graphic design etc.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gameplay</h2>
          <div>
            <video className="float-right" controls>
              <source
                src="https://xqh6wbme74.ufs.sh/f/8IytGibVOEvA43WAHXg2uP5yxM8o07VeIgUWatK1wNmBRiz6"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p>
              At this point, the map is roughly 70% done. All traps and their core functions have been finished along
              with the required scripting. Lighting and environmental art is nearly halfway there -- and ending sequence
              has yet to be implemented
            </p>
            <p>
              Runners would need to pass through every trap until they eventually reach the end. Upon reaching the end,
              the winning player(s) would either get to kill the trap master(s) or choose a some form of a duel
              minigame, as sometimes seen in Gmod deathrun maps.
            </p>
            <p>
              The environment is based on a mix of forerunner and banished architecture embedded within a mountain, set
              underground. The second half of the video is very dark, as lighting work hadn't been started for that
              section yet.
            </p>
          </div>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/deathrun/deathrun_1.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_2.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_3.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_4.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_5.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_6.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_7.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_8.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_9.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_10.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_11.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_12.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_13.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_14.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_15.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_16.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_17.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_18.webp",
            ]}
          />
        </section>
        <section>
          <h2>Scripting</h2>
          <p>
            As of now, every single trap is fully functional (24) and fully scripted with both visual and function.
            Node-based script brains handle all of it, plus extended game settings, player traits and game logic such as
            scoring, win conditions etc. The following picture give an idea of the structure for a script, there's a
            whole lot more happening under the hood with script brains scattered around at nearly every trap.
          </p>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/deathrun/deathrun_script1.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_script2.webp",
              "/assets/gamedev/halo-infinite/deathrun/deathrun_script3.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
