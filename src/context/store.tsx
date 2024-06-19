"use client";

import React, { SetStateAction } from "react";

type ContextProps = {
  isMenuClicked: boolean;
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = React.createContext<ContextProps>({
  isMenuClicked: false,
  setIsMenuClicked: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isMenuClicked,
        setIsMenuClicked,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => React.useContext(GlobalContext);
