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
                className="btn btn-primary"
                href={urlPatters["github"]}
              >
                Github
              </a>
              <a
                role={"button"}
                className="btn btn-secondary"
                href={urlPatters["linkedin"]}
              >
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
