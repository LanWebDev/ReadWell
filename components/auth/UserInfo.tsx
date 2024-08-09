"use client";
import { ExtendedUser } from "@/next-auth";
import { Button } from "../ui/shadcn/button";
import Link from "next/link";
import orderIcon from "@/assets/orders.svg";
import Image from "next/image";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <div className="flex justify-center mt-10 ">
      <div className="w-[600px] p-3 shadow-lg rounded-sm">
        <h2 className="font-semibold text-center text-2xl mb-3">{label}</h2>
        <div className="space-y-4">
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">ID</p>
            <p className="truncate text-xs max-w-[180px font-mono p-1 bg-slate-100 rounded-md]">
              {user?.id}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Name</p>
            <p className="truncate text-xs max-w-[180px font-mono p-1 bg-slate-100 rounded-md]">
              {user?.name}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Email</p>
            <p className="truncate text-xs max-w-[180px font-mono p-1 bg-slate-100 rounded-md]">
              {user?.email}
            </p>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
            <p className="text-sm font-medium">Role</p>
            <p className="truncate text-xs max-w-[180px font-mono p-1 bg-slate-100 rounded-md]">
              {user?.role}
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-6 mb-2">
          <Button className="bg-green-400 hover:bg-green-400/70 w-[200px] text-base text-black font-bold">
            <div className="flex w-full justify-center space-x-3">
              <Image
                src={orderIcon}
                alt={"order icon"}
                height={20}
                className=""
              />
              <Link href={"/profile/orders"} className="">
                My Orders
              </Link>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
