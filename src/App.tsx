import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Blank from "./pages/Blank";
import Products from "./pages/Product";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { useState } from "react";
import Login from "./pages/Login";

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {isLogged ? (
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Blank />} />
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Blank />} />
              <Route path="orders" element={<Blank />} />
              <Route path="blogs" element={<Blank />} />
              <Route path="deliveries" element={<Blank />} />
              <Route path="settings" element={<Blank />} />
              <Route path="logout" element={<Blank />} />
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
