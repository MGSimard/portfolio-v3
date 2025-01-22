import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  IconBootstrap,
  IconClose,
  IconCode,
  IconCSS,
  IconFCC,
  IconFEM,
  IconGitHub,
  IconGlobe,
  IconHome,
  IconHTML,
  IconJS,
  IconLinkedIn,
  IconMail,
  IconMGS,
  IconNextJs,
  IconPin,
  IconPostgreSQL,
  IconPuzzle,
  IconReact,
  IconTS,
  IconWordpress,
  IconX,
} from "./Icons";
import { Badge } from "./Badge";

export function Nav() {
  type PopoverElement = HTMLElement & {
    showPopover?: () => void;
    hidePopover?: () => void;
  };

  const navRef = useRef<PopoverElement | null>(null);

  const links = [
    { text: "Home", linkTo: "/", icon: <IconHome /> },
    { text: "Web Development", linkTo: "/webdev", icon: <IconCode /> },
    { text: "Game Development", linkTo: "/gamedev", icon: <IconPuzzle /> },
  ];

  const socials = [
    { linkTo: "https://github.com/MGSimard/", icon: <IconGitHub />, label: "GitHub" },
    { linkTo: "https://x.com/MGSimard/", icon: <IconX />, label: "X/Twitter" },
    { linkTo: "https://www.linkedin.com/in/mgsimard/", icon: <IconLinkedIn />, label: "LinkedIn" },
    { linkTo: "https://www.freecodecamp.org/MGSimard/", icon: <IconFCC />, label: "freeCodeCamp" },
    { linkTo: "https://www.frontendmentor.io/profile/MGSimard", icon: <IconFEM />, label: "Frontend Mentor" },
  ];

  const hideNav = () => {
    navRef.current?.hidePopover();
  };

  return (
    <nav ref={navRef} id="nav" popover="auto">
      <button id="nav-close" type="button" popoverTarget="nav" popoverTargetAction="hide" aria-label="Close Navigation">
        <IconClose />
      </button>
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
          <li id="location" className="detail contact-entry">
            <IconPin />
            <span>Quebec, Canada</span>
          </li>
          <li>
            <Link to="/" className="link contact-entry">
              <IconGlobe />
              <span>mgsimard.dev</span>
            </Link>
          </li>
        </ul>
        <a href="mailto:mgsimard.dev@gmail.com" className="link-as-btn">
          <IconMail />
          Send Email
        </a>
      </div>
      <div id="bio">
        <div id="badges">
          <Badge icon={<IconHTML />} text="HTML5" />
          <Badge icon={<IconCSS />} text="CSS" />
          <Badge icon={<IconJS />} text="JavaScript" />
          <Badge icon={<IconTS />} text="TypeScript" />
          <Badge icon={<IconPostgreSQL />} text="PostgreSQL" />
          <Badge icon={<IconReact />} text="React 19" />
          <Badge icon={<IconNextJs />} text="Next.js 15" />
          <Badge icon={<IconWordpress />} text="Wordpress" />
          <Badge icon={<IconBootstrap />} text="Bootstrap" />
        </div>
        <p>Tech Stack: HTML5/CSS/JS, TypeScript, React 19, Next.js 15, Bootstrap, Wordpress, Divi, PostgreSQL.</p>
        <p>Worked professionally in Freelance QA, UI/UX and Usability Testing for web apps & video games.</p>
        <p>
          Level Designer & Environmental Artist primarily through level editors — conventionally referred to as a
          &quot;Mapper&quot;.
        </p>
      </div>
      <ul id="nav-links" className="noselect">
        {links.map((link) => (
          <li key={link.text}>
            <Link to={link.linkTo} onClick={hideNav}>
              {link.icon}
              {link.text}
            </Link>
          </li>
        ))}
        <li>
          <a href="/Marc-Olivier%20Gendron-Simard%20Resume.pdf" download="Marc-Olivier Gendron-Simard Resume.pdf">
            Download Resume
          </a>
        </li>
      </ul>
      <ul id="socials" className="noselect">
        {socials.map((social) => (
          <li key={social.linkTo}>
            <a href={social.linkTo} target="_blank" aria-label={social.label}>
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
