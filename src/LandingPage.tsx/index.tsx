import classNames from "classnames";
import { ReactNode, useState } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";

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
  time?: number;
  showNavTips?: boolean;
}

export const TypeWriterSettings = {
  deleteSpeed: 1000000,
  autoStart: true,
  delay: 50,
  cursor: "|",
};

const SnapSection = ({ children }: { children: ReactNode }) => {
  return (
    <section className="snap-center flex items-center justify-center h-[100vh] overflow-hidden relative mb-1">
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

const NavSignal = ({ time }: { time: number }) => {
  const [show, setShow] = useState(false);

  setTimeout(() => {
    setShow(true);
  }, time);

  return (
    <Transition
      show={show}
      className="absolute bottom-12 transition duration-[5000ms]"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      <HiOutlineChevronDown
        className="h-14 w-14 text-zinc-300 animate-bounce"
        style={{ animationDuration: "3000ms" }}
      />
    </Transition>
  );
};

const LandingPage = () => {
  const sections: SectionType[] = [
    { isVisible: useInView(), component: Section1, time: 1 },
    {
      isVisible: useInView(),
      component: Section2,
      time: 4000,
    },
    {
      isVisible: useInView(),
      component: Section3,
      time: 7500,
    },
    { isVisible: useInView(), component: Section4, time: 7500 },
    { isVisible: useInView(), component: Section5, time: 9000 },
    { isVisible: useInView(), component: Section6, time: 7600 },
    { isVisible: useInView(), component: Section7 },
  ];

  return (
    <div className="text-zinc-800 w-100 snap-mandatory snap-y h-[100vh] overflow-y-scroll font-roboto font-thin">
      {sections.map((section, i) => (
        <SnapSection key={i}>
          <section.component section={section.isVisible} />
          {section.time && section.isVisible.inView && (
            <NavSignal time={section.time} />
          )}
        </SnapSection>
      ))}
      <NavCarousel sections={sections} />
      <div className="absolute top-0 left-0 h-48 w-96 pl-6 pt-4 group/1 transition-opacity ">
        <div className="group-hover/1:opacity-100 opacity-25 transition-all duration-[500ms] w-10 hover:w-96 group/2  flex justify-end">
          <IoMdMenu className="h-10 w-10 transition-all duration-[500ms]  group-hover/2:rotate-90  " />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
