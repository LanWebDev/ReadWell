import React from "react";
import { RadioGroup, Radio } from "@nextui-org/radio";

const Categories = () => {
  return (
    <div className="bg-slate-100 h-[50rem] w-1/4 hidden lg:flex flex-col">
      <h2 className="text-left ml-2 text-black font-semibold mt-2 ">
        Categories
      </h2>
      <RadioGroup>
        <Radio value="buenos-aires">Buenos Aires</Radio>
        <Radio value="sydney">Sydney</Radio>
        <Radio value="san-francisco">San Francisco</Radio>
        <Radio value="london">London</Radio>
        <Radio value="tokyo">Tokyo</Radio>
      </RadioGroup>
    </div>
  );
};

export default Categories;
