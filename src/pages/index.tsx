import * as React from "react";
import Header from "../components/Header";
import Carosel from "../components/Carosel";
import Benefits from "../components/Body/Benefits";
import Foryou from "../components/Body/Foryou";
import Products from "../components/Body/Products";

const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <Carosel></Carosel>
      <Benefits></Benefits>
      <Foryou></Foryou>
      <Products></Products>
    </main>
  );
};

export const Head = () => <title>Ecommerce</title>;

export default IndexPage;
