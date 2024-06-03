"use client";
import { User } from "lucide-react";
import { LogOut, UserCog } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { LogoutButton } from "./LogoutButton";
import Link from "next/link";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="hidden lg:flex mx-auto lg:mr-4 border-blue-400 border-[2px] ">
          <AvatarImage src={user?.image || ""} className="hover:opacity-70" />
          <AvatarFallback className="bg-white  ">
            <User className="hover:text-black/50 " />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 ">
        <Link href={"/profile"}>
          <DropdownMenuItem className="cursor-pointer">
            <UserCog className="w-4 mr-2"></UserCog>
            Profile
          </DropdownMenuItem>
        </Link>
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
