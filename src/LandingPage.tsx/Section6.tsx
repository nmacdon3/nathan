import { useState, useEffect } from "react";
import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

const Section6 = ({ section }: { section: InViewHookResponse }) => {
  const [rendered, setRendered] = useState<boolean>(false);

  setTimeout(() => {
    setRendered(true);
  }, 1600);

  useEffect(() => {
    if (!section.inView) setRendered(false);
    if (section.inView) {
      setRendered(false);
      setTimeout(() => {
        setRendered(true);
      }, 1600);
    }
  }, [section.inView]);

  const numbers = Array.from(Array(20).keys()).map((n) => n + 1);

  return (
    <div ref={section.ref} className="text-3xl flex font-mono ">
      {section.inView ? (
        !rendered ? (
          <h1 className=" flex flex-col gap-6 bg-indigo-950 h-[100vh] w-[100vw] text-white justify-center items-start font-mono ps-36 relative overflow-hidden">
            <div className="absolute h-16 w-[100vw] bg-black opacity-25 left-0 z-0"></div>
            <div className="absolute left-4 flex flex-col gap-6 text-blue-500">
              {numbers.map((num) => (
                <div key={num}>{num}</div>
              ))}
            </div>
            <span className="text-purple-400">{"<button>"}</span>{" "}
            <div className="flex  align-center justify-center text-orange-400 flex-shrink-0 z-20 ms-20">
              <span className="ms-4 flex-shrink-0">
                <Typewriter
                  options={{
                    strings: [`Let's`],
                    deleteSpeed: 100000,
                    autoStart: true,
                    delay: 120,
                    cursor: "|",
                  }}
                />
              </span>
            </div>
            <span className="text-purple-400">{"</button>"}</span>{" "}
          </h1>
        ) : (
          <h1 className="flex flex-col  h-[100vh] w-[100vw] justify-center items-start ps-36 transform -translate-y-0">
            <div className="flex flex-col items-start ">
              <button className="px-24 py-12 bg-black shadow-lg hover:bg-zinc-800 hover:shadow-xl transition  text-white flex items-center  ">
                <div className="me-2"> {"Let's"}</div>
                <Typewriter
                  options={{
                    strings: [`Talk`],
                    deleteSpeed: 100000,
                    autoStart: true,
                    delay: 120,
                    cursor: "|",
                  }}
                />
              </button>
            </div>
          </h1>
        )
      ) : null}
    </div>
  );
};

export default Section6;
