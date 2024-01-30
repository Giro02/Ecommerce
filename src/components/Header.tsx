import React from "react";
import Logo from "../images/Logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    // Add Font
    <div>
      <div className="flex justify-center">
        <div className="max-w-[1120px] w-full flex justify-between items-center px-8 overflow-hidden">
          <div className="md:hidden">
            <HamburguerPhone></HamburguerPhone>
          </div>

          <img src={Logo}></img>
          <div className=" max-w-[520px] w-full hidden md:flex">
            <Procure></Procure>
          </div>
          <div className="ml-4">
            <MdOutlineShoppingCart size={38}></MdOutlineShoppingCart>
          </div>
        </div>
      </div>
      {/* MOBILE SEARCH BAR */}
      <div className="px-8 w-full flex items center justify-center md:hidden mb-4">
        <Procure></Procure>
      </div>

      {/* GREEN MENU, HIDDES IN MOBILE*/}
      <div className="h-12 bg-color-verde w-full mt-[-10px] items-center justify-center hidden md:flex">
        <div className=" flex items-center w-full max-w-[1120px] justify-between text-white px-8 ">
          <Hamburguer></Hamburguer>
          <Menu text="Queda Capilar"></Menu>
          <Menu text="Emagrecimento"></Menu>
          <Menu text="Dormir Bem"></Menu>
          <Menu text="Saúde Sexual"></Menu>
          <Menu text="Desempenho Físico"></Menu>
        </div>
      </div>
    </div>
  );
}

type ItemProps = {
  text: string;
};

export function Menu({ text }: ItemProps) {
  return (
    <div className="cursor-pointer h-full p-2 hover:bg-color-hover text-color-branco">
      {text}
    </div>
  );
}

export function Hamburguer() {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <div className="border border-color-branco w-7 rounded-md"></div>
      <div className="border border-color-branco w-7 rounded-md"></div>
      <div className="border border-color-branco w-7 rounded-md"></div>
    </div>
  );
}
export function HamburguerPhone() {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <div className="border border-color-preto w-7 rounded-md"></div>
      <div className="border border-color-preto w-7 rounded-md"></div>
      <div className="border border-color-preto w-7 rounded-md"></div>
    </div>
  );
}

export function Procure() {
  return (
    <div className="flex w-full">
      <input
        className="h-[40px] border border-color-borda w-full px-4 rounded-l-md"
        placeholder="Pesquisar na loja toda..."
      ></input>
      <button className="w-[48px] h-[40px] bg-color-verde rounded-r-md"></button>
    </div>
  );
}
