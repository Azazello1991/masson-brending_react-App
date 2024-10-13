import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import "./scss/App.scss";
import LogIn from "./components/pages/LogIn";
import Gallery from "./components/pages/Gallery";
import ProductPage from "./components/pages/ProductPage";
import Cart from "./components/pages/Cart";
import Registration from "./components/pages/Registration";

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
    path: "/logIn",
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

  {
    path: "/registration",
    element: <Registration/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
