import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Rootlayout from "./Components/Rootlayout/Rootlayout";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Contact from "./Pages/Contact"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
