import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Transition } from "@headlessui/react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { CiDesktopMouse2 } from "react-icons/ci";
import { CgCheck } from "react-icons/cg";

import "react-circular-progressbar/dist/styles.css";

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

const useCounter = (maxValue: number) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < maxValue) {
          return prevValue + 1;
        } else {
          clearInterval(timer);
          return prevValue;
        }
      });
    }, 4);

    return () => clearInterval(timer);
  }, [maxValue]);

  return value;
};

//a div that looks like a down arrow key from a keyboard
const DownArrowKey = () => {
  return (
    <div className=" shadow-lg text-white p-4 rounded-lg bg-gradient-to-b from-zinc-500/30 to-zinc-900/50 backdrop-blur-sm">
      <BiDownArrow className="h-5 w-5" />
    </div>
  );
};

const UpArrowKey = () => {
  return (
    <div className="shadow-lg p-4  text-white  rounded-lg bg-gradient-to-b from-zinc-500/30 to-zinc-900/50 backdrop-blur-sm">
      <BiUpArrow className="h-5 w-5" />
    </div>
  );
};

const ProgressBar = ({
  time,
  showNavTips,
}: {
  time: number;
  showNavTips: boolean | undefined;
}) => {
  const value = useCounter(time);

  const width = (value / time) * 100;

  const ready = width === 100;

  return (
    <div
      className="absolute right-10 bottom-10   z-1000 flex items-center"
      style={{ width: 50, height: 50 }}
    >
      {showNavTips && (
        <Transition
          show={ready}
          className="absolute  right-20 "
          enter="transition linear duration-[5000ms]"
          enterFrom=" opacity-0"
          enterTo=" opacity-100"
        >
          <div className="flex items-center w-96 gap-4 divide-x-0 divide-gray-50   ">
            <CiDesktopMouse2 className="h-12 w-12 flex-shrink-0 animate-wiggle text-zinc-700" />
            <div className="flex items-center  gap-2 animate-pulse ">
              <DownArrowKey />
              <UpArrowKey />
            </div>
            <div className="h-10 w-[1px] bg-zinc-500 flex-shrink-0"></div>
            <span className="">
              Use up and down arrow keys or scroll to navigate
            </span>
          </div>
        </Transition>
      )}

      <CircularProgressbar
        value={width}
        className="opacity-50 z-100"
        styles={buildStyles({
          pathColor: `rgba(30, 190, 140, ${width / 100})`,
          trailColor: "transparent",
        })}
      />
      <Transition
        show={ready}
        className="z-0 shadow duration-[1000ms] absolute bg-gradient-to-b text-white from-emerald-200 via-emerald-800 to-emerald-600  rounded-full h-full w-full flex items-center justify-center "
        enter="transition-all linear duration-300"
        enterFrom=" scale-0"
        enterTo=" scale-100"
      >
        <CgCheck className="h-10 w-10" />
      </Transition>
    </div>
  );
};

const LandingPage = () => {
  const sections: SectionType[] = [
    { isVisible: useInView(), component: Section1, time: 1, showNavTips: true },
    {
      isVisible: useInView(),
      component: Section2,
      time: 1000,
      showNavTips: true,
    },
    {
      isVisible: useInView(),
      component: Section3,
      time: 2500,
      showNavTips: true,
    },
    { isVisible: useInView(), component: Section4, time: 1500 },
    { isVisible: useInView(), component: Section5, time: 3000 },
    { isVisible: useInView(), component: Section6, time: 1600 },
    { isVisible: useInView(), component: Section7 },
  ];

  return (
    <div className="text-zinc-800 w-100 snap-mandatory snap-y h-[100vh] overflow-y-scroll font-roboto font-thin">
      <NavCarousel sections={sections} />
      {sections.map((section, i) => (
        <SnapSection key={i}>
          <section.component section={section.isVisible} />
          {section.time && section.isVisible.inView && (
            <ProgressBar
              time={section.time}
              showNavTips={section.showNavTips}
            />
          )}
        </SnapSection>
      ))}
    </div>
  );
};

export default LandingPage;
