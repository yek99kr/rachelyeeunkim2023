import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [title, updateTitle] = useState(1);
  return (
    <div className="pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[55px] cursor-pointer ">
      <div
        className="select-none title"
        onClick={() => {
          if (title < 10) {
            updateTitle(title + 1);
          } else {
            // updateTitle(1);
          }
        }}
      >
        <div
          className={`title ${
            title === 1 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a1.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 2 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a2.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 3 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a3.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 4 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a4.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 5 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a5.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 6 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a6.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 7 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a7.gif"
          ></img>
        </div>

        <div
          className={`title ${
            title === 8 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a8.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 9 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a9.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 10 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[80vw] lg:w-[850px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <a href="mailto: hi@rachelyeeunkim.com">
            <div className="cursor-pointer absolute left-[45%] top-[32%] w-[48%] h-[8%] "></div>
          </a>
          <Link
            href="https://www.instagram.com/9imyen/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer absolute left-[76%] top-[49%] w-[17%] h-[7%] "></div>
          </Link>
          <div
            onClick={() => {
              updateTitle(1);
            }}
            className="cursor-pointer absolute left-[70%] top-[66%] w-[18%] h-[7%] "
          ></div>
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/a10.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
