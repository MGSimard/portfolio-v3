import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: RouteAbout,
});

function RouteAbout() {
  return <div>Hello from About!</div>;
}
