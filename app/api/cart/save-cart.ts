// pages/api/cart.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = session.user;

  if (req.method === "POST") {
    const { productId, quantity } = req.body;

    try {
      const cartItem = await db.cartItem.create({
        data: {
          userId: user.id,
          productId,
          quantity,
        },
      });

      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ error: "Error adding to cart" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
