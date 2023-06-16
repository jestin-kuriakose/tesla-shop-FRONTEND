import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/style.css'
import Login from './pages/Login'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductList from "./components/ProductList";
import React from "react";
import CartPage from "./pages/CartPage";
import Payment from "./pages/Payment";
import Completion from "./pages/Completion";
import Repair from "./pages/Repair/Repair";

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/repair",
      element: <Repair/>
    },
    {
      path: "/shop",
      element: <Shop/>,
    },
    {
      path: "/product/:id",
      element: <Product/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: '/cart',
      element: <CartPage/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/payment",
      element: <Payment/>
    },
    {
      path: "/completion",
      element: <Completion/>
    },

  ]);

  return (
  
    <RouterProvider router={router} />
    
  )
}

export default App
