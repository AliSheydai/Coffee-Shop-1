import React, { createContext, useContext, useState } from "react";

const ClearBtnContext = createContext();

export const UseClearBtnContext = () => {
  const ctx = useContext(ClearBtnContext);
  if (!ctx) throw new Error("useClearBtnContext must be inside ClearBtnProvider");
  return ctx;
};

export const ClearBtnProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    beanType: [],
    origin: [],
    roastLevel: [],
    coffeeType: [],
    flavor: [],
    packaging: [],
    brand: [],
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const clearFilters = () => {
    setSelectedFilters({
      beanType: [],
      origin: [],
      roastLevel: [],
      coffeeType: [],
      flavor: [],
      packaging: [],
      brand: [],
    });
    setPriceRange([0, 100]);
  };

  const toggleFilter = (category, value) => {
    setSelectedFilters((prev) => {
      const list = prev[category] || [];
      return {
        ...prev,
        [category]: list.includes(value)
          ? list.filter((i) => i !== value)
          : [...list, value],
      };
    });
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <ClearBtnContext.Provider
      value={{ selectedFilters, priceRange, setPriceRange, toggleFilter, clearFilters, isFilterOpen, setIsFilterOpen }}
    >
      {children}
    </ClearBtnContext.Provider>
  );
};
