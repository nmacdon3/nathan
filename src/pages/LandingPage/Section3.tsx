import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

import { TypeWriterSettings } from ".";

const Section3 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="text-5xl  w-56 md:w-auto">
      {section.inView && (
        <Typewriter
          options={{
            ...TypeWriterSettings,
            strings: [
              "I don’t know what product you’re building.",
              "Or what experience you’re trying to share with your users.",
            ],
            deleteSpeed: 1,
          }}
        />
      )}
    </div>
  );
};

export default Section3;
