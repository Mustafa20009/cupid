import React from "react";

function Footer() {
  return (
    <div className="pt-20 pb-10 w-full flex flex-col-reverse bg-[#F4E99D] items-center justify-center">
      <img src="/image/4x/logo.png" className="w-60" alt="" />
      <div className="flex items-center mb-6 space-x-4">
        <img src="/image/4x/instagram.png" className="w-8" alt="" />
        <img src="/image/4x/twitter.png" className="w-10" alt="" />
        <img src="/image/4x/dicord.png" className="w-10" alt="" />
      </div>
    </div>
  );
}

export default Footer;
