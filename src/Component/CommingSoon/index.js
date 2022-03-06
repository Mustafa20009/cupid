import React from "react";
import Logo from "../../assets/Logo.png";
import Headertext from "../../assets/Text.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Main = ({ style }) => {
  return (
    <div className="bg-[#FFC4E2] pt-5 pb-20">
      <div className=" bg-[#FFC4E2] flex justify-end container	">
        <AiOutlineTwitter size={30} className="text-white" />
        <FaDiscord size={30} className="text-white" />
      </div>
      <div
        className={` bg-[#FFC4E2] flex flex-col items-center justify-center pt-10 ${style}`}
      >
        <div>
          <img src={Logo} alt="Logo" className="h-[100px] " />
        </div>
        <div className=" pt-10 pb-10">
          <img src={Headertext} alt="Logo" className="h-[150px]" />
        </div>
        <div className="flex flex-col justify-center text-2xl items-center ">
          <p className="pb-5">COMING APRIL 2022</p>
          <div className="flex   items-center justify-center ">
            <button className="pr-[30px] border-2 border-black bg-white mr-5 pl-5 rounded-md font-bold">
              TWITTER
            </button>
            <button className="pr-[30px] border-2 border-black bg-white mr-5 pl-5 rounded-md font-bold">
              DISCORD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
