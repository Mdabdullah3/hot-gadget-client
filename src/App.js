import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Blog from "./components/Blog/Blog";
import Product from "./components/Product/Product";
import Reviews from "./components/Reviews/Reviews";
import Login from "./components/Login/Login/Login";
import SingUp from "./components/Login/SignUp/SingUp";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import AddReview from "./components/Reviews/AddReviews/AddReview";
import AddProducts from "./components/AddProduct/AddProducts";
import MyProducts from "./components/MyProducts/MyProducts";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/Product/ProductDetails";
import PrivateRoute from "./PrivateRoute";
const App = () => {
  AOS.init();
  return (
    <div className="min-w-full">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route
          path="/details/:productId"
          element={
            <PrivateRoute>
              <ProductDetails></ProductDetails>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SingUp></SingUp>}></Route>
        <Route
          path="/addreviews"
          element={
            <PrivateRoute>
              <AddReview></AddReview>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/addProducts"
          element={
            <PrivateRoute>
              <AddProducts></AddProducts>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myProducts"
          element={
            <PrivateRoute>
              <MyProducts></MyProducts>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default App;
