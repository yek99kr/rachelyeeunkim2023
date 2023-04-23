import { createContext, useContext, useState } from "react";

export const AppContext = createContext();
const AppUpdateContext = createContext();

export function useSearch() {
  return useContext(AppContext);
}

// export function useSearchUpdate() {
//   return useContext(AppUpdateContext);
// }

export function AppContextProvider({ children }) {
  const [searchWord, setSearchWord] = useState("");
  const [photo, setPhoto] = useState(true);
  const [title, setTitle] = useState(1);

  function updateSearchWord(word) {
    setSearchWord(word);
  }

  function updatePhoto() {
    setPhoto(!photo);
  }

  function updateTitle(title) {
    setTitle(title);
  }

  return (
    <AppContext.Provider
      value={{
        searchWord,
        updateSearchWord,
        photo,
        updatePhoto,
        title,
        updateTitle,
      }}
    >
      {/* <AppUpdateContext.Provider value={updateSearchWord}> */}
      {children}
      {/* </AppUpdateContext.Provider> */}
    </AppContext.Provider>
  );
}
