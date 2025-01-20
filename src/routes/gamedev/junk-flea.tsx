import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/gamedev/junk-flea")({
  component: RouteJunkFlea,
});

function RouteJunkFlea() {
  return (
    <>
      <Header id="header-halo-junk-flea" pageTitle="LEVEL DESIGN //" detached="JUNK FLEA" />
      <main>
        <section>
          <h2>Junk Flea</h2>
          <div className="grid-1-2x">
            <Gallery columnCount={1} imgSrcs={["/assets/gamedev/halo-infinite/junk-flea/junk-flea_1.webp"]} />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Halo Infinite Forge
                </li>
                <li>
                  <strong>Genre:</strong> FPS, Gun Game
                </li>
                <li>
                  <strong>Solo Project</strong>
                </li>
              </ul>
              <p>
                Similarly to the previous project,{" "}
                <Link to="/gamedev/overdose" className="link">
                  &quot;Overdose&quot;
                </Link>
                , Junk Flea was also a recreation of a map originating from Combat Arms. This was also developed within
                Halo Infinite&apos;s Forge tool over the course of over 400 hours shortly after the tool&apos;s release.
                The process for this level was slightly different, rather than &quot;eyeballing&quot; it off of Youtube
                videos, I resorted to seeking out shady tools to rip the original map files out of Combat Arms. Once the
                original map files were acquired, I brought them into Blender to use as reference for measurements and
                positioning. Once again however, the level was entirely created with primitive shapes and stock Halo
                Infinite assets. The majority of props are actually primitive groups.
              </p>
              <p>
                In this release I also introduced Gun Game to Halo Infinite - a script set which keeps track of a
                player&apos;s scoring on kill to change their weapon according to the corresponding index within a
                weapon list. The scripting is included within the last section of this article.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gameplay</h2>
          <Gallery
            className="float-right"
            columnCount={1}
            imgSrcs={["/assets/gamedev/halo-infinite/junk-flea/junk-flea_7.webp"]}
          />
          <p>
            Junk Flea&apos;s primary game modes are standard types of Free for All & Team Deathmatch. Each team spawns
            within their own buildings at the beginning, and then eventually follows a dynamic spawn system across the
            map depending on threat proximity during the match. A night version was planned specifically for Quarantine
            (Infection) however due to a lack of specific nodes within Forge&apos;s script system, I had decided to put
            the night version on hold.
          </p>
          <p>
            With the introduction of my Gun Game game mode/scripts alongside the map, an alternative version supporting
            it was also released. It follows the standard Gun Game ruleset; You gain a level upon killing opponents with
            your intended weapon and lose a level through being melee&apos;d or self-inflicted death. Ammo can be
            replenished by killing an opponent with melee. The script system allows anyone to modify their own version
            in Forge simply by modifying the weapon list. Since the script is fully data-driven, score and all other
            settings automatically adjust to fit. Once a player cycles through all available weapons, they win the
            round.
          </p>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_1.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_2.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_3.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_4.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_5.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_6.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_7.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_8.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_9.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_10.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_11.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_12.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_13.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_14.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_15.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_16.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_17.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_18.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_19.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_20.webp",
            ]}
          />
        </section>
        <section>
          <h2>Scripting</h2>
          <p>
            Not specific to Junk Flea, but since it was developed alongside it I decided to include the Gun Game script
            written for its first implementation. This prefab can be imported into any map to turn them into a Gun Game
            FFA compatible map made specifically for its custom game mode I created. Weapon lists, level up, kill
            confirmation, scoring etc all handled by the script prefab.
          </p>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script1.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script2.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script3.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script4.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script5.webp",
              "/assets/gamedev/halo-infinite/junk-flea/junk-flea_script6.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
