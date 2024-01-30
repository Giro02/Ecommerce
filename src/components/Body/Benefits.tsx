import React from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";

export default function Benefits() {
  return (
    // Add Font
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1120px] px-8 flex justify-between gap-4">
        <div className="cursor-pointer w-full max-w-[310px]">
          <CreateBenefits
            Title="Politica de Entrega"
            Description="* Consulte condições"
            Icon={<FaTruckArrowRight size={32} />}
          ></CreateBenefits>
        </div>

        <CreateBenefits
          Title="Seu Melhor Encapsulado"
          Description="Com o Melhor Preço"
          Icon={<FaMoneyBillWave size={32} />}
        ></CreateBenefits>
        <CreateBenefits
          Title="Site Seguro"
          Description="Suas Informações Estão Protegidas"
          Icon={<BiSolidLock size={32} />}
        ></CreateBenefits>
      </div>
    </div>
  );
}

type ItemProps = {
  Title: string;
  Description: string;
  Icon: React.ReactNode;
};

function CreateBenefits({ Title, Description, Icon }: ItemProps) {
  return (
    // Add Font
    <div className="hidden sm:flex w-full max-w-[310px]">
      <div className="w-full py-4 h-[150px] text-center md:text-left md:h-[70px] border border-color-borda px-4 rounded-xl flex flex-col md:flex-row items-center text-color-preto gap-4 mt-8">
        <div className="text-color-verde"> {Icon}</div>
        <div className="w-full">
          <div className="font-bold text-[13px] ">{Title}</div>
          <div className=" text-[11px]">{Description}</div>
        </div>
      </div>
    </div>
  );
}
