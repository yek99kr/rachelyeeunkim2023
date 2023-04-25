import Link from "next/link";
import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Menu = () => {
  const { searchWord, updateSearchWord } = useContext(AppContext);
  return (
    <div className="flex justify-between  flex-row flex-nowrap sm:hidden font-[500] mt-[4px] w-[100vw] fixed z-[100] top-[60px] p-3 pl-[2vw] pr-[2vw] text-[2.9vw]">
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
          className={`inline cursor-pointer border-[1.2px] border-gray-200 rounded-full p-[2vw] bg-white`}
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
          className={`inline cursor-pointer border-[1.2px] border-gray-200 rounded-full p-[2vw] bg-white`}
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
          className={`inline cursor-pointer border-[1.2px] border-gray-200 rounded-full p-[2vw] bg-white`}
        >
          Instagram
        </div>
      </Link>
      <a href="mailto: hi@rachelyeeunkim.com">
        <div
          className={`inline cursor-pointer border-[1.2px] border-gray-200 rounded-full p-[2vw] bg-white`}
        >
          Email
        </div>
      </a>

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
          className={`inline cursor-pointer border-[1.2px] border-gray-200 rounded-full p-[2vw] bg-white`}
        >
          Cute dogs
        </div>
      </Link>

      <Link
        onClick={() => {
          updateSearchWord("cute dogs");
          document.querySelector(".searchBar").value = "cute dogs";
        }}
        href="/how-to"
        passHref
        scroll={false}
      >
        <div
          className={`inline cursor-pointer border-[1.2px] border-gray-200 rounded-full p-[2vw] bg-white`}
        >
          How to
        </div>
      </Link>
      {/* <Link
        onClick={() => {
          updateSearchWord("cute dogs");
          document.querySelector(".searchBar").value = "cute dogs";
        }}
        href="/how-to"
        passHref
        scroll={false}
      >
        <div
          className={`inline cursor-pointer border-[1.2px] border-gray-200 rounded-full p-[10px] bg-white`}
        >
          Shop
        </div>
      </Link> */}

      <style></style>
    </div>
  );
};

export default Menu;
