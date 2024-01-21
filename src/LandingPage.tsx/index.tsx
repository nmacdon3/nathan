import classNames from "classnames";
import { ReactNode } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

interface SectionType {
  isVisible: InViewHookResponse;
  component: ({ section }: { section: InViewHookResponse }) => JSX.Element;
}

export const TypeWriterSettings = {
  deleteSpeed: 1000000,
  autoStart: true,
  delay: 40,
  cursor: "_",
};

const SnapSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="snap-center flex items-center justify-center h-[100vh] overflow-hidden mb-10">
      {children}
    </section>
  );
};

const Dot = ({ active }: { active: boolean }) => {
  return (
    <div
      className={classNames(
        `bg-black rounded-full h-2 w-2 flex-shrink-0 transition duration-300`,
        active ? "opacity-100" : "opacity-25"
      )}
    />
  );
};

const NavCarousel = ({ sections }: { sections: SectionType[] }) => {
  return (
    <div className="absolute right-12 top-1/2 flex flex-col justify-center h-0">
      <div className="flex flex-col gap-4">
        {sections.map(({ isVisible }, i) => (
          <Dot key={i} active={isVisible.inView} />
        ))}
      </div>
    </div>
  );
};

const LandingPage = () => {
  const sections: SectionType[] = [
    { isVisible: useInView(), component: Section1 },
    { isVisible: useInView(), component: Section2 },
    { isVisible: useInView(), component: Section3 },
    { isVisible: useInView(), component: Section4 },
    { isVisible: useInView(), component: Section5 },
    { isVisible: useInView(), component: Section6 },
    { isVisible: useInView(), component: Section7 },
  ];

  return (
    <div className="text-zinc-800 w-100 snap-mandatory snap-y h-[100vh] overflow-y-scroll font-roboto font-thin">
      <NavCarousel sections={sections} />
      {sections.map((section, i) => (
        <SnapSection key={i}>
          <section.component section={section.isVisible} />
        </SnapSection>
      ))}
    </div>
  );
};

export default LandingPage;
