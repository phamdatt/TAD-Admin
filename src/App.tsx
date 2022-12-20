import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/Product";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useState } from "react";
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import Orders from "./pages/Orders/index";
import Blogs from "./pages/Blogs";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isLogged ? (
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customer />} />
              <Route path="orders" element={<Orders />} />
              <Route path="blogs" element={<Blogs />} />
            </Route>
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
