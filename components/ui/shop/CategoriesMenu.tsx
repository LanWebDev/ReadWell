import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

import { categories } from "@/constants/constants";
import categoryMenu from "@/assets/categoryMenu.png";
import Image from "next/image";

interface CategoriesMenuProps {
  setCategory: (value: string) => void;
  category: string;
}

const CategoriesMenu = ({ setCategory, category }: CategoriesMenuProps) => {
  return (
    <div className="hidden max-lg:flex max-sm:mx-3 mr-auto">
      <DropdownMenu>
        <DropdownMenuTrigger className="">
          <Image
            src={categoryMenu}
            alt="Category menu"
            className=" min-h-8 min-w-8 h-8 w-8"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="grid grid-cols-2">
          {categories.map((item) => (
            <DropdownMenuItem key={item.value}>
              <div className="text-sm">
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
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CategoriesMenu;
