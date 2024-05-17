import React from "react";
import { categories } from "@/constants/constants";

interface CategoriesProps {
  setCategory: (value: string) => void;
  category: string;
}

const Categories = ({ setCategory, category }: CategoriesProps) => {
  return (
    <>
      <div className="bg-slate-100 h-[51rem] w-1/4 hidden lg:flex flex-col">
        <h2 className="text-left ml-2 text-black font-semibold my-2 ">
          Categories
        </h2>
        {categories.map((item) => (
          <div key={item.value} className="ml-4 text-sm p-[1.5px]">
            <input
              name="category"
              type="radio"
              value={item.value}
              id={item.value}
              checked={category === item.value}
              onChange={(e) => setCategory(e.target.value)}
            />{" "}
            <label htmlFor={item.value} className="ml-1">
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Categories;
