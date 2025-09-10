import React from "react";
import Banner from "../Components/HomeComponents/Banner";
import FlashSales from "../Components/HomeComponents/FlashSales";
import Category from "../Components/HomeComponents/category";
import BestSell from "../Components/HomeComponents/BestSell";
import SalesBanner from "../Components/HomeComponents/SalesBanner";
import NewArrival from "../Components/HomeComponents/NewArrival";

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSales />
      <Category />
      <BestSell />
      <SalesBanner />
      <NewArrival />
    </>
  );
};

export default Home;