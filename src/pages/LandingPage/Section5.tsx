import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment, useEffect, useState } from "react";
import { InViewHookResponse } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import { HiX } from "react-icons/hi";

import { TypeWriterSettings } from ".";

const EphemeralImage = ({
  delay,
  img,
  className,
  onClick,
}: {
  onClick?: () => void;
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
      className={classNames(
        "transition transform duration-[5000ms]",
        className
      )}
      enterFrom="opacity-0 translate-y-96 scale-50 "
      enterTo="opacity-100 scale-100 "
      leaveTo="opacity-0 -translate-y-96 scale-50 "
    >
      <img
        onClick={onClick}
        src={img}
        // TODO: fix this
        alt="test"
        className="h-96 rounded-md shadow-xl  object-cover transition duration-500 hover:cursor-pointer hover:ring-2 ring-blue-500 hover:shadow-xl hover:shadow-blue-500"
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

  interface FocusType {
    img: string;
    title: string;
    description: string;
  }

  const [focused, setFocused] = useState<FocusType>();

  return (
    <>
      {showPortfolio && (
        <>
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/menu.png",
                title: "Menu",
                description: "This is a menu",
              })
            }
            delay={0}
            img="/menu.png"
            className={"absolute left-20 top-40"}
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/messenger.png",
                title: "Messenger",
                description: "This is a messenger",
              })
            }
            delay={1500}
            img="/messenger.png"
            className={"absolute right-20 top-56"}
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/music.png",
                title: "Music",
                description: "This is a music player",
              })
            }
            delay={3000}
            img="/music.png"
            className={"absolute left-1/2 top-60"}
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/photography.png",
                title: "Photography",
                description: "This is a photography app",
              })
            }
            delay={4500}
            img="/photography.png"
            className="absolute left-10 top-28"
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/receipt.png",
                title: "Receipt",
                description: "This is a receipt",
              })
            }
            delay={6000}
            img="/receipt.png"
            className="absolute right-20 top-20"
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/toggles.png",
                title: "Toggles",
                description: "This is a toggles",
              })
            }
            delay={7500}
            img="/toggles.png"
            className="absolute left-1/2 top-96"
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/timer.png",
                title: "Timer",
                description: "This is a timer",
              })
            }
            delay={9000}
            img="/timer.png"
            className="absolute left-10 top-20"
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/shop.png",
                title: "Shop",
                description: "This is a shop",
              })
            }
            delay={10500}
            img="/shop.png"
            className="absolute right-20 top-40"
          />
          <EphemeralImage
            onClick={() =>
              setFocused({
                img: "/vsco.png",
                title: "Vsco",
                description: "This is a vsco",
              })
            }
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
      <Transition appear show={!!focused} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setFocused(undefined)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center md:p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="text-white h-[100vh] w-[100vw] md:h-auto md:w-auto transform overflow-hidden md:rounded-2xl bg-white/25 backdrop-blur-lg md:border-2 border-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6  flex justify-between"
                  >
                    {focused?.title}
                    <button
                      className="rounded-full focus:outline-none focus:bg-white/25 outline-[2px] h-6 w-6 flex items-center justify-center"
                      onClick={() => setFocused(undefined)}
                    >
                      <HiX />
                    </button>
                  </Dialog.Title>
                  <div className="mt-6">
                    <img
                      src={focused?.img}
                      alt="test"
                      className="md:h-[50vh] md:max-w-[50vw] object-contain rounded-lg shadow-lg"
                    />
                    <p className=" mt-6">{focused?.description}</p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
