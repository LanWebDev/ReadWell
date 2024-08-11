import React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

const ExpirationDates = () => {
  return (
    <div>
      <label className="text-gray-400 text-sm my-1">Expiration Date:</label>
      <div className="flex space-x-2">
        <Select required>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="January">01</SelectItem>
            <SelectItem value="February">02</SelectItem>
            <SelectItem value="March">03</SelectItem>
            <SelectItem value="April">04</SelectItem>
            <SelectItem value="May">05</SelectItem>
            <SelectItem value="June">06</SelectItem>
            <SelectItem value="July">07</SelectItem>
            <SelectItem value="August">08</SelectItem>
            <SelectItem value="September">09</SelectItem>
            <SelectItem value="October">10</SelectItem>
            <SelectItem value="November">11</SelectItem>
            <SelectItem value="December">12</SelectItem>
          </SelectContent>
        </Select>
        <Select required>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2026">2026</SelectItem>
            <SelectItem value="2027">2027</SelectItem>
            <SelectItem value="2028">2028</SelectItem>
            <SelectItem value="2029">2029</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ExpirationDates;
