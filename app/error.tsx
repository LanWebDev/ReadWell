"use client";
import { Button } from "@/components/ui/button";
import { TriangleAlertIcon } from "lucide-react";
import { Butterfly_Kids } from "next/font/google";
import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center align-middle">
      <div className="bg-destructive/15 p-3 rounded-md flex justify-center align-middle text-destructive items-center flex-col w-[20rem] h-[15rem] gap-4">
        <TriangleAlertIcon className="h-10 w-10" />
        <p>Something went wrong!</p>
        <Button variant={"destructive"}>
          <Link href={"/"}>Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default error;
