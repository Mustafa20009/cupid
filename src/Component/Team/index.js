import React from "react";

const Team = () => {
  return (
    <div className="grid grid-cols-12  gap-10  container mx-auto p-16">
      <h1 className="font-semibold text-5xl col-span-12 ">Team</h1>

      <div className="md:col-span-4 col-span-12 rounded-full border-solid border-4 border-primary h-[300px] w-[300px]  "></div>
      <div className="md:col-span-4 col-span-12 rounded-full border-solid border-4 border-primary h-[300px] w-[300px] "></div>
      <div className="md:col-span-4 col-span-12 rounded-full border-solid border-4 border-primary h-[300px] w-[300px] "></div>
    </div>
  );
};

export default Team;
