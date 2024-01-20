//TODO: dark mode
//TODO: tell users they can use arrow keys as method of navigation

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

const SnapSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="snap-center flex items-center justify-center h-[100vh] ">
      {children}
    </section>
  );
};

const App = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <div className="text-zinc-800 w-100 snap-mandatory snap-y h-[100vh] overflow-y-scroll font-roboto">
      <SnapSection>
        <h1 className="text-8xl flex ">
          Hi
          <div className="ms-8 animate-wiggle ">&#x1F44B;</div>
        </h1>
      </SnapSection>
      <SnapSection>
        <h1 ref={ref} className="text-5xl flex ">
          {inView && (
            <Typewriter
              options={{
                strings: ["We may not know each other."],
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
        <h1 ref={ref2} className="text-5xl flex ">
          {inView2 && (
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
      </SnapSection>
      <SnapSection>
        <h1 className="text-7xl">Hi</h1>
      </SnapSection>
    </div>
  );
};

export default App;
