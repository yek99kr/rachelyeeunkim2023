import Link from "next/link";
import { useState } from "react";

const Footers = () => {
  const [emailCopyed, isEmailCopyed] = useState(false);
  return (
    <div className="footer flex justify-between w-[100vw] fixed  z-[100] bottom-0 p-3 md:p-4 pl-[2vw] md:pl-[1vw] text-sm lg:text-sm">
      <div className="drop-shadow-[0_0px_2px_white]">
        <Link href="/works">
          <div className={`inline cursor-pointer`}>Works</div>
        </Link>
        <Link href="/about">
          <div
            className={`sm:inline hidden pl-[2vw] md:pl-[0.7vw] cursor-pointer`}
          >
            About
          </div>
        </Link>

        <Link href="https://www.instagram.com/9imyen/">
          <div className={`inline  pl-[2vw] md:pl-[0.7vw]  cursor-pointer`}>
            Instagram
          </div>
        </Link>
        <div className={`inline pl-[2vw] md:pl-[0.7vw] cursor-pointer`}>
          Email
        </div>

        <div className={`inline  pl-[2vw] md:pl-[0.7vw] cursor-pointer`}>
          Searchwords:
        </div>

        <div className="inline pl-[1vw] md:pl-[0.2vw] w-[40vw] ">
          <p className="inline marquee marquee1 marq2 overflow-hidden">
            <span>
              &nbsp;Click anywhere to start &nbsp;✳&nbsp; Click anywhere to
              start &nbsp;✳&nbsp; Click anywhere to start &nbsp;✳&nbsp; Click
              anywhere to start &nbsp;✳&nbsp; Click anywhere to start
              &nbsp;✳&nbsp; Click anywhere to start &nbsp;✳&nbsp; Click anywhere
              to start &nbsp;✳&nbsp;
            </span>
          </p>
          <p className="inline marquee marquee2 marq2 overflow-hidden">
            <span>
              &nbsp;Click anywhere to start &nbsp;✳&nbsp; Click anywhere to
              start &nbsp;✳&nbsp; Click anywhere to start &nbsp;✳&nbsp; Click
              anywhere to start &nbsp;✳&nbsp; Click anywhere to start
              &nbsp;✳&nbsp; Click anywhere to start &nbsp;✳&nbsp; Click anywhere
              to start &nbsp;✳&nbsp;
            </span>
          </p>
        </div>

        {/* <div
          className={`marquee inline pl-[2vw] md:pl-[0.7vw] cursor-pointer font-serif italic`}
        >
          <span>Suggested Searchwords: works, about, cute dogs, shop, etc</span>
        </div>

        <div
          className={`marquee2 inline pl-[2vw] md:pl-[0.7vw] cursor-pointer font-serif italic`}
        >
          <span>Suggested Searchwords: works, about, cute dogs, shop, etc</span>
        </div> */}
      </div>

      <style></style>
    </div>
  );
};

export default Footers;
