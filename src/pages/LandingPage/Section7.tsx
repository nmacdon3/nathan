import { useState, useEffect } from "react";
import { InViewHookResponse } from "react-intersection-observer";
import { Navigate, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Content = () => {
  const navigate = useNavigate();

  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 1600);
  }, []);

  const numbers = Array.from(Array(20).keys()).map((n) => n + 1);

  return !rendered ? (
    <h1 className=" flex flex-col gap-6 bg-indigo-950 h-[100vh] w-[100vw] text-white justify-center items-start font-mono md:ps-36 ps-14 relative overflow-hidden">
      <div className="absolute h-16 w-[100vw] bg-black opacity-25 left-0 z-0"></div>
      <div className="absolute left-4 flex flex-col gap-6 text-blue-500">
        {numbers.map((num) => (
          <div key={num}>{num}</div>
        ))}
      </div>
      <span className="text-purple-400">{"<button>"}</span>{" "}
      <div className="flex  align-center justify-center text-orange-400 flex-shrink-0 z-20 md:ms-20 ms-10">
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
    <h1 className="flex flex-col  h-[100vh] w-[100vw] justify-center items-start md:ps-36 ps-14 transform -translate-y-0">
      <div className="flex flex-col items-start ">
        <button
          onClick={() => navigate("/contact")}
          className="md:px-24 px-14 py-12 bg-black shadow-lg hover:bg-zinc-800 hover:shadow-xl transition  text-white flex items-center  "
        >
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
  );
};

const Section6 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div
      data-section="7"
      ref={section.ref}
      className="md:text-3xl text-xl flex font-mono "
    >
      {section.inView && (
        <>
          <Navigate to="/?section=7" />
          <Content />
        </>
      )}
    </div>
  );
};

export default Section6;
