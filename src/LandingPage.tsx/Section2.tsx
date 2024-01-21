import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

const Section2 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="text-5xl ">
      {section.inView && (
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
    </div>
  );
};

export default Section2;
