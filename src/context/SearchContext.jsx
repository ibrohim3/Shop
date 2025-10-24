import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchCounts, setSearchCounts] = useState(
    JSON.parse(localStorage.getItem("searchCounts")) || {}
  );

  useEffect(() => {
    localStorage.setItem("searchCounts", JSON.stringify(searchCounts));
  }, [searchCounts]);

  // Qidiruv so'zini hisoblash
  const addSearch = (query) => {
    if (!query.trim()) return;
    setSearchCounts((prev) => ({
      ...prev,
      [query]: (prev[query] || 0) + 1,
    }));
  };

  return (
    <SearchContext.Provider value={{ searchCounts, addSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
