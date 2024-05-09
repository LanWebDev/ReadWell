"use client";
import React, { useState } from "react";
import { Input } from "./input";
import useBooks from "@/hooks/useBooks";

const SearchInput = () => {
  const { setSearch, search } = useBooks();

  function handleSubmit(event: any) {
    if (event.keyCode === 13) {
      console.log(event.target.value);
    }
  }

  return (
    <Input
      type="text"
      placeholder="search books"
      className="text-black max-w-[30rem] hidden sm:block mx-auto border-gray-300 outline-none"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(event) => {
        handleSubmit(event);
      }}
    />
  );
};

export default SearchInput;
