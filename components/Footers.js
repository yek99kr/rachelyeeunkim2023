import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footers = () => {
  const { searchWord, updateSearchWord } = useContext(AppContext);
  return (
    <div className="footer flex w-[100vw] fixed z-[100] bottom-0 p-3 md:p-4 pl-[0.8rem] md:pl-[1rem] text-sm lg:text-sm">
      <div className="drop-shadow-[0_0px_2px_white] ">
        <div className="inline-block w-[6.3rem] sm:w-[21.6rem] h-[1rem]">
          <Link
            onClick={() => {
              // updateSearchWord("works");
              // document.querySelector(".searchBar").value = "works";
            }}
            href="/"
            passHref
            scroll={false}
          >
            <div
              className={`sm:hover:font-['Bellota'] sm:hover:text-[0.925rem] inline cursor-pointer`}
            >
              Home
            </div>
          </Link>
          <Link
            onClick={() => {
              updateSearchWord("works");
              document.querySelector(".searchBar").value = "works";
            }}
            href="/works"
            passHref
            scroll={false}
          >
            <div
              className={`sm:hover:font-['Bellota'] sm: hover:text-[0.88rem]  inline pl-[0.6rem] md:pl-[0.6rem] cursor-pointer`}
            >
              Works
            </div>
          </Link>

          <Link
            onClick={() => {
              updateSearchWord("about");
              document.querySelector(".searchBar").value = "about";
            }}
            href="/about"
            passHref
            scroll={false}
          >
            <div
              className={`sm:hover:font-['Bellota'] sm: hover:text-[0.88rem]  sm:inline hidden pl-[0.6rem] md:pl-[0.6rem] cursor-pointer`}
            >
              About
            </div>
          </Link>

          <Link
            href="https://www.instagram.com/9imyen/"
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={`sm:hover:font-['Bellota'] sm:hover:text-[0.89rem]  hidden sm:inline  pl-[0.6rem] md:pl-[0.6rem]  cursor-pointer`}
            >
              Instagram
            </div>
          </Link>
          <a href="mailto: hi@rachelyeeunkim.com">
            <div
              className={`sm:hover:font-['Bellota'] sm:hover:text-[0.855rem] hidden sm:inline pl-[0.6rem] md:pl-[0.6rem] cursor-pointer`}
            >
              Email
            </div>
          </a>

          {/* <div
          className={` hidden sm:inline pl-[0.6rem] md:pl-[0.6rem] cursor-pointer`}
        >
          How to
        </div>

        <div
          className={` hidden sm:inline pl-[0.6rem] md:pl-[0.6rem] cursor-pointer`}
        >
          Cute dogs
        </div> */}
          <Link
            onClick={() => {
              updateSearchWord("cute dogs");
              document.querySelector(".searchBar").value = "cute dogs";
            }}
            href="/cute-dogs"
            passHref
            scroll={false}
          >
            <div
              className={`sm:hover:font-['Bellota'] sm:hover:text-[0.9rem] hidden sm:inline pl-[0.6rem] md:pl-[0.6rem] cursor-pointer`}
            >
              Cute dogs
            </div>
          </Link>
        </div>
        <div className={`inline cursor-pointer sm:pl-[0.3rem]`}>
          Searchwords:
        </div>
        <div className="inline pl-[1vw] md:pl-[0.2vw] ">
          <p className="inline marquee marquee1 marq2  overflow-hidden ">
            <span>
              &nbsp; works &nbsp;&#x2734;&#xFE0E;&nbsp; about
              &nbsp;&#x2734;&#xFE0E;&nbsp; cute dogs
              &nbsp;&#x2734;&#xFE0E;&nbsp; how to &nbsp;&#x2734;&#xFE0E;&nbsp;
              shop &nbsp;&#x2734;&#xFE0E;&nbsp; works
              &nbsp;&#x2734;&#xFE0E;&nbsp; about &nbsp;&#x2734;&#xFE0E;&nbsp;
              cute dogs &nbsp;&#x2734;&#xFE0E;&nbsp; how to
              &nbsp;&#x2734;&#xFE0E;&nbsp; shop
              &nbsp;&#x2734;&#xFE0E;&nbsp;works &nbsp;&#x2734;&#xFE0E;&nbsp;
              about &nbsp;&#x2734;&#xFE0E;&nbsp; cute dogs
              &nbsp;&#x2734;&#xFE0E;&nbsp; how to &nbsp;&#x2734;&#xFE0E;&nbsp;
              shop &nbsp;&#x2734;&#xFE0E;&nbsp; works
              &nbsp;&#x2734;&#xFE0E;&nbsp; about &nbsp;&#x2734;&#xFE0E;&nbsp;
              cute dogs &nbsp;&#x2734;&#xFE0E;&nbsp; how to
              &nbsp;&#x2734;&#xFE0E;&nbsp; shop &nbsp;&#x2734;&#xFE0E;&nbsp;
              works &nbsp;&#x2734;&#xFE0E;&nbsp; about
              &nbsp;&#x2734;&#xFE0E;&nbsp; cute dogs
              &nbsp;&#x2734;&#xFE0E;&nbsp; how to &nbsp;&#x2734;&#xFE0E;&nbsp;
              shop &nbsp;&#x2734;&#xFE0E;&nbsp;
            </span>
          </p>
          <p className="inline marquee marquee2 marq2 overflow-hidden">
            <span>
              &nbsp; works &nbsp;&#x2734;&#xFE0E;&nbsp; about
              &nbsp;&#x2734;&#xFE0E;&nbsp; cute dogs
              &nbsp;&#x2734;&#xFE0E;&nbsp; how to &nbsp;&#x2734;&#xFE0E;&nbsp;
              shop &nbsp;&#x2734;&#xFE0E;&nbsp; works
              &nbsp;&#x2734;&#xFE0E;&nbsp; about &nbsp;&#x2734;&#xFE0E;&nbsp;
              cute dogs &nbsp;&#x2734;&#xFE0E;&nbsp; how to
              &nbsp;&#x2734;&#xFE0E;&nbsp; shop
              &nbsp;&#x2734;&#xFE0E;&nbsp;works &nbsp;&#x2734;&#xFE0E;&nbsp;
              about &nbsp;&#x2734;&#xFE0E;&nbsp; cute dogs
              &nbsp;&#x2734;&#xFE0E;&nbsp; how to &nbsp;&#x2734;&#xFE0E;&nbsp;
              shop &nbsp;&#x2734;&#xFE0E;&nbsp; works
              &nbsp;&#x2734;&#xFE0E;&nbsp; about &nbsp;&#x2734;&#xFE0E;&nbsp;
              cute dogs &nbsp;&#x2734;&#xFE0E;&nbsp; how to
              &nbsp;&#x2734;&#xFE0E;&nbsp; shop &nbsp;&#x2734;&#xFE0E;&nbsp;
              works &nbsp;&#x2734;&#xFE0E;&nbsp; about
              &nbsp;&#x2734;&#xFE0E;&nbsp; cute dogs
              &nbsp;&#x2734;&#xFE0E;&nbsp; how to &nbsp;&#x2734;&#xFE0E;&nbsp;
              shop &nbsp;&#x2734;&#xFE0E;&nbsp;
            </span>
          </p>
        </div>
        {/* <div
          className={`marquee inline pl-[0.6rem] md:pl-[0.7vw] cursor-pointer font-serif italic`}
        >
          <span>Suggested Searchwords: works, about, cute dogs, shop, etc</span>
        </div>

        <div
          className={`marquee2 inline pl-[0.6rem] md:pl-[0.7vw] cursor-pointer font-serif italic`}
        >
          <span>Suggested Searchwords: works, about, cute dogs, shop, etc</span>
        </div> */}
      </div>

      <style></style>
    </div>
  );
};

export default Footers;
