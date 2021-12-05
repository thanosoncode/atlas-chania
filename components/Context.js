import React, { useState, useContext } from "react";

const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };
  const value = {
    showMenu,
    setShowMenu,
    closeMenu,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGlobalContext = () => {
  return useContext(Context);
};
