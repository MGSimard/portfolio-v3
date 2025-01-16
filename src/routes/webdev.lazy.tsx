import { createLazyFileRoute } from "@tanstack/react-router";
import { Header } from "../_components/Header";

export const Route = createLazyFileRoute("/webdev")({
  component: RouteWebdev,
});

function RouteWebdev() {
  return (
    <>
      <Header id="header-webdev">
        <h1>WEBDEV PAGE</h1>
      </Header>
      <main>
        <section>
          <h2>Main Content</h2>
        </section>
      </main>
    </>
  );
}
