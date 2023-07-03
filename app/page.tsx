"use client";

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

const Home = () => {
  const skills = [
    "Python",
    "Kotlin",
    "Django",
    "Django REST Framework",
    "APIs",
    "SQL",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "NextJS",
  ];

  const projects = [
    {
      name: "Snippets",
      demo: undefined,
      github: "https://github.com/youzarsiph/snippets/",
      description:
        "A social media platform for creating and sharing beautiful images of code snippets",
    },
    {
      name: "Evolution UI",
      demo: "https://youzarsiph.github.io/next-evolution/",
      github: "https://github.com/youzarsiph/next-evolution/",
      description: "React Component Library for building elegant UIs",
    },
    {
      name: "Evolution Editor",
      demo: "https://youzarsiph.github.io/evolution-editor/",
      github: "https://github.com/youzarsiph/evolution-editor/",
      description: "A basic WYSIWYG editor based on TipTap",
    },
    {
      name: "youzarsiph. github.io",
      demo: "https://youzarsiph.github.io/",
      github: "https://github.com/youzarsiph/youzarsiph.github.io/",
      description: "My Github Pages",
    },
    {
      name: "Core LMS",
      demo: undefined,
      github: "https://github.com/youzarsiph/core_lms/",
      description: "A learning management system written in python",
    },
    {
      name: "Blog",
      demo: undefined,
      github: "https://github.com/youzarsiph/blog/",
      description: "A Django blog app written in python",
    },
  ];

  return (
    <div>
      <Navbar />

      <section className="relative mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-32 2xl:mx-64">
        <main className="grid gap-12">
          <div className="card">
            <h1 id="home" className="mb-16 text-5xl font-extrabold lg:text-9xl">
              Youzarsiph
            </h1>

            <p className="mb-16 text-2xl font-light">
              Hello, my name is Yousef Abu Shanab, I am a software engineer, I
              love to learn and build.
            </p>

            <div className="grid flex-col items-center gap-4 lg:flex lg:flex-row">
              <a
                role={"button"}
                href={"https://github.com/youzarsiph/"}
                className="btn btn-primary flex items-center gap-4"
              >
                <CodeBracketIcon className="h-6 w-6" />
                Github
              </a>
              <a
                role={"button"}
                href={"https://linkedin.com/in/youzarsiph/"}
                className="btn btn-secondary flex items-center gap-4"
              >
                <UserCircleIcon className="h-6 w-6" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="card">
            <h1 className="mb-16 text-5xl font-extrabold lg:text-7xl">
              My Skills
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              {skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h1
              id="projects"
              className="mb-16 text-5xl font-extrabold lg:text-9xl"
            >
              Projects
            </h1>
            <p className="text-2xl font-light">Here is some of my projects.</p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <div key={project.name} className="card">
                <h2 className="mb-8 text-3xl font-extrabold tracking-tighter sm:text-5xl">
                  {project.name}
                </h2>
                <p className="mb-8 text-xl">{project.description}</p>
                <div className="grid items-center gap-4 lg:flex">
                  <a
                    role={"button"}
                    href={project.github}
                    className="btn btn-primary w-full"
                  >
                    Github
                  </a>
                  {project.demo !== undefined ? (
                    <a
                      role={"button"}
                      href={project.demo}
                      className="btn btn-secondary w-full"
                    >
                      Demo
                    </a>
                  ) : undefined}
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default Home;
