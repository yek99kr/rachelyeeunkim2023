import Link from "next/link";
import { useState } from "react";

const About = () => {
  const [title, updateTitle] = useState(1);
  return (
    <div className="pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[55px] ">
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
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about1.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 2 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about2.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 3 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about3.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 4 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about4.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 5 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about5.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 6 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about6.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 7 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about7.gif"
          ></img>
        </div>

        <div
          className={`title ${
            title === 8 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about8.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 9 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about9.png"
          ></img>
        </div>

        <div
          className={`title ${
            title === 10 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <div className="cursor-pointer absolute left-[42%] top-[30%] w-[48%] h-[8%] "></div>
          <Link
            href="https://www.instagram.com/9imyen/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="cursor-pointer absolute left-[73%] top-[45%] w-[15%] h-[7%] "></div>
          </Link>
          <div
            onClick={() => {
              updateTitle(1);
            }}
            className="cursor-pointer absolute left-[70%] top-[62%] w-[18%] h-[7%] "
          ></div>
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/about10.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
