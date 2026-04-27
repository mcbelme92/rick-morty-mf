import { useState } from "react";

const initialFilters = {
  page: 1,
  name: "",
  status: "",
  species: "",
};

export function useCharacterFilters() {
  const [filters, setFilters] = useState(initialFilters);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      page: 1,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const setPage = (page) => {
    setFilters((prev) => ({
      ...prev,
      page,
    }));
  };

  return {
    filters,
    handleChange,
    resetFilters,
    setPage,
  };
}
