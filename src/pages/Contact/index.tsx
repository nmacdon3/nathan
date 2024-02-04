import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const OverlyComplicatedLink = ({
  icon,
  to,
  colorConfig,
}: {
  icon: { value: IconType };
  to: string;
  colorConfig: {
    tw: string;
    rbg: string;
  };
}) => {
  const [showOutline, setShowOutline] = useState(0);

  return (
    <div
      onMouseEnter={() => setShowOutline(100)}
      onMouseLeave={() => setShowOutline(0)}
      className={classNames(
        "relative flex items-center justify-center hover:text-white  rounded-full h-20 w-20 transition-all ease-out duration-[1000ms] transform hover:-translate-y-2 hover:shadow-xl",
        colorConfig.tw
      )}
    >
      <CircularProgressbar
        value={showOutline}
        className=" z-0 w-20 h-20 transition absolute"
        strokeWidth={50}
        styles={buildStyles({
          pathColor: `rgb(${colorConfig.rbg}, ${showOutline / 100})`,
          trailColor: "transparent",
          pathTransition: "stroke-dashoffset 1s",
          pathTransitionDuration: 1,
          strokeLinecap: "round",
          rotation: 0.5,
        })}
      />
      <a href={to} target="_blank" rel="noreferrer" className="z-100 relative">
        <icon.value className="h-12 w-12" />
      </a>
    </div>
  );
};

const Contact = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 600);
  }, []);

  return (
    <div className="w-100 h-[100vh] flex items-center justify-center">
      <Transition
        show={show}
        enter="transition  duration-[4000ms]"
        enterFrom="md:translate-y-10 md:-translate-x-0 -translate-x-10 opacity-0"
        className="flex flex-col md:items-center items-start pl-8 md:pl-0"
      >
        <h1 className="md:text-6xl text-5xl">Reach out anytime.</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-zinc-500 md:mt-8 mt-16 transform -translate-x-4">
          <OverlyComplicatedLink
            icon={{ value: FaLinkedin }}
            to="https://www.linkedin.com/in/nathanmacd/"
            colorConfig={{ tw: "shadow-blue-800", rbg: "59, 130, 246" }}
          />
          <OverlyComplicatedLink
            icon={{ value: IoIosMail }}
            to="mailto:natemacd97@gmail.com"
            colorConfig={{ tw: "shadow-green-800", rbg: "34, 197, 94" }}
          />
          <OverlyComplicatedLink
            icon={{ value: FaGithub }}
            to="https://github.com/nmacdon3"
            colorConfig={{ tw: "shadow-black", rbg: "0, 0, 0" }}
          />
        </div>
      </Transition>
    </div>
  );
};

export default Contact;
