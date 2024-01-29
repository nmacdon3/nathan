import { InViewHookResponse } from "react-intersection-observer";

const Section1 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="md:text-8xl text-5xl flex items-center">
      Hi
      <span className="ms-8 animate-wiggle ">&#x1F44B;</span>
    </div>
  );
};

export default Section1;
