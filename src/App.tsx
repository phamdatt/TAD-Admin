import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { darkTheme, lightTheme } from "./contants/configTheme";
import { localStorageKeys } from "./contants/localStorageKeys";
import { ColorSchemeContext } from "./context/ThemeContext";
import { loader } from "./helper/loader";
import { getData } from "./helper/localStorage";
import MainLayout from "./layout/MainLayout";
import Blogs from "./pages/Blogs";
import Customer from "./pages/Customer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders/index";
import Products from "./pages/Product";
import Settings from "./pages/Settings";

function App() {
  const [isLogged, _] = useState<boolean>(true);
  const [mode, setMode] = useState<PaletteMode>(
    getData(localStorageKeys.MODE) ?? "light"
  );

  const colorMode = useMemo(() => {
    return {
      toggleMode: () => {
        setMode(mode === "light" ? "dark" : "light");
      },
    };
  }, [mode]);

  const theme = useMemo(() => {
    return createTheme(mode === "light" ? lightTheme : darkTheme);
  }, [mode]);

  useEffect(() => {
    loader();
  }, []);

  return (
    <ColorSchemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
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
    </ColorSchemeContext.Provider>
  );
}

export default App;
