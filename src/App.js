import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Common/Footer/Footer";
import Header from "./Components/Common/Header/Header";
import Home from "./Components/Pages/Home/Home";
import Shop from "./Components/Pages/Shop/Shop";
import Inventory from "./Components/Pages/Inventory/Inventory"
import MyOrder from "./Components/Pages/MyOrder/MyOrder";
function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/order" element={<MyOrder />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
