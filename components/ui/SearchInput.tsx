"use client";
import React, { useState } from "react";
import { Input } from "./input";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  function handleSubmit() {}

  return (
    <Input
      type="text"
      placeholder="search books"
      className="text-black max-w-[30rem] hidden sm:block mx-auto border-gray-300 outline-none"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onSubmit={handleSubmit}
    />
  );
};

export default SearchInput;
