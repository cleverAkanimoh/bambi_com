"use client";

import React, { SetStateAction } from "react";

type ContextProps = {
  isMenuClicked: boolean;
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
  isCartClicked: boolean;
  setIsCartClicked: React.Dispatch<SetStateAction<boolean>>;
};

const GlobalContext = React.createContext<ContextProps>({
  isMenuClicked: false,
  setIsMenuClicked: () => {},
  isCartClicked: false,
  setIsCartClicked: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [isMenuClicked, setIsMenuClicked] = React.useState(false);
  const [isCartClicked, setIsCartClicked] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isMenuClicked,
        setIsMenuClicked,
        isCartClicked,
        setIsCartClicked,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

export const useGlobalContext = () => React.useContext(GlobalContext);
