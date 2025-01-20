import { IconBars } from "./Icons";

export function NavTrigger() {
  return (
    <button
      id="nav-trigger"
      type="button"
      popoverTarget="nav"
      popoverTargetAction="toggle"
      aria-label="Open Navigation">
      <IconBars />
    </button>
  );
}
