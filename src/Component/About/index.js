import React from "react";
import Cupid from "../../assets/cupid.jpeg";
const About = ({
  header,
  detail,
  styleforFirstDiv,
  styleForSecondDiv,
  color,
  textWidth,
  headerStyle,
}) => {
  return (
    <div className={`${color ? color : "bg-pink-500"} `}>
      <div className="grid lg:p-16 md:p-10 p-5 grid-cols-12 container mx-auto  ">
        <div
          className={`lg:col-span-8  md:col-span-8 col-span-12 ${styleforFirstDiv}`}
        >
          <h1
            className={` lg:text-5xl text-4xl  font-semibold text-primary ${headerStyle}  `}
          >
            {header ? header : "About Cupid Club"}
          </h1>
          <p
            className={`${
              textWidth ? textWidth : " lg:w-[90%] md:w-[90%] w-full"
            } font-semibold text-xl pt-10  `}
          >
            {detail
              ? detail
              : "Cupid Club is a dating app owned by 10,000 NFT holders with plans to evolve into virtual dating ecosystem. The Cupid Club NFT is a 512 x 512 original digital collectible programmatically created from over 120 attributes and stored on the Ethereum blockchain. In Cupid Club, your profile can include real life photos and dating preferences. However, upon matching, users can elect to transport into different virtual environments designed for the perfect virtual first date, no cheesy first-liners and strenuous planning. If your avatars click, meet up in real life!"}
          </p>
        </div>
        <div
          className={`lg:col-span-4 md:col-span-4 col-span-12 col-span-12 md:pt-0 pt-10  ${styleForSecondDiv} `}
        >
          <img src={Cupid} alt="Cupid" className="h-[430px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
