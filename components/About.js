import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [title, updateTitle] = useState(1);
  return (
    <div className="pl-[2vw] md:pl-[1vw] mt-[80px] mb-[50px] lg:mb-[55px] ">
      <div
        className="select-none title"
        onClick={() => {
          if (title < 2) {
            updateTitle(title + 1);
          } else {
            updateTitle(1);
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
            src="/about/abouthi.png"
          ></img>
        </div>
        <div
          className={`title ${
            title === 2 ? "block" : "hidden"
          } absolute  transition-[0.2s] cursor-pointer w-[95vw] md:w-[760px] self-center left-1/2 top-1/2 -translate-x-1/2 translate-y-[-50%] md:translate-y-[-50%]`}
        >
          <img
            className={`pointer-events-none w-full h-full`}
            src="/about/abouthi.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
