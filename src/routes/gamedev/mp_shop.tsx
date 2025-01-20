import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../../_components/Header";
import { Gallery } from "../../_components/Gallery";

export const Route = createFileRoute("/gamedev/mp_shop")({
  component: RouteMpShop,
});

function RouteMpShop() {
  return (
    <>
      <Header id="header-rs-mp_shop" pageTitle="LEVEL DESIGN //" detached="MP_SHOP" />
      <main>
        <section>
          <h2>mp_shop</h2>
          <div className="grid-1-2x">
            <Gallery columnCount={1} imgSrcs={["/assets/gamedev/roblox-studio/mp_shop/mp_shop_2.webp"]} />
            <div className="p-page-meta">
              <ul>
                <li>
                  <strong>Platform:</strong> Roblox Studio
                </li>
                <li>
                  <strong>Genre:</strong> FPS/TPS
                </li>
                <li>
                  <strong>Solo Project</strong>
                </li>
              </ul>
              <p>
                Circa 2020. A classic recreation of one of Soldier of Fortune II: Double Helix&apos;s (2002) most iconic
                maps, &quot;mp_shop&quot;. It was one of the more popular maps in the original game, and was the one map
                included in the base version of the game&apos;s multiplayer test demo which used to house a very large
                community. As per most other projects the motivation behind making this was purely for fun, and in this
                case was made within Roblox Studio. Apart from the helicopter model which I borrowed, everything else
                was made purely out of primitive objects, custom textures and decals.
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2>Gameplay</h2>
          <Gallery
            className="float-right"
            columnCount={1}
            imgSrcs={["/assets/gamedev/roblox-studio/mp_shop/mp_shop_12.webp"]}
          />
          <p>
            Deathmatch, Team Deatchmatch and Infiltration were the main standard game modes played on this map.
            Generally, teams would spawn on opposite ends of the map, one on the lower floor at the end of a hallway and
            the other on the helipad. Both teams would usually meet near the patio and lobby area.
          </p>
          <p>
            The map was also widely played with custom game modes, more notably the likes of Cops & Robbers, which
            included custom rulesets like decreased gravity and increased movement speed. All of which could also be
            emulated on my own version of the map within Roblox. Though not completely finished as the map still
            necessitated additional furnishing in certain areas such as the kitchen and office spaces, it still
            contained a fully functional TDM system, spawns etc. I also took artistical liberty in populating the
            helipad with an elevated area, pipes and fence as the original version was simple flat roof with an H on it.
          </p>
        </section>
        <section>
          <h2>Gallery</h2>
          <Gallery
            imgSrcs={[
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_1.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_2.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_3.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_4.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_5.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_6.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_7.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_8.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_9.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_10.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_11.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_12.webp",
              "/assets/gamedev/roblox-studio/mp_shop/mp_shop_13.webp",
            ]}
          />
        </section>
      </main>
    </>
  );
}
