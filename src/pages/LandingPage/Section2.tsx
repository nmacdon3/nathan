import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { Navigate } from "react-router-dom";

import { TypeWriterSettings } from ".";

const Section2 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div
      data-section="2"
      ref={section.ref}
      className="text-5xl  w-56 md:w-auto"
    >
      {section.inView && (
        <>
          {<Navigate to="/?section=2" />}
          <Typewriter
            options={{
              ...TypeWriterSettings,
              strings: ["We may not know each other."],
              delay: 80,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Section2;
