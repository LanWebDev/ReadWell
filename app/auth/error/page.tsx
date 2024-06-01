import { Button } from "@/components/ui/shadcn/button";
import { TriangleAlertIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const AuthErrorPage = () => {
  return (
    <div className="pt-[6.5rem] flex justify-center ">
      <div className="shadow-md bg-destructive/15 w-[400px] h-[250px] mt-[30%] rounded-xl">
        <div className="flex justify-center items-center mt-10">
          <TriangleAlertIcon className="text-destructive scale-[2]" />
        </div>
        <h2 className="py-6 text-center text-black/80">
          Oops! Something went wrong!
        </h2>
        <Link
          href={"/auth/signin"}
          className="flex justify-center items-center pt-8"
        >
          <Button className="" variant={"link"}>
            Back to login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default AuthErrorPage;
