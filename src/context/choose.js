import React, { createContext, useState } from "react";

export const BodyContext = createContext();

const ChooseContext = ({ children }) => {
  const [click, setClick] = useState("");
  return (
    <BodyContext.Provider value={[click, setClick]}>
      {children}
    </BodyContext.Provider>
  );
};

export default ChooseContext;
