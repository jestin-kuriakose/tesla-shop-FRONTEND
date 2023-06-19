import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/style.css'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product";
import ProductList from "./components/ProductList";
import React from "react";
import CartPage from "./pages/CartPage";
import Payment from "./pages/Payment";
import Completion from "./pages/Completion";
import Repair from "./pages/Repair/Repair";
import Register from "./pages/Register/Register";

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home/>
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
      ]
    },
    
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Register/>
    },


  ]);

  return (
  
    <RouterProvider router={router} />
    
  )
}

export default App
