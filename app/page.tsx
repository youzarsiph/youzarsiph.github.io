"use client";

import React from "react";
import { CodeBracketIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Badge from "@/components/badge";
import Card from "@/components/card";
import Container from "@/components/container";
import Nav from "@/components/navbar";

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
      <Nav />

      <Container>
        <main className="grid gap-12">
          <Card>
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
          </Card>

          <Card>
            <h1 className="mb-16 text-5xl font-extrabold lg:text-7xl">
              My Skills
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </Card>

          <Card>
            <h1
              id="projects"
              className="mb-16 text-5xl font-extrabold lg:text-9xl"
            >
              Projects
            </h1>
            <p className="text-2xl font-light">Here is some of my projects.</p>
          </Card>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.name}>
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
              </Card>
            ))}
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
