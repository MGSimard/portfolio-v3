import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { NavTrigger } from "../_components/NavTrigger";
import { Nav } from "../_components/Nav";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <NavTrigger />
      <Nav />
      <Outlet />
    </React.Fragment>
  );
}
