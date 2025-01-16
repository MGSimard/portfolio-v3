import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteIndex,
});

function RouteIndex() {
  return (
    <div>
      <h3>Welcome Home!</h3>
    </div>
  );
}
