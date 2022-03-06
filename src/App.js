import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/Home";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
