"use client";
import React, { useState } from "react";
import { Input } from "./shadcn/input";

const CvvInput = () => {
  const [value, setValue] = useState("");

  function updateValue(value: any) {
    const sanitizedValue = value
      .replace(/[^\d]/g, "")
      .slice(0, 3)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setValue(sanitizedValue);
  }

  return (
    <div>
      <label className="text-gray-400 text-sm my-1">CVV:</label>
      <Input
        type="text"
        value={value}
        placeholder="123"
        onChange={(e) => updateValue(e.target.value)}
        required
        className="max-w-[60px]"
      />
    </div>
  );
};

export default CvvInput;
