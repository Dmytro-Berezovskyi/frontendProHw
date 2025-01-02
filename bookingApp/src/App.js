import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderFooterLayout from "./components/HeaderFooterLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Hotels from "./pages/Hotels";
import SelectedHotels from "./pages/DestinationHotels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderFooterLayout />,
    children: [
        {
            index: "true",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/hotels",
            element: <Hotels />,
        },
        {
            path: "/selected/hotels",
            element: <SelectedHotels />,
        },
        {
            path: "*",
            element: <div>404 Not Found</div>,
        }
    ]
  }
])

export default function App() {
    console.log(process.env);
  return (
      <RouterProvider router={router} />
  );
}