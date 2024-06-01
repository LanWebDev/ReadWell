import React from "react";
import { InfiniteMovingCards } from "../InfiniteMovingCards";
import { reviews } from "@/constants/constants";

const Feedback = () => {
  return (
    <div className="my-10">
      <h2 className="text-3xl sm:text-4xl font-bold m-6 text-center md:text-left">
        What our <span className="text-blue-600">costumers</span> say
      </h2>
      <div>
        <InfiniteMovingCards items={reviews} direction="left" speed="slow" />
      </div>
    </div>
  );
};

export default Feedback;
