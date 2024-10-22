import React, { useContext } from "react";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import Header from "./components/header/Header";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Profile from "./pages/profile/Profile";
import Blog from "./pages/blog/Blog";
import Favorite from "./pages/favorite/Favorite";
import ProductDetailsPage from "./components/product-details-page/ProductDetailsPage";
import NotFound from "./pages/not-found/NotFound";
import LoginForm from "../../client/src/components/login-form/LoginForm";
import Toast from "./components/toast-message/Toast";
import CategoryDetails from "./components/category-details/CategoryDetails";

function App() {
  return (
    <>
      <main>
        <Toast bottomRight="bottom-right" />
        <ScrollRestoration />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<LoginForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/category/:id" element={<CategoryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
