import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./src/AppLayout";
import  {RouterProvider, createBrowserRouter} from "react-router"
import { Shopbody } from "./src/Components/landing-page/Shop";
import About from "./src/Components/landing-page/About";
import Contact from "./src/Components/landing-page/Contact";
import { Shopbody } from "./src/Components/landing-page/Shop";


const appRouter = createBrowserRouter([
  {path:"/", element:<Container/>},
  {path:"/shop", element:<Shopbody/>},
  {path:"/about", element:<About/>},
  {path:"/contact", element:<Contact/>},
])






const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
