import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./Page/HomePage";
import Main from "./Component/CommingSoon";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<HomePage />} path="/cupid" />
        <Route element={<Home />} path="/" />
        <Route element={<Main styles="min-h-[80vh]" />} path="/commingsoon" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
