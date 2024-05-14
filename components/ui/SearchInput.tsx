"use client";
import React from "react";
import { Input } from "./input";

interface SearchInputProps {
  setSearch: (value: string) => void;
  search: string;
}

const SearchInput = ({ setSearch, search }: SearchInputProps) => {
  function handleSubmit(event: any) {
    if (event.keyCode === 13) {
      console.log(event.target.value);
    }
  }

  return (
    <Input
      type="text"
      placeholder="search books"
      className="text-black  sm:max-w-[35rem] lg:max-w-[50rem] mx-auto border-gray-300 outline-none"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(event) => {
        handleSubmit(event);
      }}
    />
  );
};

export default SearchInput;
