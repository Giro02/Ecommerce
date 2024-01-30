import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "../../styles/carousel.css";
import ProdData from "../../products.json";
import { IoIosArrowForward } from "react-icons/io";

const App = () => {
  return (
    <div className="flex justify-center w-full">
      <div>
        <Constructor></Constructor>
      </div>
    </div>
  );
};

export default App;

function Constructor() {
  const [selected, setSelected] = useState(0);
  const Products = ProdData.ProdsForYou;
  const [Saiba, setSaiba] = useState(null);

  const SlideElements = Products.map((product, index) => (
    <div key={index}>
      <div
        className={`rounded-xl px-4 cursor-pointer transition-all hover:shadow-2xl w-[240px] h-[500px] flex items-center justify-center flex-col mt-4 text-center`}
        onMouseEnter={() => setSaiba(index)}
        onMouseLeave={() => setSaiba(null)}
      >
        <div className=" h-[225px]">
          <img
            src={require(`../../images/Prods/${product.url}`).default}
            className="w-full h-full fill"
            alt={product.name}
          />
        </div>
        <div>
          <p className="text-[16px] text-color-preto mt-4">{product.name}</p>
        </div>
        <div className="mt-4">
          <p className="text-[13px] text-color-preto/70">{product.desc}</p>
        </div>
        <div className="mt-6">
          <p className="text-[16px] text-color-preto font-bold">
            R$ {product.price}
          </p>
        </div>
        <div
          className={`h-10 bg-color-verde w-full ${
            Saiba === index ? "flex" : "invisible "
          } items-center justify-center text-color-branco text-[16px] rounded-lg mt-4`}
        >
          Saiba Mais
        </div>
      </div>
    </div>
  ));

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });

  const onSelect = useCallback((emblaApi: any) => {
    setSelected(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (emblaApi) emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);
  console.log(selected);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="relative">
      <div className="flex max-w-[1120px] px-8 w-full overflow-hidden">
        <div className="embla w-full" ref={emblaRef}>
          <div className="embla__container flex items  gap-3 py-8 px-8">
            {SlideElements}
          </div>
        </div>
      </div>
      <div
        onClick={scrollPrev}
        className={`${
          selected === 0 ? "hidden" : "flex"
        } rounded-full w-11 h-11 text-color-preto absolute left-[-15px] top-1/2 rotate-180  -translate-y-1/2  items-center justify-center text-color-branco/90 p-1 cursor-pointer`}
      >
        <IoIosArrowForward size={25}></IoIosArrowForward>
      </div>
      <div
        onClick={scrollNext}
        className=" rounded-full w-11 h-11 text-color-preto absolute right-[-15px] top-1/2 -translate-y-1/2 flex items-center justify-center text-color-branco/90  cursor-pointer"
      >
        <IoIosArrowForward size={25}></IoIosArrowForward>
      </div>
    </div>
  );
}
