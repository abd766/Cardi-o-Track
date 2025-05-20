import React from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import "./index.css";
const App = () => {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
      <div className="flex flex-col w-full min-h-screen">
        <div className="flex-1 max-w-screen-2xl pt-[70px] mx-auto w-full">
        <Routes>
          <Route element={<About />} path={"/about"} />
          <Route element={<Home />} path={"/home"} />
          <Route element={<Services />} path={"/services"} />
          <Route element={<CheckUp />} path={"/checkup"} />
          <Route element={<ModelAnalysis />} path={"/analysis"} />
        </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
