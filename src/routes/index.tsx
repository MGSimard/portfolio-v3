import { createFileRoute } from "@tanstack/react-router";
import { IconFCC, IconFEM, IconGitHub, IconLinkedIn, IconX } from "../_components/Icons";

export const Route = createFileRoute("/")({
  component: RouteIndex,
});

function RouteIndex() {
  const socials = [
    { linkTo: "https://github.com/MGSimard/", icon: <IconGitHub /> },
    { linkTo: "https://twitter.com/MGSimard/", icon: <IconX /> },
    { linkTo: "https://www.linkedin.com/in/mgsimard/", icon: <IconLinkedIn /> },
    { linkTo: "https://www.freecodecamp.org/MGSimard/", icon: <IconFCC /> },
    { linkTo: "https://www.frontendmentor.io/profile/MGSimard", icon: <IconFEM /> },
  ];

  return (
    <main id="hero">
      <div id="hero-content" className="noselect">
        <h1>MGSIMARD</h1>
        <ul id="hero-socials">
          {socials.map((social) => (
            <li key={social.linkTo}>
              <a href={social.linkTo} target="_blank">
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
