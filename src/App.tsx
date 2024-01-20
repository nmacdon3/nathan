//TODO: dark mode
//TODO: tell users they can use arrow keys as method of navigation
//TODO: Carousel beads to show user where they are

import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

const SnapSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="snap-center flex items-center justify-center h-[100vh] ">
      {children}
    </section>
  );
};

const Dot = ({ active }: { active: boolean }) => {
  return (
    <div
      className={classNames(
        `bg-black rounded-full h-2 w-2 flex-shrink-0`,
        active ? "opacity-100" : "opacity-25"
      )}
    ></div>
  );
};

const App = () => {
  const section1 = useInView({
    /* Optional options */
    threshold: 0,
  });
  const section2 = useInView({
    /* Optional options */
    threshold: 0,
  });

  const section3 = useInView({
    /* Optional options */
    threshold: 0,
  });

  const section4 = useInView({
    /* Optional options */
    threshold: 0,
  });

  const section5 = useInView({
    /* Optional options */
    threshold: 0,
  });

  const section6 = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [inIde, setInIde] = useState<boolean>(false);

  setTimeout(() => {
    setInIde(true);
  }, 5000);

  useEffect(() => {
    if (!section5.inView) setInIde(false);
    if (section5.inView) {
      setInIde(false);
      setTimeout(() => {
        setInIde(true);
      }, 5000);
    }
  }, [section5.inView]);

  const [rendered, setRendered] = useState<boolean>(false);

  setTimeout(() => {
    setRendered(true);
  }, 5000);

  useEffect(() => {
    if (!section6.inView) setRendered(false);
    if (section6.inView) {
      setRendered(false);
      setTimeout(() => {
        setRendered(true);
      }, 5000);
    }
  }, [section6.inView]);

  // array of numbers from 1 to 90
  const numbers = Array.from(Array(20).keys()).map((n) => n + 1);

  return (
    <div className="text-zinc-800 w-100 snap-mandatory snap-y h-[100vh] overflow-y-scroll font-roboto">
      <div className="absolute right-12 top-1/2 flex flex-col justify-center h-0">
        <div className="flex flex-col gap-4">
          <Dot active={section1.inView} />
          <Dot active={section2.inView} />
          <Dot active={section3.inView} />
          <Dot active={section4.inView} />
          <Dot active={section5.inView} />
          <Dot active={section6.inView} />
        </div>
      </div>

      <SnapSection>
        <h1 ref={section1.ref} className="text-8xl flex ">
          Hi
          <div className="ms-8 animate-wiggle ">&#x1F44B;</div>
        </h1>
      </SnapSection>
      <SnapSection>
        <h1 ref={section2.ref} className="text-5xl flex ">
          {section2.inView && (
            <Typewriter
              options={{
                strings: ["We may not know each other"],
                deleteSpeed: 1000000,
                autoStart: true,
                loop: true,
                delay: 70,
                cursor: "_",
              }}
            />
          )}
        </h1>
      </SnapSection>
      <SnapSection>
        <h1 ref={section3.ref} className="text-5xl flex ">
          {section3.inView && (
            <Typewriter
              options={{
                strings: [
                  "I don’t know what product you’re building.",
                  "Or what experience you’re trying to share with your users ",
                ],
                deleteSpeed: 1,
                autoStart: true,
                // loop: true,
                delay: 50,
                cursor: "_",
              }}
            />
          )}
        </h1>
        {/* after timeout, show next typewriter?? */}
      </SnapSection>
      <SnapSection>
        <h1 ref={section4.ref} className="text-5xl flex ">
          {section4.inView && (
            <Typewriter
              options={{
                strings: [
                  "But I know...",
                  "How your users deserve to be treated.",
                ],
                deleteSpeed: 1,
                autoStart: true,
                // loop: true,
                delay: 50,
                cursor: "_",
              }}
            />
          )}
        </h1>
      </SnapSection>
      <SnapSection>
        <div ref={section5.ref} className="text-3xl flex font-mono ">
          {section5.inView ? (
            !inIde ? (
              <h1 className="flex flex-col  h-[100vh] w-[100vw] justify-center items-start ps-40">
                <div className="flex flex-col items-start mt-16 ">
                  <Typewriter
                    options={{
                      strings: [`I will design it,`],
                      deleteSpeed: 100000,
                      autoStart: true,
                      // loop: true,
                      delay: 50,
                      cursor: "|",
                    }}
                  />
                </div>
              </h1>
            ) : (
              <h1 className=" flex flex-col gap-6 bg-indigo-950 h-[100vh] w-[100vw] text-white justify-center items-start font-mono ps-36 relative overflow-hidden">
                <div className="absolute h-16 w-[100vw] bg-black opacity-25 mt-16 left-0 z-0"></div>
                <div className="absolute left-4 flex flex-col gap-6 text-blue-500">
                  {numbers.map((num) => (
                    <div key={num}>{num}</div>
                  ))}
                </div>
                <div className="flex  align-center justify-center gap-3">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-200">myGuarantee</span> =
                </div>
                <div className="flex  align-center justify-center text-orange-400 flex-shrink-0 z-20">
                  <span className="">{"'"}I will design it,</span>
                  <span className="ms-4 flex-shrink-0">
                    <Typewriter
                      options={{
                        strings: [`and build it.`],
                        deleteSpeed: 100000,
                        autoStart: true,
                        // loop: true,
                        delay: 120,
                        cursor: "|",
                      }}
                    />
                  </span>
                  {"'"}
                  <span className="text-purple-400">;</span>
                </div>
              </h1>
            )
          ) : null}
        </div>
      </SnapSection>
      <SnapSection>
        <div ref={section6.ref} className="text-3xl flex font-mono ">
          {section6.inView ? (
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
                        strings: [`Let's Talk`],
                        deleteSpeed: 100000,
                        autoStart: true,
                        // loop: true,
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
                  <button className="px-24 py-12 bg-indigo-950 shadow-lg hover:bg-indigo-900 transition rounded-md text-white font-roboto spac">
                    {"Let's Talk"}
                  </button>
                </div>
              </h1>
            )
          ) : null}
        </div>
      </SnapSection>
    </div>
  );
};

export default App;
