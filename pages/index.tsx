import type { NextPage } from "next";
import { Header } from "../components/Header";
import { headerData } from "../data/header";
import { Hero } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Header data={headerData} />
      <Hero />
    </>
  );
};

export default Home;
