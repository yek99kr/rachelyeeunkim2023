// import { useContext } from "react";

import { useRouter } from "next/router";

// import { AppContext } from "../context/AppContext";

export default function noPage() {
  // const { searchWord } = useContext(AppContext);
  // console.log(searchWord);

  return (
    <div className="absolute text-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[70%] w-[70vw]">
      <p className="text-xl font-semibold pb-5">No Results Found</p>
      <p>
        Try searching for something else. Look at the bottom of
        <br className="hidden md:block" /> the screen to see some suggested
        search words.
      </p>
    </div>
  );
}
