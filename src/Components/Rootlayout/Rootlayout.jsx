import React from "react";
import Header from "../../CommonComponents/Header";
import Navber from "../../CommonComponents/Navber";
import Footer from "../../CommonComponents/Footer";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <div>
        <div className="">
          <div>
            <Header />
          </div>
          <div>
            <Navber />
          </div>
        </div>
        <div className="">
          <Outlet />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rootlayout;
