import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const App = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] overflow-hidden absolute">
        <div
          className="w-[100vw] h-[100vh]   animate-spin bg-gradient-to-b from-pink-500 via-white to-teal-500  absolute -left-96 opacity-50"
          style={{
            animationDuration: "30000ms",
          }}
        />
        <div
          className="w-[100vw] h-[100vh]   animate-spin bg-gradient-to-r rounded-full from-indigo-500 via-white to-orange-500  absolute -right-96 opacity-50"
          style={{
            animationDuration: "10000ms",
          }}
        />
      </div>
      <div className="text-zinc-800 w-100 font-roboto font-thin backdrop-blur-3xl bg-white/75">
        <RouterProvider router={router} />
        <div className="absolute top-0 left-0 h-48 w-96 pl-6 pt-4 group/1 transition-opacity ">
          <div className="group-hover/1:opacity-100 opacity-25 transition-all duration-[500ms] w-10 hover:w-96 group/2  flex justify-end">
            <IoMdMenu className="h-10 w-10 transition-all duration-[500ms]  group-hover/2:rotate-90  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
