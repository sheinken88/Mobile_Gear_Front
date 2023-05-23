import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home/Home";
import { ProductDetail } from "./components/Product/ProductDetail";
import { Cart } from "./components/Cart/Cart";
import { Checkout } from "./components/Checkout";
import { OrderHistory } from "./components/OrderHistory";
import { Admin } from "./components/Admin/Admin";
import { History } from "./components/History";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
import { AddProducts } from "./components/Admin/AddProducts";
import { EditProducts } from "./components/Admin/EditProducts";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import * as settings from "../src/settings";
import { login } from "./state/user/userSlice";

import { useDispatch } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const is_admin = useSelector((state) => state.user.is_admin);
  const userData = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchUser() {
      const user = await axios.get(`${settings.axiosURL}/users/me`);
      await dispatch(login(user.data));
    }
    fetchUser();
  }, []);

  return (
    <>
      {" "}
      <Helmet>
        <title>Mobilegear</title>
      </Helmet>
      <BrowserRouter>
        <Box width="100%">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/history" element={<History />} />
            <Route path="/products" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            {isAuthenticated && (
              <>
                <Route path="/cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="/order-history" element={<OrderHistory />} />
              </>
            )}
            {is_admin && (
              <>
                <Route path="/admin" element={<Admin />} />
                {/* <Route path="/admin/add-product" element={<AddProducts />} />
              <Route path="/admin/add-edit" element={<EditProducts />} /> */}
              </>
            )}
          </Routes>
          <Footer />
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
