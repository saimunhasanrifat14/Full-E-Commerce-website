import React from "react";
import Header from "../../Components/CommonComponents/Header";
import Navber from "../../Components/CommonComponents/Navber";
import Footer from "../../Components/CommonComponents/Footer";
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
