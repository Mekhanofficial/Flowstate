import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
// import LifestylePage from "./pages/Lifestyle";
// import StylePage from "./pages/Style";
// import TravelPage from "./pages/Travel";
// import InteriorPage from "./pages/Interior";
// import PageOne from "./components/Subpages/Page1";
// import PageTwo from "./components/Subpages/Page2";
// import PageThree from "./components/Subpages/Page3";
// import PageFour from "./components/Subpages/Page4";
// import PageFive from "./components/Subpages/Page5";
// import PageSix from "./components/Subpages/Page6";
// import PageSeven from "./components/Subpages/Page7";
// import PageEight from "./components/Subpages/Page8";
// import PageNine from "./components/Subpages/Page9";
// import PageTen from "./components/Subpages/Page10";
import HomePage from "./pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));


const proRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      // {
      //   path: "/Lifestyle",
      //   element: <LifestylePage />,
      // },
      // {
      //   path: "/Style",
      //   element: <StylePage />,
      // },
      // {
      //   path: "/Travel",
      //   element: <TravelPage />,
      // },
      // {
      //   path: "/Interior",
      //   element: <InteriorPage />,
      // },
      // {
      //   path: "/Page1",
      //   element: <PageOne />,
      // },
      // {
      //   path: "/Page2",
      //   element: <PageTwo />,
      // },
      // {
      //   path: "/Page3",
      //   element: <PageThree />,
      // },
      // {
      //   path: "/Page4",
      //   element: <PageFour />,
      // },
      // {
      //   path: "/Page5",
      //   element: <PageFive />,
      // },
      // {
      //   path: "/Page6",
      //   element: <PageSix />,
      // },
      // {
      //   path: "/Page7",
      //   element: <PageSeven />,
      // },
      // {
      //   path: "/Page8",
      //   element: <PageEight />,
      // },
      // {
      //   path: "/Page9",
      //   element: <PageNine />,
      // },
      // {
      //   path: "/Page10",
      //   element: <PageTen />,
      // },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={proRouter} />
  </React.StrictMode>
);
