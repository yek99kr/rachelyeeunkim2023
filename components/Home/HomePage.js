import { useRouter } from "next/navigation";
import { HiSearch } from "react-icons/hi";
import { useContext, useRef } from "react";
import { AppContext } from "../../context/AppContext";
import Title from "./Title";

const HomePage = () => {
  const router = useRouter();

  const { searchWord, updateSearchWord } = useContext(AppContext);
  const ref = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const searchWord = ref.current.value;
    const searchWordUppercase = searchWord.toUpperCase();

    updateSearchWord(searchWord);

    document.querySelector(".searchBar").value = searchWord;

    if (searchWordUppercase.includes("WORK")) {
      router.push(`/works`);

      // router.asPath !== "/works" && router.push(`/works`);
    } else if (searchWordUppercase.includes("CUTE" && "DOG")) {
      router.push(`/cute-dogs`, { scroll: false });
    } else if (searchWordUppercase.includes("ABOUT")) {
      router.push(`/about`, { scroll: false });
    } else if (searchWordUppercase.includes("SHOP")) {
      router.push(`/shop`, { scroll: false });
    } else if (searchWordUppercase.includes("HOME")) {
      router.push(`/`, { scroll: false });
    } else if (searchWordUppercase.includes("HOW" && "TO")) {
      router.push(`/how-to`, { scroll: false });
    } else {
      searchWord !== "" && router.push(`/${searchWord},`, { scroll: false });
    }
  };

  return (
    <>
      <Title />
      <img
        src="/searchBar.png"
        className="absolute block sm:hidden w-[430px] left-1/2 top-1/2 -translate-x-[49.5%] translate-y-[-42%]"
      ></img>
      <div className="z-[10]  sm:drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-40%] md:translate-y-[-40%]  w-[390px] h-[43px] sm:w-[500px] sm:h-[50px] text-base sm:text-lg ">
        <form onSubmit={handleSearch}>
          {/* <HiSearch className="absolute right-0 z-10  m-[13px] w-[25px] h-[25px] cursor-pointer text-gray-400 hover:text-gray-900 transition-[0.5s]" /> */}
          <input
            ref={ref}
            type="text"
            name="search"
            className="absolute w-[100%] h-[100%] pl-6 pr-11 rounded-full bg-transparent sm:bg-white"
            placeholder="Search"
          ></input>

          <button
            type="submit"
            className="absolute right-0 z-10 m-[12px] mr-[15px] cursor-pointer text-gray-400 hover:text-gray-900 transition-[0.5s]"
          >
            <HiSearch className="w-[20px] h-[20px] sm:w-[25px] sm:h-[25px]" />
          </button>
        </form>
      </div>
    </>
  );
};

export default HomePage;
