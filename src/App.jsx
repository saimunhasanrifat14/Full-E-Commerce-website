import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Rootlayout from "./Components/Rootlayout/Rootlayout";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp"
import Login from "./Pages/Login/Login"
import Contact from "./Pages/Contact/Contact"
import About from "./Pages/About/About"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
