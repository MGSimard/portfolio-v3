import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Nav } from "../_components/Nav";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Nav />
      <Outlet />
    </React.Fragment>
  );
}
