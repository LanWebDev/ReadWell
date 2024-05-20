"use client";

import { UserInfo } from "@/components/auth/UserInfo";
import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const ProfilePage = () => {
  const user = useCurrentUser();

  const onClick = () => {
    signOut();
  };

  if (!user?.name)
    return (
      <div className="pt-[10rem] flex flex-col justify-center items-center">
        <p className=" text-xl text-black/70">Please refresh the page!</p>
        <Loading className="w-[4rem]" />
      </div>
    );

  return (
    <div className=" pt-[6.5rem] ">
      <UserInfo label="Profile" user={user} />
      <div className="bg-white p-10 justify-center flex">
        <Button type="submit" onClick={onClick}>
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
