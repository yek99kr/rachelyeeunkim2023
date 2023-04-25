import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";
import { HiSearch } from "react-icons/hi";
import { AppContext } from "../context/AppContext";

const SearchBar = () => {
  const { searchWord, updateSearchWord } = useContext(AppContext);

  const router = useRouter();
  const ref = useRef();

  // const currentValue = ref.current.value?;
  // console.log(ref.current && ref.current.value);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchWord = ref.current.value;
    const searchWordUppercase = searchWord.toUpperCase();

    updateSearchWord(searchWord);

    if (searchWordUppercase.includes("WORK")) {
      router.push(`/works`, { scroll: false });
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
      searchWord !== "" && router.push(`/${searchWord}`, { scroll: false });
    }
  };

  return (
    <>
      <div className="z-[1000] fixed drop-shadow-[0_0px_4px_rgba(0,0,0,0.15)] left-[2vw] md:left-[1vw] top-[15px] w-[96vw] md:w-[98vw] lg:w-[32vw] h-[43px] md:h-[50px] text-lg ">
        <Link href="/" passHref scroll={false}>
          <div className="absolute rounded-full z-10 m-[9px] md:ml-[12px] md:m-[10px] w-[26px] md:w-[30px] aspect-square ">
            <img className="w-[96%]" src="/R.png"></img>
          </div>
        </Link>

        <form onSubmit={handleSearch}>
          <input
            ref={ref}
            type="text"
            name="search"
            defaultValue={searchWord}
            className="searchBar absolute w-[100%] h-[100%] pl-[47px] md:pl-[49px] pr-[45px] rounded-full"
            placeholder="Search"
          ></input>
          <button
            type="submit"
            className="absolute right-0 z-10  m-[11px] md:m-[12px] cursor-pointer text-gray-400 hover:text-gray-900 transition-[0.5s]"
          >
            <HiSearch className="w-[21px] h-[21px] md:w-[25px] md:h-[25px]" />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
