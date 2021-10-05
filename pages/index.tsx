import type { NextPage } from "next";
import { Header } from "../components/Header";
import { headerData } from "../data/header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Technologies } from "../components/Technologies";
import { technologyData } from "../data/technologies";
import { Quoteblock } from "../components/Quoteblock";

const Home: NextPage = () => {
  return (
    <>
      <Header data={headerData} />
      <Hero />
      <About />
      <Technologies data={technologyData} />
      <Quoteblock />
    </>
  );
};

export default Home;
