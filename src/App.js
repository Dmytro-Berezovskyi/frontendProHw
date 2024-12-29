import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HeaderFooterLayout from "./components/HeaderFooterLayout";
import Home from "./pages/Home";
import About from "./pages/About";

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
            path: "*",
            element: <div>404 Not Found</div>,
        }
    ]
  }
])

export default function App() {
  return (
      <RouterProvider router={router} />
  );
}