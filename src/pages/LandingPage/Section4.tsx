import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { Navigate } from "react-router-dom";

import { TypeWriterSettings } from ".";

const Section4 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div data-section="4" ref={section.ref} className="text-5xl w-56 md:w-auto">
      {section.inView && (
        <>
          <Navigate to="/?section=4" />
          <Typewriter
            options={{
              ...TypeWriterSettings,
              strings: ["But I know how your users deserve to be treated."],
              deleteSpeed: 1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default Section4;
