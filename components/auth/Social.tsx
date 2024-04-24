"use client";
import { DEFUALT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFUALT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex flex-row">
      <Button
        onClick={() => onClick("google")}
        variant={"outline"}
        className="text-black bg-white border border-black/30 hover:border-black   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center   justify-center w-full mr-2 hover:bg-white"
      >
        <Image
          src={"https://www.svgrepo.com/show/475656/google-color.svg"}
          alt="google icon"
          width={20}
          height={20}
          className="w-4 h-4 me-2"
        />
        Google
      </Button>
      <Button
        onClick={() => onClick("github")}
        variant={"outline"}
        className="text-white bg-[#24292F] hover:bg-[#24292F]/90    font-medium rounded-lg text-sm px-5 py-2.5 text-center  inline-flex items-center  dark:hover:bg-[#050708]/30  justify-center w-full hover:text-white"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
            clipRule="evenodd"
          />
        </svg>
        Github
      </Button>
    </div>
  );
};

export default Social;
