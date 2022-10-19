import Head from "next/head";
import type { NextPage } from "next";
import Navbar from "../components/navbar";
import Container from "../components/container";
import urlPatters from "../urls";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Youzarsiph | Yousef Abu Shanab </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar id="nav" />
      <Container>
        <main>
          <div className="rounded-xl border border-yellow-500 bg-white p-8 tracking-tighter shadow-lg">
            <h1 className="mb-8 text-5xl font-extrabold lg:text-9xl">
              Youzarsiph
            </h1>
            <p className="mb-8 text-2xl font-light">
              Hello, my name is Yousef Abu Shanab, I am a software engineer, I
              love to learn and build.
            </p>
            <div className="grid flex-col items-center gap-4 lg:flex lg:flex-row">
              <a
                role={"button"}
                className="btn btn-primary flex items-center gap-2"
                href={urlPatters["github"]}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Github
              </a>
              <a
                role={"button"}
                className="btn btn-secondary flex items-center gap-2"
                href={urlPatters["linkedin"]}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
