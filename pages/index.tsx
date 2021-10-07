import type { NextPage } from "next";
import { Header } from "../components/Header";
import { headerData } from "../data/header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Technologies } from "../components/Technologies";
import { technologyData } from "../data/technologies";
import { Projects } from "../components/Projects";
import { projectData } from "../data/projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header data={headerData} />
      <Hero />
      <About />
      <Technologies data={technologyData} />
      <Projects data={projectData} />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
