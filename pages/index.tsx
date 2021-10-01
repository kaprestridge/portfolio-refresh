import type { NextPage } from "next";
import { Header } from "../components/Header";
import { headerData } from "../data/header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <Header data={headerData} />
      <Hero />
      <About />
    </>
  );
};

export default Home;
