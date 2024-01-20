import React, { useCallback, useEffect, useState } from "react";
// import "../styles/carousel.css";
import img from "../images/Frame.png";
import img2 from "../images/Carousel2.png";

export default function Carosel() {
  return (
    <div className="flex flex-col">
      <img src={img}></img>
      <img src={img2}></img>
    </div>
  );
}
