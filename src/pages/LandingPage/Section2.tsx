import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

import { TypeWriterSettings } from ".";

const Section2 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="text-5xl  w-56 md:w-auto">
      {section.inView && (
        <Typewriter
          options={{
            ...TypeWriterSettings,
            strings: ["We may not know each other."],
            delay: 80,
          }}
        />
      )}
    </div>
  );
};

export default Section2;
