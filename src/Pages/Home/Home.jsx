import React from "react";
import Banner from "./HomeComponents/Banner";
import FlashSales from "./HomeComponents/FlashSales";
import Category from "./HomeComponents/category";
import BestSell from "./HomeComponents/BestSell";
import SalesBanner from "./HomeComponents/SalesBanner";
import NewArrival from "./HomeComponents/NewArrival";
import Service from "./HomeComponents/Service";
import ExploreProducts from "./HomeComponents/ExploreProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <FlashSales />
      <Category />
      <BestSell />
      <SalesBanner />
      <ExploreProducts />
      <NewArrival />
      <Service />
    </>
  );
};

export default Home;