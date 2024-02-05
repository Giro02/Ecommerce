import * as React from "react";
import Header from "../components/Header";
import Carosel from "../components/Carosel";
import Benefits from "../components/Body/Benefits";
import Foryou from "../components/Body/Foryou";
import ForYouCarousel from "../components/Body/ForYouCarousel";

const IndexPage = () => {
  return (
    <main>
      <Header></Header>
      <Carosel></Carosel>
      <div className="container">
        <Benefits></Benefits>
        <Foryou></Foryou>
        <ForYouCarousel></ForYouCarousel>
      </div>
    </main>
  );
};

export const Head = () => <title>Ecommerce</title>;

export default IndexPage;
