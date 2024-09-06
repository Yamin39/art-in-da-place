/* eslint-disable react/prop-types */
import { FaSquareFull } from "react-icons/fa";
import { RxBoxModel } from "react-icons/rx";

const SectionHeader = ({title, desc}) => {
  return (
    <div className="max-w-[1440px] w-11/12 mx-auto pt-[6rem] text-center">
      <h1 className="uppercase font-josefin font-thin leading-none text-[clamp(2.25rem,1.825rem_+_2.125vw,4.375rem)]">{title}</h1>
      <p className="text-sm font-light leading-[1.875] italic">{desc}</p>

      <div className="max-w-[30.625rem] flex gap-3 items-center justify-center mx-auto py-4">
        <div className="w-full h-[0.05rem] bg-[#464646d7]"></div>
        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <RxBoxModel className="text-[#464646] rotate-45 text-3xl" />
        <FaSquareFull className="text-[#464646d7] rotate-45 text-[0.625rem]" />
        <div className="w-full h-[0.05rem] bg-[#464646d7]"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
