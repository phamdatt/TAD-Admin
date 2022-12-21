import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Blogs from "./pages/Blogs";
import Customer from "./pages/Customer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders/index";
import Products from "./pages/Product";
import Settings from "./pages/Settings";
import theme from "./theme";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(true);
  const convertTheme = createTheme({
    ...theme,
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={convertTheme}>
      <CssBaseline />
      <BrowserRouter>
        {isLogged ? (
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customer />} />
              <Route path="orders" element={<Orders />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="settings" element={<Settings />} />
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
