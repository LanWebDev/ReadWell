"use client";
import axios from "axios";
import React, { useState } from "react";

interface headerProps {
  data: any;
  fetchBooks: () => void;
}

const Header = ({ data, fetchBooks }: headerProps) => {
  return (
    <>
      <div className="bg-black text-white " onClick={() => fetchBooks()}>
        Header
      </div>
      <div></div>
    </>
  );
};

export default Header;
