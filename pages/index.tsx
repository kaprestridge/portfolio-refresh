import type { NextPage } from "next";
import { Header } from "../components/Header";
import { headerData } from "../data/header";

const Home: NextPage = () => {
  return (
    <>
      <Header data={headerData} />
    </>
  );
};

export default Home;
