import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Rootlayout from "./Components/Rootlayout/Rootlayout";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
