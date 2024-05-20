"use client";

import { signOut } from "next-auth/react";
import { ReactNode } from "react";

interface LogoutButtonProps {
  children?: ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    signOut();
  };

  return (
    <button type="submit" onClick={onClick} className="cursor-pointer w-full">
      {children}
    </button>
  );
};
