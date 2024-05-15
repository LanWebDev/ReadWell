"use client";
import React, { useRef } from "react";
import { Input } from "./input";
import debounce from "lodash/debounce";
import { throttle } from "lodash";

interface SearchInputProps {
  setSearch: (value: string) => void;
  setPage: (value: number) => void;
  setDisplayItems: (value: number) => void;
  search: string;
}

const SearchInput = ({
  setSearch,
  search,
  setPage,
  setDisplayItems,
}: SearchInputProps) => {
  function handleSubmit(event: any) {
    if (event.keyCode === 13) {
      console.log(event.target.value);
    }
  }

  const handleInputChange = debounce((e) => {
    setSearch(e.target.value);
    setPage(1);
    setDisplayItems(0);
  }, 1000);
  return (
    <Input
      type="text"
      placeholder="search books"
      className="text-black  sm:max-w-[35rem] lg:max-w-[50rem] mx-auto border-gray-300 outline-none"
      onChange={handleInputChange}
      onKeyDown={(event) => {
        handleSubmit(event);
      }}
    />
  );
};

export default SearchInput;
