import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";


interface Filters {
  category: string;
  minPrice: number;
}

interface FilterContextProps {
  filters: Filters;
  setFilters: Dispatch<SetStateAction<Filters>>;
}

const FilterContext = createContext<FilterContextProps | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({ category: 'all', minPrice: 0 });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFilters = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
}