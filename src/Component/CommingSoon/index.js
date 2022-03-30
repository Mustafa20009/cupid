import React from "react";
import Logo from "../../assets/Logo.png";
import Headertext from "../../assets/Text.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Main = ({ styles }) => {
  return (
    <div className="bg-[#FFC4E2] pt-5 min-h-screen ">
      <div className=" bg-[#FFC4E2] flex justify-end container	">
        <AiOutlineTwitter size={30} className="text-white" />
        <FaDiscord size={30} className="text-white" />
      </div>
      <div
        className={` bg-[#FFC4E2] flex flex-col items-center justify-center p-5 pt-10 ${styles}`}
      >
        <div>
          <img src={Logo} alt="Logo" className="lg:h-[80px] md:h-[50px] " />
        </div>
        <div className=" pt-10 pb-10">
          <img
            src={Headertext}
            alt="Logo"
            className="lg:h-[150px] md:h-[100px]"
          />
        </div>
        <div className=" flex flex-col justify-center  text-2xl items-center ">
          <p className="pb-5">COMING APRIL 2022</p>
          <div className="  flex  items-center justify-center ">
            <button className="pr-[15px] pl-[15px] border-2 border-black bg-white   rounded-md font-bold">
              TWITTER
            </button>
            <button className="pr-[15px] pl-[15px] border-2 border-black bg-white ml-1  rounded-md font-bold">
              DISCORD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
