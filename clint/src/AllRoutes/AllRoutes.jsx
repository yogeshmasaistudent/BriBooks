import React from "react";
import BackCover from "../Componants/BackCover";
import { Routes, Route } from "react-router-dom";
import FrontCover from "../Componants/FrontCover";
import Page from "../Componants/BookPage";
import Home from "../Componants/Home";
function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backecover" element={<BackCover />} />
        <Route path="/Frontcover" element={<FrontCover />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
