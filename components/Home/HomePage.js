import { useRouter } from "next/router";
import { HiSearch } from "react-icons/hi";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Title from "./Title";

const HomePage = () => {
  const router = useRouter();

  const { searchWord, updateSearchWord } = useContext(AppContext);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchWord = document.getElementById("search").value;
    const searchWordUppercase = searchWord.toUpperCase();

    updateSearchWord(searchWord);

    if (searchWordUppercase.includes("WORK")) {
      router.push(`/works`);
      // router.asPath !== "/works" && router.push(`/works`);
    } else if (searchWordUppercase.includes("CUTE" && "DOG")) {
      router.push(`/cute-dogs`);
    } else if (searchWordUppercase.includes("ABOUT")) {
      router.push(`/about`);
    } else if (searchWordUppercase.includes("SHOP")) {
      router.push(`/shop`);
    } else if (searchWordUppercase.includes("HOME")) {
      router.push(`/`);
    } else {
      searchWord !== "" && router.push(`/${searchWord}`);
    }
  };

  return (
    <>
      <Title />
      <div className="drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-90%] md:translate-y-[-40%]  w-[75vw] h-[43px] sm:w-[500px] sm:h-[50px] text-base sm:text-lg ">
        <form onSubmit={handleSearch}>
          {/* <HiSearch className="absolute right-0 z-10  m-[13px] w-[25px] h-[25px] cursor-pointer text-gray-400 hover:text-gray-900 transition-[0.5s]" /> */}
          <input
            type="text"
            name="search"
            id="search"
            className="absolute w-[100%] h-[100%] pl-3 pr-10 rounded"
            placeholder="Search"
          ></input>
          <button
            type="submit"
            className="absolute right-0 z-10  m-[12px] cursor-pointer text-gray-400 hover:text-gray-900 transition-[0.5s]"
          >
            <HiSearch className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
          </button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
