import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/overdose")({
  component: RouteOverdose,
});

function RouteOverdose() {
  return (
    <>
      <Header id="header-halo-overdose" pageTitle="LEVEL DESIGN //" detached="OVERDOSE" />
      <main>
        <section>
          <h2>Overdose</h2>
          <div className="grid-1-2x">
            <Gallery columnCount={1} imgSrcs={["/assets/gamedev/halo-infinite/overdose/overdose_1.webp"]} />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Halo Infinite Forge
                </li>
                <li>
                  <strong>Genre:</strong> Infection
                </li>
                <li>
                  <strong>Solo Project</strong>
                </li>
              </ul>
              <p>
                Overdose is a recreation of{" "}
                <a href="https://combatarms.fandom.com/wiki/Overdose" target="_blank" className="link">
                  Combat Arms&apos; original map
                </a>
                , using Halo Infinite&apos;s UGC tool, &quot;Forge&quot;. The level was entirely built using primitive
                shapes & Halo Infinite&apos;s stock assets over the course of a month (~300 hours). References for the
                project were numerous different Youtube videos showcasing gameplay of the map (Unlike Junk Flea, where a
                more precise and complex process was used—explained in more detail within its own section below).
              </p>
              <p>
                For this specific level, a collection of scripts were scripted using Forge&apos;s built-in node
                scripting system called Script Brain. Examples of the developed systems can be found further below in
                the article.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gameplay</h2>

          <Gallery
            className="float-right"
            columnCount={1}
            imgSrcs={["/assets/gamedev/halo-infinite/overdose/overdose_5.webp"]}
          />
          <p>
            Supported by the scripts shown in in the scripting section, the basis of this map + game mode combo is for
            Survivors to outlive the infected. They can accomplish this objective either by surviving until the
            round&apos;s end, or by exterminating all of the infected. The infected are chosen at random at the start of
            every round, and those Alpha infected eventually turn after a short grace period. Unlike Vanilla Halo
            infection where infection forces a respawn, I&apos;ve scripted a system which dynamically infects players
            where they stand to simulate Combat Arms&apos; Quarantine mode. This instills paranoia and lack of trust in
            each player during pre-round, while also groups to split evenly throughout the map until the infected are
            turned.
          </p>
          <p>
            The map contains defensible areas, several hiding spots and obstacles which the survivors can utilize in
            order to get away from the infected, or even set up traps. Once there is 70 seconds left to the round, a 10
            second alert rings which then leads to saferooms unlocking. If survivors can manage to reach those rooms,
            they can be locked from within to aid in surviving the last minute of the round. If enough infected are
            still standing, fortifications can be broken through with relative ease - so it&apos;s a decent idea to
            ensure that you have enough explosives saved for them.
          </p>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/overdose/overdose_1.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_2.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_3.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_4.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_5.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_6.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_7.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_8.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_9.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_10.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_11.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_12.webp",
            ]}
          />
        </section>
        <section>
          <h2>Scripting</h2>
          <p></p>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/overdose/overdose_script1.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_script2.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_script3.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_script4.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_script5.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_script6.webp",
              "/assets/gamedev/halo-infinite/overdose/overdose_script7.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
