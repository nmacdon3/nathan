import { useState, useEffect } from "react";
import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

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
    <h1 className="flex flex-col  h-[100vh] w-[100vw] justify-center items-start ps-40">
      <div className="flex flex-col items-start mt-16 ">
        <Typewriter
          options={{
            ...TypeWriterSettings,
            strings: [`I will design it,`],
            deleteSpeed: 100000,
            cursor: "|",
          }}
        />
      </div>
    </h1>
  ) : (
    <h1 className=" flex flex-col gap-6 bg-indigo-950 h-[100vh] w-[100vw] text-white justify-center items-start font-mono ps-36  overflow-hidden">
      <div className="absolute h-16 w-[100vw] bg-black opacity-25 mt-16 left-0 z-0"></div>
      <div className="absolute left-4 flex flex-col gap-6 text-blue-500 z-100">
        {numbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </div>
      <div className="flex  align-center justify-center gap-3">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-200">myOffer</span> =
      </div>
      <div className="flex  align-center justify-center text-orange-400 flex-shrink-0 z-20">
        <span className="">{"'"}I will design it,</span>
        <span className="ms-4 flex-shrink-0">
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
    </h1>
  );
};

const Section5 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="text-3xl flex font-mono ">
      {section.inView && <Content />}
    </div>
  );
};

export default Section5;
