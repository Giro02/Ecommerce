import * as React from "react";
import Header from "../components/Header";
import Carosel from "../components/Carosel";
import Benefits from "../components/Body/Benefits";

const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <Carosel></Carosel>
      <Benefits></Benefits>
    </main>
  );
};

export const Head = () => <title>Oliveira Severo</title>;

export default IndexPage;
