import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Blog from "./Components/Pages/Blog/Blog";
import MyOrder from "./Components/Pages/MyOrder/MyOrder";
import NotFound from "./Components/Common/NotFound/NotFound";
import Registration from "./Components/Pages/GetStart/Registration";
import React from "react";
import LogIn from "./Components/Pages/GetStart/LogIn";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./Components/Pages/Home/ProductDetails/ProductDetails";
import AuthRequired from "./Components/Common/AuthRequired/AuthRequired";
import ManageInventory from "./Components/Pages/ManageInventories/ManageInventories";
import AddInventoryItem from "./Components/Pages/AddInventoryItem/AddInventoryItem";
import ManageItems from "./Components/Pages/ManageItems/ManageItems";
import ForgetPassword from "./Components/Pages/GetStart/ForgetPassword/ForgetPassword";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/getStart" element={<LogIn />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route
          path="/manage-inventories"
          element={
            <AuthRequired>
              <ManageInventory />
            </AuthRequired>
          }
        ></Route>
        <Route
          path="/order"
          element={
            <AuthRequired>
              <MyOrder />
            </AuthRequired>
          }
        ></Route>
        <Route
          path="/manage-item"
          element={
            <AuthRequired>
              <ManageItems />
            </AuthRequired>
          }
        ></Route>

        <Route
          path="/productDetails/:id"
          element={
            <AuthRequired>
              <ProductDetails />
            </AuthRequired>
          }
        ></Route>
        <Route
          path="/add-inventory-item"
          element={
            <AuthRequired>
              <AddInventoryItem />
            </AuthRequired>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
