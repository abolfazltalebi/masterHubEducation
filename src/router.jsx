import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Layout from "./components/Layout/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
    ],
  },
]);
export default router;