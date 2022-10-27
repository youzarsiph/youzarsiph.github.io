import Head from "next/head";
import type { NextPage } from "next";
import Card from "../components/card";
import Nav from "../components/navbar";
import Container from "../components/container";

const Projects: NextPage = () => {
  let projects = [
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
      demo: "https://youzarsiph.github.io/core_lms/",
      github: "https://github.com/youzarsiph/core_lms/",
      description: "A learning management system written in python",
    },
    {
      name: "JApp",
      demo: "https://youzarsiph.github.io/JApp/",
      github: "https://github.com/youzarsiph/JApp/",
      description: "How I write Django apps",
    },
    {
      name: "Blog",
      demo: "https://youzarsiph.github.io/blog/",
      github: "https://github.com/youzarsiph/blog/",
      description: "A reusable blogging app written in python",
    },
  ];

  return (
    <div>
      <Head>
        <title>Youzarsiph | Projects </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <Container>
        <main>
          <Card>
            <h1 className="mb-8 text-5xl font-extrabold lg:text-9xl">
              Projects
            </h1>
            <p className="mb-8 text-2xl font-light">
              Here is some of my projects.
            </p>
          </Card>
          <div className="mb-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {projects.map((project) => {
              return (
                <Card key={project.name}>
                  <h2 className="mb-8 text-3xl font-extrabold tracking-tighter sm:text-5xl">
                    {project.name}
                  </h2>
                  <p className="mb-8 text-xl">{project.description}</p>
                  <div className="grid items-center gap-4 lg:flex">
                    <a
                      role={"button"}
                      href={project.github}
                      className="btn btn-primary"
                    >
                      Github
                    </a>
                    <a
                      role={"button"}
                      href={project.demo}
                      className="btn btn-secondary"
                    >
                      Demo
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Projects;
