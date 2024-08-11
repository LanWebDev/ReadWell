"use client";
import React, { useState } from "react";
import { Input } from "./shadcn/input";

const CardNumberInput = () => {
  const [value, setValue] = useState("");

  function updateValue(value: any) {
    const sanitizedValue = value
      .replace(/[^\d]/g, "")
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setValue(sanitizedValue);
  }

  return (
    <div className="mt-10">
      <label className="text-gray-400 text-sm my-1">Card Number:</label>
      <Input
        type="text"
        value={value}
        placeholder="1234 1234 1234 1234"
        onChange={(e) => updateValue(e.target.value)}
        required
        className="max-w-[200px]"
      />
    </div>
  );
};

export default CardNumberInput;
