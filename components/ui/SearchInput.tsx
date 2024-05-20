"use client";
import React from "react";
import { Input } from "./input";
import debounce from "lodash/debounce";

interface SearchInputProps {
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setDisplayItems: (value: number) => void;
}

const SearchInput = ({
  setSearch,
  setPage,
  setDisplayItems,
}: SearchInputProps) => {
  function handleSubmit(event: any) {
    if (event.key === "Enter") {
      setSearch(event.target.value);
    }
  }

  const handleInputChange = debounce((e) => {
    setSearch(e.target.value);
    setPage(1);
    setDisplayItems(0);
  }, 500);
  return (
    <Input
      type="text"
      placeholder="search books"
      className="text-black  sm:max-w-[35rem] lg:max-w-[50rem] mx-2 sm:mx-auto border-gray-300 outline-none"
      onChange={handleInputChange}
      onKeyDown={(event) => {
        handleSubmit(event);
      }}
    />
  );
};

export default SearchInput;
