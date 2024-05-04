import { useState, useEffect } from "react";
import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { Navigate } from "react-router-dom";

import { TypeWriterSettings } from ".";

const Content = () => {
  const [inIde, setInIde] = useState<boolean>(false);

  setTimeout(() => {
    setInIde(true);
  }, 2000);

  useEffect(() => {
    setTimeout(() => {
      setInIde(true);
    }, 2000);
  }, []);

  const numbers = Array.from(Array(20).keys()).map((n) => n + 1);

  return !inIde ? (
    <div className="flex flex-col  h-[100vh] w-[100vw] justify-center items-start md:ps-40 ps-16 pt-16">
      <Typewriter
        options={{
          ...TypeWriterSettings,
          strings: [`I will design it,`],
          deleteSpeed: 100000,
          cursor: "|",
        }}
      />
    </div>
  ) : (
    <div className="flex flex-col md:gap-6 gap-3 bg-indigo-950 h-[100vh] w-[100vw] text-white justify-center items-start font-mono md:ps-36 ps-16  overflow-hidden pt-12 md:pt-0">
      <div className="absolute left-4 flex flex-col gap-6 text-blue-500 z-100">
        {numbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </div>
      <div>
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-200">myOffer</span> =
      </div>
      <div className="flex flex-col md:flex-row text-orange-400  ">
        <span className="">{"'"}I will design it,</span>
        <div className="flex">
          <span className="ms-4">
            <Typewriter
              options={{
                ...TypeWriterSettings,
                strings: [`AND build it.`],
                deleteSpeed: 100000,
                delay: 140,
                cursor: "|",
              }}
            />
          </span>
          {"'"}
          <span className="text-purple-400">;</span>
        </div>
      </div>
    </div>
  );
};

const Section5 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div
      data-section="6"
      ref={section.ref}
      className="md:text-3xl text-xl flex font-mono "
    >
      {section.inView && (
        <>
          <Navigate to="/?section=6" />
          <Content />
        </>
      )}
    </div>
  );
};

export default Section5;
