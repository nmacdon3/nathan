import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

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

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, delay);

    setTimeout(() => {
      setShow(false);
    }, delay + 4500);
  }, [delay]);

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

const Section5 = ({ section }: { section: InViewHookResponse }) => {
  const [initialProfile, setInitialProfile] = useState<boolean>(true);

  const [transitionProfile, setTransitionProfile] = useState<boolean>(false);
  const [finalProfile, setFinalProfile] = useState<boolean>(false);
  const [showPortfolio, setShowPortfolio] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialProfile(false);
      setShowPortfolio(true);
      setTransitionProfile(true);
    }, 5000);

    setTimeout(() => {
      setTransitionProfile(false);
      setFinalProfile(true);
    }, 6900);
  }, []);

  return (
    <div ref={section.ref} className="text-5xl overflow-hidden p-10">
      {section.inView && (
        <>
          {showPortfolio && (
            <>
              <EphemeralImage
                delay={0}
                img="/menu.png"
                className="absolute left-20 top-40"
              />
              <EphemeralImage
                delay={500}
                img="/messenger.png"
                className="absolute right-20 top-20"
              />
              <EphemeralImage
                delay={1000}
                img="/music.png"
                className="absolute left-10 top-60"
              />
              <EphemeralImage
                delay={1500}
                img="/photography.png"
                className="absolute right-60 top-72"
              />
              <EphemeralImage
                delay={2000}
                img="/receipt.png"
                className="absolute left-96 top-30"
              />
              <EphemeralImage
                delay={2500}
                img="/shop.png"
                className="absolute left-20 top-40"
              />
              <EphemeralImage
                delay={2500}
                img="/timer.png"
                className="absolute left-72 top-96"
              />
              <EphemeralImage
                delay={2500}
                img="/toggles.png"
                className="absolute left-64 top-40"
              />
              <EphemeralImage
                delay={2500}
                img="/vsco.png"
                className="absolute right-56 top-20"
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
                    strings: ["I'm Nathan"],
                    deleteSpeed: 1,
                    autoStart: true,
                    delay: 100,
                    cursor: "_",
                  }}
                />
              </>
            )}
          </div>

          <div className="text-4xl px-10 pb-10 absolute bottom-0 left-0 pt-28 h-64 via-white w-[100vw] z-100 bg-gradient-to-b from-transparent to-white flex items-center gap-10">
            {!finalProfile && (
              <Transition
                show={transitionProfile}
                className="absolute -left-4 z-100 "
                enter="transition scale-100  duration-[2000ms] transform"
                enterFrom="translate-x-[43vw] -translate-y-[45vh] scale-100"
                enterTo="translate-x-0 translate-y-0 scale-50"
              >
                <img
                  src="/headshot.webp"
                  alt="test"
                  className="h-56 w-56 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white"
                />
              </Transition>
            )}

            <img
              src="/headshot.webp"
              alt="test"
              className={classNames(
                "h-28 w-28 rounded-full object-cover shadow-xl z-100 relative ring-8 ring-white",
                finalProfile ? "visible" : "invisible"
              )}
            />

            {showPortfolio && (
              <Typewriter
                options={{
                  strings: [
                    "'Experienced in various industries, I will apply the best UX to your vision.'",
                  ],
                  deleteSpeed: 100000,
                  autoStart: true,
                  delay: 50,
                  cursor: "_",
                }}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Section5;
