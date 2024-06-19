"use client";

import React, { SetStateAction } from "react";

type ContextProps = {
  isMenuClicked: boolean;
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
  isScrolled: boolean;
  setIsScrolled: React.Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = React.createContext<ContextProps>({
  isMenuClicked: false,
  setIsMenuClicked: () => {},
  isScrolled: false,
  setIsScrolled: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isMenuClicked,
        setIsMenuClicked,
        isScrolled,
        setIsScrolled,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => React.useContext(GlobalContext);
