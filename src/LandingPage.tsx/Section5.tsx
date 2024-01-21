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
    }, delay + 20000);
  }, [delay, count]);

  return (
    <Transition
      show={show}
      className={className}
      enter="transition   duration-[5000ms] transform"
      enterFrom="opacity-0 translate-y-96"
      enterTo="opacity-100"
      leave="transition  duration-[5000ms] transform"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 -translate-y-96"
    >
      <img src={img} alt="test" className="h-96 rounded-md shadow-xl" />
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
            delay={1600}
            img="/messenger.png"
            className="absolute right-20 top-56"
          />
          <EphemeralImage
            delay={3200}
            img="/music.png"
            className="absolute left-1/2 top-60"
          />
          <EphemeralImage
            delay={4800}
            img="/photography.png"
            className="absolute left-10 top-28"
          />
          <EphemeralImage
            delay={6400}
            img="/receipt.png"
            className="absolute right-20 top-20"
          />
          <EphemeralImage
            delay={7200}
            img="/toggles.png"
            className="absolute left-1/2 top-96"
          />
          <EphemeralImage
            delay={9600}
            img="/timer.png"
            className="absolute left-10 top-20"
          />
          <EphemeralImage
            delay={11000}
            img="/shop.png"
            className="absolute right-20 top-40"
          />
          <EphemeralImage
            delay={13200}
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
              className="h-56 w-56 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white"
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

      <div className="text-3xl px-10 pb-10 absolute bottom-0 left-0 pt-28 h-64 via-transparent w-[100vw] z-100 bg-gradient-to-b from-transparent to-white flex items-center gap-10">
        <div
          className={classNames(
            "transition-all duration-1000 h-28  backdrop-blur-lg rounded-full flex item-center gap-10 w-[95%] absolute z-0 left-10 pl-36 font-thin  items-center",
            showPortfolio ? "bg-zinc-200" : "bg-white"
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
            enterFrom="translate-x-[43vw] -translate-y-[45vh] scale-100"
            enterTo="translate-x-0 translate-y-0 scale-50"
          >
            <img
              src="/headshot.webp"
              alt="test"
              className="h-56 w-56 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white z-100"
            />
          </Transition>
        )}
        <img
          src="/headshot.webp"
          alt="test"
          className={classNames(
            "h-28 w-28 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white z-100",
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
