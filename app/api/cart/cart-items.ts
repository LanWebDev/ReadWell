// pages/api/cart-items.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { db } from "@/lib/db";
import { auth } from "@/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await auth();

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = session.user;

  if (req.method === "GET") {
    try {
      const cartItems = await db.cartItem.findMany({
        where: { userId: user.id },
        include: { product: true },
      });

      res.status(200).json(cartItems);
    } catch (error) {
      res.status(500).json({ error: "Error fetching cart items" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
