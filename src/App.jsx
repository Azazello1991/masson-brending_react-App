import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import "./scss/App.scss";
import LogIn from "./components/pages/LogIn";
import Gallery from "./components/pages/Gallery";
import ProductPage from "./components/pages/ProductPage";
import Cart from "./components/pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },

  {
    path: "gallery/product/:id",
    element: <ProductPage/>,
  },

  {
    path: "/cart",
    element: <Cart/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
