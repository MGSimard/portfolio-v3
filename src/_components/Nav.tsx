import { Link } from "@tanstack/react-router";
import {
  IconCode,
  IconFCC,
  IconFEM,
  IconGitHub,
  IconGlobe,
  IconHome,
  IconLinkedIn,
  IconMail,
  IconMGS,
  IconPin,
  IconPuzzle,
  IconX,
} from "./Icons";

export function Nav() {
  const links = [
    { text: "Home", linkTo: "/", icon: <IconHome /> },
    { text: "Web Development", linkTo: "/webdev", icon: <IconCode /> },
    { text: "Game Development", linkTo: "/gamedev", icon: <IconPuzzle /> },
  ];

  const socials = [
    { linkTo: "https://github.com/MGSimard/", icon: <IconGitHub /> },
    { linkTo: "https://x.com/MGSimard/", icon: <IconX /> },
    { linkTo: "https://www.linkedin.com/in/mgsimard/", icon: <IconLinkedIn /> },
    { linkTo: "https://www.freecodecamp.org/MGSimard/", icon: <IconFCC /> },
    { linkTo: "https://www.frontendmentor.io/profile/MGSimard", icon: <IconFEM /> },
  ];

  return (
    <nav>
      <div id="author">
        <Link to="/" id="author-logo">
          <IconMGS />
        </Link>
        <div id="author-info">
          <span id="author-name">MGSimard</span>
          <span id="author-tagline" className="detail">
            Multidisciplinary Developer & Artist
          </span>
        </div>
      </div>
      <div id="contact">
        <ul>
          <li id="location" className="detail">
            <IconPin />
            Quebec, Canada
          </li>
          <li>
            <Link to="/" className="link">
              <IconGlobe />
              mgsimard.pages.dev
            </Link>
          </li>
        </ul>
        <button type="button" className="btn-secondary">
          <IconMail />
          Send Email
        </button>
      </div>
      <div id="bio">
        <p>
          <strong>
            Tech Stack: HTML5/CSS3/JS(ES6+), TypeScript, React 19, Next.js 15, Bootstrap, Wordpress, Divi, PostgreSQL.
          </strong>
        </p>
        <p>Worked professionally in Freelance QA, UI/UX and Usability Testing for web apps & video games.</p>
        <p>
          Level Designer & Environmental Artist primarily through level editors — conventionally referred to as a
          &quot;Mapper&quot;.
        </p>
      </div>
      <ul id="nav-links" className="noselect">
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.linkTo}>
              {link.icon}
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <a href="#" download="Marc-Olivier Gendron-Simard Resume.pdf">
            Download Resume
          </a>
        </li>
      </ul>
      <ul id="socials" className="noselect">
        {socials.map((social) => (
          <li key={social.linkTo}>
            <a href={social.linkTo} target="_blank">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
