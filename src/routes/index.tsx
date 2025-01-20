import { createFileRoute } from "@tanstack/react-router";
import { IconFCC, IconFEM, IconGitHub, IconLinkedIn, IconX } from "../_components/Icons";

export const Route = createFileRoute("/")({
  component: RouteIndex,
});

function RouteIndex() {
  const socials = [
    { linkTo: "https://github.com/MGSimard/", icon: <IconGitHub />, label: "GitHub" },
    { linkTo: "https://x.com/MGSimard/", icon: <IconX />, label: "X/Twitter" },
    { linkTo: "https://www.linkedin.com/in/mgsimard/", icon: <IconLinkedIn />, label: "LinkedIn" },
    { linkTo: "https://www.freecodecamp.org/MGSimard/", icon: <IconFCC />, label: "freeCodeCamp" },
    { linkTo: "https://www.frontendmentor.io/profile/MGSimard", icon: <IconFEM />, label: "Frontend Mentor" },
  ];

  return (
    <main id="hero">
      <div id="hero-content" className="noselect">
        <h1>MGSIMARD</h1>
        <ul id="hero-socials">
          {socials.map((social) => (
            <li key={social.linkTo}>
              <a href={social.linkTo} target="_blank" aria-label={social.label}>
                {social.icon}
                <span className="sr-only">{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
