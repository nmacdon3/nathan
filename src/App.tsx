import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiX } from "react-icons/hi";

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

const HeaderLinkGroup = ({
  label,
  links,
}: {
  label: string;
  links: { label: string; to: string }[];
}) => {
  return (
    <div className="group relative  h-12 flex flex-col justify-center group">
      <div className="group-hover:h-[2px] h-0 w-full absolute top-0 left-0 bg-zinc-800 transition-all duration-500 translate-y-4 group-hover:opacity-100 opacity-0 group-hover:translate-y-0"></div>
      {label}
      <div className="absolute delay-100 top-12 w-96 flex flex-col items-start">
        {links.map((link, i) => (
          <div
            key={link.to}
            className="hover:border-b-2 hover:border-zinc-800 transition-all duration-100 ease-in-out mb-2"
          >
            <div
              style={{ transitionDelay: 100 * (i + 1) + "ms" }}
              className="group-hover:translate-y-0 -translate-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out "
              // to={link.to}
            >
              {link.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//@ts-ignore

const Menu = () => {
  return (
    <div className="absolute top-6 left-8 text-3xl">
      <HeaderLinkGroup
        label="Menu"
        links={[
          { label: "Home", to: "/" },
          { label: "Contact", to: "/contact" },
        ]}
      />
    </div>
  );
};

//@ts-ignore
const Menu2 = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="absolute top-0 left-0 h-48 w-96 pl-6 pt-4 group transition-opacity opacity-25 hover:opacity-100 duration-[500ms] ">
      <button onClick={() => setShow(true)}>
        <IoMdMenu className="h-10 w-10 transition-all  shrink-0" />
      </button>
      <Transition
        className="transition-all duration-[3000ms] overflow-hidden  h-96 w-48 rounded-lg border-4 border-white shadow-xl transform absolute top-6"
        enterFrom="-translate-x-96 opacity-0"
        leaveTo="-translate-x-96 opacity-0"
        show={show}
      >
        <div className="w-[200px] h-[400px] overflow-hidden absolute">
          <div
            className="w-[200px] h-[200px]   animate-spin bg-gradient-to-b from-pink-700 via-white to-teal-700  absolute top-0 "
            style={{
              animationDuration: "10000ms",
            }}
          />
          <div
            className="w-[200px] h-[200px]   animate-spin bg-gradient-to-r rounded-full from-indigo-700 via-white to-orange-700  absolute bottom-0 "
            style={{
              animationDuration: "5000ms",
            }}
          />
        </div>
        <div className=" h-[400px] w-100  font-thin backdrop-blur-3xl bg-white/50 ">
          <button onClick={() => setShow(false)}>
            <HiX className="text-white" />
          </button>
          test
        </div>
      </Transition>
    </div>
  );
};

const WorkInProgressBanner = () => {
  const [show, setShow] = useState<boolean>(true);
  return (
    <Transition
      show={show}
      className="absolute top-0 left-0 w-[100vw] h-10 bg-yellow-500 text-white flex justify-center items-center px-7 z-1000"
      leave="transition-all duration-[1000ms] ease-in"
      leaveTo="transform -translate-y-10 opacity-0"
    >
      <span>
        Hey! This app is under active development. Proceed if you dare.{" "}
        <button
          className="hover:underline text-yellow-700"
          onClick={() => setShow(false)}
        >
          Click here
        </button>{" "}
        to hide this banner.
      </span>
    </Transition>
  );
};

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
        <WorkInProgressBanner />
        {/* <Menu /> */}
        {/* <div className="absolute top-0 left-0 h-48 w-96 pl-6 pt-4 group transition-opacity ">
          <div className="relative group-hover:opacity-100 opacity-25 transition-all duration-[500ms] w-10 group-hover:w-[460px]   flex justify-end overflow-hidden items-center gap-10">
            <div className="group-hover:opacity-100 opacity-0 w-96  flex justify-between items-center text-xl">
              <div className="h-28 absolute left-0 w-0 group-hover:w-[400px] duration-1000 bg-black border border-black shrink-0"></div>
              <IoMdMenu className="h-10 w-10 transition-all duration-[500ms]  group-hover:rotate-90  shrink-0 mr-8" />
              <span>Home</span>
              <span>About</span>
              <span>Contact</span>
            </div>
            <IoMdMenu className="h-10 w-10 transition-all duration-[500ms]  group-hover:rotate-90  shrink-0" />
          </div>
        </div> */}
        {/* <Menu2 /> */}
      </div>
    </div>
  );
};

export default App;
