import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
//pages

import Home from "./pages/Home.jsx";
import Shop from "./pages/shop.jsx";
import Features from "./pages/Features.jsx";
import Pages from "./pages/Pages.jsx";
import Blog from "./pages/Blog.jsx";
import Search from "./pages/Search.jsx";
import User from "./pages/User.jsx";
import Cart from "./pages/Cart.jsx";
import Products, { productsLoader } from "./components/Products.jsx";
import ProductDetail, {
  productDetailLoader,
} from "./components/ProductDetail.jsx";
import { CartProvider } from "./context/CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: "",
            element: <Products />,
            loader: productsLoader,
          },
          {
            path: ":id",
            element: <ProductDetail />,
            loader: productDetailLoader,
          },
        ],
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "pages",
        element: <Pages />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </CartProvider>
);
