import classNames from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";
import { Transition } from "@headlessui/react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";

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
    <div className="absolute md:right-12 right-4 top-1/2 flex flex-col justify-center h-0 z-1000">
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
  const [searchParams] = useSearchParams();
  const initSection = searchParams.get("section") || 0;

  //scroll to the section based on the query parameter
  useEffect(() => {
    if (initSection) {
      const section = document.querySelector(`[data-section="${initSection}"]`);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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

  //preload all images in the public folder
  useEffect(() => {
    const images = [
      "/headshot.webp",
      "/menu.png",
      "/messenger.png",
      "/music.png",
      "/photography.png",
      "/receipt.png",
      "/shop.png",
      "/timer.png",
      "/toggles.png",
      "/vsco.png",
    ];
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  return (
    <div className=" w-[100vw] snap-mandatory snap-y h-[100vh] overflow-y-scroll ">
      {sections.map((section, i) => (
        <SnapSection key={i}>
          <section.component section={section.isVisible} />
          {section.time && section.isVisible.inView && (
            <NavSignal time={section.time} />
          )}
        </SnapSection>
      ))}
      <NavCarousel sections={sections} />
    </div>
  );
};

export default LandingPage;
