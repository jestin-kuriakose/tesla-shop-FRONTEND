import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/style.css'
import Login from './pages/Login'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import ProductList from "./components/ProductList";
import React from "react";

const App: React.FC = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/products",
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
      path: "/contact",
      element: <Contact/>
    },

  ]);

  return (
  
    <RouterProvider router={router} />
    
  )
}

export default App
