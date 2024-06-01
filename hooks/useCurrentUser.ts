import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const useCurrentUser = () => {
  const session = useSession();

  useEffect(() => {
    if (!session.data?.user) {
      localStorage.removeItem("cartItems");
    } else return;
  }, [session]);

  return session.data?.user;
};
