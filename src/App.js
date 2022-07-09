import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Accueil from "./components/accueil/Accueil";
import Search from "./components/searchInput/Search";
import ProductPage from "./components/productPage/ProductPage";
import Cart from "./components/cart/Cart";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./features/slices/product/productService";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
// import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Order from "./components/order/Order";
import Admin from "./components/admin/Admin";
import UpdateProduct from "./components/admin/pages/UpdateProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Router>
        <div className="App">
          <Navigation />
          <Search />
        </div>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/admin/product" element={<UpdateProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
