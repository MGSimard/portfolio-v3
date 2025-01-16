import { createLazyFileRoute } from "@tanstack/react-router";
import { Header } from "../_components/Header";

export const Route = createLazyFileRoute("/gamedev")({
  component: RouteGamedev,
});

function RouteGamedev() {
  return (
    <>
      <Header id="header-gamedev">
        <h1>GAMEDEV PAGE</h1>
      </Header>
      <main>
        <section>
          <h2>Main Content</h2>
        </section>
      </main>
    </>
  );
}
