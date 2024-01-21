import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

const Section4 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="text-5xl">
      {section.inView && (
        <Typewriter
          options={{
            strings: ["But I know...", "How your users deserve to be treated."],
            deleteSpeed: 1,
            autoStart: true,
            delay: 50,
            cursor: "_",
          }}
        />
      )}
    </div>
  );
};

export default Section4;
