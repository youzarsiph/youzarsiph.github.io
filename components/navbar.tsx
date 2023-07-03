import React from "react";
import Link from "next/link";
import {
  Bars2Icon,
  CodeBracketIcon,
  HomeIcon,
  RectangleGroupIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Nav = (props: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <header className="mb-8">
      <nav className="navbar">
        <div className="flex w-full items-center justify-between gap-4 px-4 lg:w-auto">
          <span className="font-mono text-2xl font-semibold lg:flex">
            <Link href={"#home"}>Youzarsiph</Link>
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setOpen(!open)}
              className="navbar-toggle"
            >
              {open ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars2Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <ul className={`navbar-menu${open ? " flex" : ""}`}>
            {props.children}
          </ul>
        </div>
      </nav>
    </header>
  );
};

const NavItem = (props: { children: React.ReactNode }) => (
  <li className={`navbar-item`}>{props.children}</li>
);

const Navbar = () => (
  <Nav>
    <NavItem>
      <HomeIcon className="h-6 w-6" />
      <Link href={"#home"}>Home</Link>
    </NavItem>
    <NavItem>
      <RectangleGroupIcon className="h-6 w-6" />
      <Link href={"#projects"}>Projects</Link>
    </NavItem>
    <NavItem>
      <CodeBracketIcon className="h-6 w-6" />
      <a href={"https://github.com/youzarsiph/"}>Github</a>
    </NavItem>
    <NavItem>
      <UserCircleIcon className="h-6 w-6" />
      <a href={"https://linkedin.com/in/youzarsiph/"}>LinkedIn</a>
    </NavItem>
  </Nav>
);

export default Navbar;
