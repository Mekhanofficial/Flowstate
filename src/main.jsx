import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home/Home";
import HomeHeroPage from "./pages/home/Hero";
import HeaderPage from "./components/Header";
const root = ReactDOM.createRoot(document.getElementById("root"));

const proRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/header",
    element: <HeaderPage />,
  },
  {
    path: "/home/hero",
    element: <HomeHeroPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={proRouter} />
  </React.StrictMode>
);
