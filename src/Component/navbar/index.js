import React from "react";

function Navbar() {
  return (
    <div className="p-5 w-full flex items-center justify-between mx-auto">
      <img src="/image/4x/logo.png" className="w-60" alt="" />
      <div className="flex items-center space-x-4">
        <img src="/image/4x/instagram.png" className="w-8" alt="" />
        <img src="/image/4x/twitter.png" className="w-10" alt="" />
        <img src="/image/4x/dicord.png" className="w-10" alt="" />
      </div>
    </div>
  );
}

export default Navbar;
