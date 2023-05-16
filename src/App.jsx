import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProductDetail } from "./components/ProductDetail";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { OrderHistory } from "./components/OrderHistory";
import { Admin } from "./components/Admin";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import * as settings from "../src/settings";
import { login } from "./state/user/userSlice";

import { useDispatch } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUser() {
      const user = await axios.get(`${settings.axiosURL}/me`);
      await dispatch(login(user.data));
    }
    fetchUser();
  }, []);

  return (
    <BrowserRouter>
      <Box width="100%">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          {isAuthenticated && (
            <>
              <Route path="/cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="/order-history" element={<OrderHistory />} />
            </>
          )}
          {/* {isAdmin && <Route path="/admin" element={<Admin />} />} */}
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
