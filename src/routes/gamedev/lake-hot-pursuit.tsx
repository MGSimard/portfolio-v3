import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/lake-hot-pursuit")({
  component: RouteLakeHotPursuit,
});

function RouteLakeHotPursuit() {
  return (
    <>
      <Header id="header-halo-lake-hot-pursuit" pageTitle="LEVEL DESIGN //" detached="LAKE HOT PURSUIT" />
      <main>
        <section>
          <h2>LAKE HOT PURSUIT</h2>
          <div className="grid-1-2x">
            <Gallery
              columnCount={1}
              imgSrcs={["/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_1.webp"]}
            />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Halo Infinite Forge
                </li>
                <li>
                  <strong>Genre:</strong> Hot Pursuit, Cops & Robbers, Racing
                </li>
                <li>
                  <strong>Solo Project</strong>
                </li>
              </ul>
              <p>
                Hot Pursuit map - main road around the lake with subroutes in the center connecting various islets and
                shores. Unfortunately no terrain tool in Forge, so all built from individual Halo assets, terrain and
                rock pieces.
              </p>
              <p>
                &quot;Lake Hot Pursuit&quot; is based on a mix between the original Need for Speed Hot Pursuit mode and
                its Halo recreations over the years. The project began as a simple &quot;I&apos;ll show you how to do
                this properly&quot; after experiencing the existing variants in Halo Infinite. One thing led to another,
                which eventually ended up becoming a feature-complete mode played by thousands since its creation.
              </p>
              <p>
                The map received 300 bookmarks and 500 plays at a 4.7 rating within the first week of beta testing - as
                of 2025, it stands at over 52,000 play counts, 4,700 bookmarks and 4.5/5* rating over 339 votes. The
                development process was publicly documented within the Forgehub Discord&apos;s WIP section. From April
                2024 onwards, the map was &quot;unlocked&quot; for other users to fork, study and iterate upon for their
                own versions. Across all its variations it garnered over 100,000 plays, solidifying itself as one of the
                most popular custom map & mode in Halo Infinite&apos;s lifetime.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gameplay</h2>
          <Gallery
            className="float-right"
            columnCount={1}
            imgSrcs={["/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_2.webp"]}
          />
          <p>
            The objective is for cops to chase, and ultimately catch, robbers in order to arrest them. Doing so can be
            accomplished by either running them off the road into the lake, boxing them in and hijacking them to arrest
            them, or leaving them stranded to the 10 second death timer. Robbers who are arrested change sides -
            otherwise must survive for a set amount of time.
          </p>
          <p>
            The main differing factor between what I would consider to be the most feature-complete Hot Pursuit mode
            ever made for Halo and its predecessors, is that it specifically goes out of its way to limit gameplay to
            vehicles only while also giving a little bit of space for on-foot transitions between vehicle grabs. Past
            variants also strictly rely on pushing robbers off the road, whereas my version also allows cops to directly
            interact with the robbers by pulling them out of their vehicles and arresting them manually.
          </p>
          <p>
            I ensured advantages on both sides depending on which part of the terrain they drive on, whether it be the
            tight spaces favouring the robbers&apos; mongooses or the cops&apos; superior top speed on straight lines.
            The map has multiple intersecting sections which reward skilled navigation.
          </p>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_1.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_2.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_3.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_4.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_5.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_6.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_7.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_8.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_9.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_10.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_11.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_12.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_13.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_14.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_15.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_16.webp",
            ]}
          />
        </section>
        <section>
          <h2>Scripting</h2>
          <p>
            After a few different scripting and game mode iterations, a heavy modification of the new infection game
            mode was opted for. Multiple scripts were set up in order achieve the very specific vision I had for the Hot
            Pursuit game mode. Round grace giving a small time cushion for robbers to get ready and depart, forcing
            players to remain in vehicles, allowing cops to arrest robbers through manual hijacking over their vehicles,
            player traits etc. All can be seen within the scripting album which follows.
          </p>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script1.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script2.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script3.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script4.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script5.webp",
              "/assets/gamedev/halo-infinite/lake-hot-pursuit/lake-hot-pursuit_script6.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
