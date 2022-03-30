import React from "react";

const RoadMap = () => {
  return (
    <div className="bg-[#FFC4E2] md:p-16 p-5 font-bold  ">
      <div className="container mx-auto  ">
        <h1 className="text-5xl font-bold text-primary">Roadmap</h1>
        <p className="pt-10 font-bold text-lg">
          We want to build a vibrant community of singles seeking meaningful
          connections.
        </p>
      </div>
      <div className="container mx-auto text-lg ">
        <p className="font-bold  ">
          For that reason,we plan to focus on IRL community events and
          developers relationships to create the most exciting dating landscape
        </p>
      </div>
      <div className="pt-2 container mx-auto text-lg">
        <p>
          We anticipate our roadmap to be greatly influenced by the community.
          so we 've outlined broader objectives
        </p>
        <ol className="list-decimal pt-5 list-inside text-lg">
          <li>Launch the Cupid Club NFT</li>
          <li>Launch the matchmaking app for immediate use</li>
          <li>Launch the metaverse cupid ecosystem</li>
          <li>Issue the $LUV token</li>
          <li>Expand developer relations</li>
          <li>City to City IRL (inreal life) events </li>
        </ol>
      </div>
    </div>
  );
};

export default RoadMap;
