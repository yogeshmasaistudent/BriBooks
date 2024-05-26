import React from "react";
import Navbar from "./Componants/Navbar";
import FrontCover from "./Componants/FrontCover";
import BackCover from "./Componants/BackCover";
import Page from "./Componants/BookPage";
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
