import * as React from "react";
import Header from "../components/Header";
import Carosel from "../components/Carosel";

const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <Carosel></Carosel>
    </main>
  );
};

export const Head = () => <title>Oliveira Severo</title>;

export default IndexPage;
