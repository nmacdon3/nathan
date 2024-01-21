import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./LandingPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/contact",
    element: <div>WIP</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
