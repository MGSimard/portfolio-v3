import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/station-58")({
  component: RouteStation58,
});

function RouteStation58() {
  return (
    <>
      <Header id="header-tu-station-58" pageTitle="LEVEL DESIGN //" detached="STATION 58" />
      <main>
        <section>
          <h2>Station 58</h2>
          <div className="grid-1-2x">
            <Gallery columnCount={1} imgSrcs={["/assets/gamedev/tower-unite/station-58/station-58_2.webp"]} />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Tower Unite
                </li>
                <li>
                  <strong>Genre:</strong> Escape Room, Puzzle, Horror
                </li>
                <li>
                  <strong>Solo Project - In Progress</strong>
                </li>
              </ul>
              <p>
                Station 58 is a puzzle/escape room level created in Tower Unite&apos;s condo editor. After a save file
                corruption of an initial project with multiple puzzle games, I decided to build this escape room type
                project. It features a couple of different puzzle mechanics and a complete story throughout the level. I
                also intertwined plot and video elements from an Analog Horror youtube channel titled &quot;Local
                58&quot;.
              </p>
              <p>
                After hitting a block regarding one of the final rooms, I decided to take a break and head back to Halo
                Infinite&apos;s Forge tool to create &quot;Lake Hot Pursuit&quot; -- this project has been on-hold ever
                since, however I do plan on finishing it eventually.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gameplay</h2>

          <Gallery
            className="float-right"
            columnCount={1}
            imgSrcs={["/assets/gamedev/tower-unite/station-58/station-58_15.webp"]}
          />
          <p>
            The puzzle mechanics presented within the level are fairly simple. I still went out of my way to learn about
            a couple of concepts regarding escape rooms, one of the most important being the idea of &apos;Lock before
            key&apos;. That is to say, you should present the problem to your player prior to giving them the tools to
            solve said problem. Otherwise if you give a key before the lock, the player will attempt to use the key on
            every lock, rather than depend on problem-solving skills. This also entertains the idea of a
            &apos;Eureka&apos; moment similarly to what you would find in a Metroidvania, where the player suddenly
            thinks &apos;Oh, I can use this new tool for that one thing earlier!&apos; after acquiring said tool.
          </p>
          <p>
            The mechanics will be explained further within each section below. Do keep in mind that this very much still
            is a work-in-progress.
          </p>
        </section>
        <section>
          <h2>Section 1: Story Setting</h2>
          <Gallery
            className="float-left"
            columnCount={1}
            imgSrcs={["/assets/gamedev/tower-unite/station-58/station-58_2.webp"]}
          />
          <p>
            Immediately upon arriving within the condo, players are guided to the first room. They are presented with a
            fairly obvious keypad. Attempting to interact with said keypad reinforces the suggestion that it requires a
            code, and that it should be opened. On the table, illuminated by a lamp, lies a book which players can read
            in order to situate themselves with their environment, and get a clue on how to proceed.
          </p>
          <p>
            From there, the players should seek to get helpful materials from within one of the lockers, as well as a
            cassette tape which they can play on the computer/media player on the desk. Watching the video in turns
            enables a trigger near a poster which is made obvious by the contents and messages of the video they&apos;ve
            watched. Approaching said poster reveals the code for the locked keypad.
          </p>
        </section>
        <section>
          <h2>Section 2: Finding Objects</h2>
          <Gallery
            className="float-left"
            columnCount={1}
            imgSrcs={["/assets/gamedev/tower-unite/station-58/station-58_3.webp"]}
          />
          <p>
            After passing the first room, it is made obvious that the following challenge requires the player to find
            specific key objects in order to open the garage door at the end of the room. As a placeholder, I had been
            using red balls. Some are hidden at different heights, other placed within boxes or behind other objects.
          </p>
        </section>
        <section>
          <h2>Section 3: Cross-Room Interactions</h2>
          <Gallery
            className="float-left"
            columnCount={2}
            imgSrcs={[
              "/assets/gamedev/tower-unite/station-58/station-58_4.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_5.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_6.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_7.webp",
            ]}
          />
          <p>
            This section has the player interact with three different rooms at once over a slightly longer distance and
            back-and-forth.
          </p>
          <p>
            They&apos;re presented with a locked door, a secured airlock and the lobby where they may find a keycard
            which allows them to access the control room. Would the condo editor have such advanced features, the main
            idea would be to have an interactive scene play out to help set the tone - something that would feel a
            little bit like what you&apos;d find in &quot;Outlast&quot;.
          </p>
        </section>
        <section>
          <h2>Section 4: The Control Room</h2>
          <Gallery
            className="float-left"
            columnCount={1}
            imgSrcs={["/assets/gamedev/tower-unite/station-58/station-58_10.webp"]}
          />
          <p>
            Should the player be capable of solving a fairly simple puzzle within this room, they&apos;d soon find
            themselves having to make a run for the airlock as its access is time limited when unlocked.
          </p>
        </section>
        <section>
          <h2>Section 5: The Laboratory</h2>
          <Gallery
            className="float-left"
            columnCount={2}
            imgSrcs={[
              "/assets/gamedev/tower-unite/station-58/station-58_11.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_13.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_14.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_16.webp",
            ]}
          />
          <p>
            This specific area is sectioned into three different sub puzzles. The first room requires you to decypher a
            symbol to number code on the keypad by finding its relevant clues around the room. The second requires you
            to be attentive to bloodtrails in the room, along with remembering some very blatant information which was
            communicated near the beginning of the level, and the third gives you an idea of where you have to go in
            order to progress within the level as your access is blocked by a broken door access panel.
          </p>
          <p>
            This section also contains an interactive scene once players finish reading a book which clues them into
            entering the now unlocked admin room in the laboratory. After flickering, the lights turn to red and a
            menacing set of sounds play as a the doors lock and a monster briefly appears at the end of the lab. Shortly
            after the situation returning to normal, the doors unlock themselves and the way to the admin room is
            opened, where the player is then guided to return to the control room to enter through the ventilation
            shaft.
          </p>
        </section>
        <section>
          <h2>Section 6: The Vent Maze</h2>
          <Gallery
            className="float-left"
            columnCount={1}
            imgSrcs={["/assets/gamedev/tower-unite/station-58/station-58_21.webp"]}
          />
          <p>
            Fairly simple section, slightly confusing maze which eventually leads you to the area behind the broken
            door.
          </p>
        </section>
        <section>
          <h2>Section 7: Moment of Respite</h2>
          <Gallery
            className="float-left"
            columnCount={1}
            imgSrcs={["/assets/gamedev/tower-unite/station-58/station-58_23.webp"]}
          />
          <p>
            Once the player finds themselves on the other side of the door, they have to walk through an uneventful
            hallway which is where I&apos;d generally have some kind of advanced piece of content made for storytelling.
          </p>
        </section>
        <section>
          <h2>Section 7: The Experimental Room</h2>
          <Gallery
            className="float-left"
            columnCount={2}
            imgSrcs={[
              "/assets/gamedev/tower-unite/station-58/station-58_24.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_26.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_28.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_29.webp",
            ]}
          />
          <p>
            At a point this room was supposed to be much smaller, or at least slightly more compact with different
            accessible areas. However the scope got a little large, and that was the point at which I couldn&apos;t
            quite make up my mind with what the room should be like, considering the limited options offered by the
            condo editor. I had decided to put the room on-hold and start working on the rest of the map.
          </p>
        </section>
        <section>
          <h2>Section X: The Inbetween</h2>
          <Gallery
            className="float-left"
            columnCount={2}
            imgSrcs={[
              "/assets/gamedev/tower-unite/station-58/station-58_31.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_32.webp",
            ]}
          />
          <p>
            From that point forward, I focused on adding a few smaller story-driven sections leading up to the ending of
            the condo. From an interactive scene to a claustrophobic janitor closet, ultimately leading to the ending
            sequence in the section below.
          </p>
        </section>
        <section>
          <h2>Section X: The Ending</h2>
          <Gallery
            className="float-left"
            columnCount={2}
            imgSrcs={[
              "/assets/gamedev/tower-unite/station-58/station-58_33.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_34.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_35.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_36.webp",
            ]}
          />
          <p>
            After falling through the world when they player believed they would make a successful escape, wondering why
            they had been getting deeper and deeper into the facility, the player is frozen in placed forced to stare
            down a long hallway. A few interactive triggers happen here, until the player is the quickly sent down the
            hallway to a set of doors, the doors are opened and the player snaps back to the beginning of the level
            while keeping the same momentum and doors opening. The player is pushed through the exit, where the entity
            wanted them. They take damage, and the gigantic unnerving moon appears in the sky as a line of what seem to
            be lifeless &quot;people&quot; welcomes the player amongst them.
          </p>
          <p>
            All in all, despite the clear limitations set forward by the primitive level of tower unite&apos;s condo
            editing tool, I do hope to eventually revisit this condo in order to finish it completely, host playthrough
            sessions of it and release it on the Steam workshop in time. The Tower Unite development team actually
            showed up and played through the level while I was AFK and forgot to lock the condo while working on it, I
            was pretty surprised to find out they had actually enjoyed it very much despite its unfinished and
            unpolished state.
          </p>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/tower-unite/station-58/station-58_1.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_2.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_3.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_4.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_5.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_6.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_7.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_8.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_9.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_10.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_11.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_12.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_13.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_14.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_15.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_16.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_17.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_18.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_19.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_20.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_21.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_22.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_23.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_24.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_25.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_26.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_27.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_28.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_29.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_30.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_31.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_32.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_33.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_34.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_35.webp",
              "/assets/gamedev/tower-unite/station-58/station-58_36.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
