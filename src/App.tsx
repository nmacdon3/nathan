//TODO: dark mode

import { ReactNode } from "react";
import Typewriter from "typewriter-effect";

const SnapSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="snap-center flex items-center justify-center h-[100vh] ">
      {children}
    </section>
  );
};

const App = () => {
  return (
    <div className="text-zinc-800 w-100 snap-mandatory snap-y h-[100vh] overflow-y-scroll font-roboto">
      <SnapSection>
        <h1 className="text-8xl flex ">
          {/* <Typewriter
            options={{
              strings: ["Hi"],
              autoStart: true,
              deleteSpeed: 1000000,
              loop: true,
            }}
          />{" "} */}
          Hi
          <div className="ms-8 animate-wiggle ">&#x1F44B;</div>
        </h1>
      </SnapSection>
      <SnapSection>
        <h1 className="text-5xl flex ">
          <Typewriter
            options={{
              strings: ["This is my website"],
              deleteSpeed: 1000000,
              autoStart: true,
              loop: true,
              cursor: "_",
            }}
          />
        </h1>
      </SnapSection>
      <SnapSection>
        <h1 className="text-7xl">Hi</h1>
      </SnapSection>
    </div>
  );
};

export default App;
