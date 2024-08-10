import { Button } from "@/components/ui/shadcn/button";
import Link from "next/link";
import React from "react";
import checkMark from "@/assets/checkmark.svg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="mt-[7rem] flex flex-col justify-center items-center w-full">
        <Image
          src={checkMark}
          alt={"checkmark"}
          height={75}
          className="mt-10 "
        />
        <h1 className="font-extrabold text-2xl md:text-5xl my-6">
          Thank you for your order!
        </h1>
        <div className="text-sm text-black/60 mb-6">
          Your order has been placed and is being processed.
        </div>
        <Button className="bg-green-500 hover:bg-green-500/70 md:p-6 md:text-base">
          <Link href={"/profile/orders"}>View your orders</Link>
        </Button>
      </div>
    </>
  );
};

export default page;
