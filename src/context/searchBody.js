import React, { createContext, useState } from "react";
import { data } from "../mock/mockApi";

export const BodySearchContext = createContext();
const SearchContext = ({ children }) => {
  const [filter, setFilter] = useState(data);
  return (
    <BodySearchContext.Provider value={[filter, setFilter]}>
      {children}
    </BodySearchContext.Provider>
  );
};

export default SearchContext;
