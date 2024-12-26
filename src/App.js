import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {

      }
    ]
  }
])

export default function App() {
  return (
      <>
        <Layout />
      </>
  );
}