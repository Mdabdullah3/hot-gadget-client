import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";
import Dicount from "../Dicount";
import Info from "../Info/Info";
import Product from "../Product/Product";
import Service from "../Service/Service";
import Reviews from "../Reviews/Reviews";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <About></About>
      <Dicount></Dicount>
      <Product></Product>
      <Categories></Categories>
      <Brands></Brands>
      <Service></Service>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
