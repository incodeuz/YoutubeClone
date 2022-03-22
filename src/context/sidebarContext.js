import React, { createContext, useState } from "react";

export const ButtonContext = createContext();

const SidebarContext = ({ children }) => {
  const [logo, setLogo] = useState(true);

  return (
    <ButtonContext.Provider value={[logo, setLogo]}>
      {children}
    </ButtonContext.Provider>
  );
};

export default SidebarContext;
