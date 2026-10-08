import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router";
import { Shopbody } from "./src/Components/landing-page/Shop";
import Container from "./src/AppLayout";
import About from "./src/Components/landing-page/About";
import Contact from "./src/Components/landing-page/Contact";
import { Body } from "./src/Components/landing-page/Body";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      { path: "/shop", element: <Shopbody /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/", element: <Body /> },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
