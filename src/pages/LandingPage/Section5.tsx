import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

import { TypeWriterSettings } from ".";

const EphemeralImage = ({
  delay,
  img,
  className,
}: {
  delay: number;
  img: string;
  className: string;
}) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);

    setTimeout(() => {
      setShow(false);
    }, delay + 4500);

    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, delay + 12000);
  }, [delay, count]);

  return (
    <Transition
      show={show}
      className={className}
      enter="transition  duration-[5000ms] transform "
      enterFrom="opacity-0 translate-y-96 scale-50 "
      enterTo="opacity-100 scale-100 "
      leave="transition  duration-[5000ms] transform"
      leaveTo="opacity-0 -translate-y-96 scale-50 "
    >
      <img
        src={img}
        // TODO: fix this
        alt="test"
        className="h-96 rounded-md shadow-xl  object-cover"
      />
    </Transition>
  );
};

const Content = () => {
  const [initialProfile, setInitialProfile] = useState<boolean>(true);

  const [transitionProfile, setTransitionProfile] = useState<boolean>(false);
  const [finalProfile, setFinalProfile] = useState<boolean>(false);
  const [showPortfolio, setShowPortfolio] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTransitionProfile(true);
    }, 1980);

    setTimeout(() => {
      setInitialProfile(false);
      setShowPortfolio(true);
    }, 2000);

    setTimeout(() => {
      setTransitionProfile(false);
      setFinalProfile(true);
    }, 3900);
  }, []);

  return (
    <>
      {showPortfolio && (
        <>
          <EphemeralImage
            delay={0}
            img="/menu.png"
            className="absolute left-20 top-40"
          />
          <EphemeralImage
            delay={1500}
            img="/messenger.png"
            className="absolute right-20 top-56"
          />
          <EphemeralImage
            delay={3000}
            img="/music.png"
            className="absolute left-1/2 top-60"
          />
          <EphemeralImage
            delay={4500}
            img="/photography.png"
            className="absolute left-10 top-28"
          />
          <EphemeralImage
            delay={6000}
            img="/receipt.png"
            className="absolute right-20 top-20"
          />
          <EphemeralImage
            delay={7500}
            img="/toggles.png"
            className="absolute left-1/2 top-96"
          />
          <EphemeralImage
            delay={9000}
            img="/timer.png"
            className="absolute left-10 top-20"
          />
          <EphemeralImage
            delay={10500}
            img="/shop.png"
            className="absolute right-20 top-40"
          />
          <EphemeralImage
            delay={12000}
            img="/vsco.png"
            className="absolute left-1/2 top-20"
          />
        </>
      )}

      <div className="flex flex-col items-center gap-12">
        {initialProfile && (
          <>
            <img
              src="/headshot.webp"
              alt="test"
              className="md:h-56 md:w-56 h-28 w-28 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white"
            />
            <Typewriter
              options={{
                ...TypeWriterSettings,
                strings: ["I'm Nathan"],
              }}
            />
          </>
        )}
      </div>
      {/* This needs to be made relative in order to work on all viewport sizes */}
      <div className="text-2xl px-10 pb-10 absolute bottom-10 left-0 pt-28 h-64  w-[100vw] z-100   flex items-center gap-10 ">
        <div
          className={classNames(
            "transition-all  duration-1000 h-40  rounded-lg text-zinc-800 flex item-start gap-10 w-[30rem] absolute z-0 left-24 pl-24 pr-10 pt-8 font-thin",
            showPortfolio
              ? "bg-white/50 backdrop-blur-md shadow-2xl border-2 border-white"
              : "bg-transparent"
          )}
        >
          {showPortfolio && (
            <Typewriter
              options={{
                ...TypeWriterSettings,
                strings: [
                  "Experienced in various industries, I will apply the best UX to your vision.",
                ],
                deleteSpeed: 100000,
              }}
            />
          )}
        </div>
        {!finalProfile && (
          <Transition
            show={transitionProfile}
            className="absolute -left-6 z-100 ring-8 ring-white rounded-full  border-8"
            enter="transition scale-100  duration-[2000ms] transform"
            enterFrom="translate-x-[44vw] -translate-y-[40vh] scale-100"
            enterTo="translate-x-0 translate-y-0 scale-50"
          >
            <img
              src="/headshot.webp"
              alt="test"
              className="md:h-56 md:w-56 h-28 w-28 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white z-100"
            />
          </Transition>
        )}
        <img
          src="/headshot.webp"
          alt="test"
          className={classNames(
            "md:h-28 md:w-28 h-14 w-14 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white z-100",
            finalProfile ? "visible" : "invisible"
          )}
        />
      </div>
    </>
  );
};

const Section5 = ({ section }: { section: InViewHookResponse }) => {
  return (
    <div ref={section.ref} className="text-5xl overflow-hidden p-10">
      {section.inView && (
        <>
          <Content />
        </>
      )}
    </div>
  );
};

export default Section5;
