import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

import { TypeWriterSettings } from ".";

const Section4 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="text-5xl">
      {section.inView && (
        <Typewriter
          options={{
            ...TypeWriterSettings,
            strings: ["But I know...", "How your users deserve to be treated."],
            deleteSpeed: 1,
          }}
        />
      )}
    </div>
  );
};

export default Section4;
