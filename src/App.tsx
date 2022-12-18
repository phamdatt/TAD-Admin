
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout';
import Blank from './pages/Blank';
import Products from './pages/Product';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout/>}>
      <Route index  element={<Dashboard/>} />
      <Route path='products'  element={<Products/>} />
      <Route path='customers'  element={<Blank/>} />
      <Route path='orders'  element={<Blank/>} />
      <Route path='blogs'  element={<Blank/>} />
      <Route path='deliveries'  element={<Blank/>} />
      <Route path='settings'  element={<Blank/>} />
      <Route path='logout'  element={<Blank/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
