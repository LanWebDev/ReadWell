// pages/api/create-order.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { db } from "@/lib/db";

interface CreateOrderRequest extends NextApiRequest {
  body: {
    items: Array<{ productId: number; quantity: number }>;
    totalPrice: number;
  };
}

export default async function handler(
  req: CreateOrderRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const user = session.user;

  if (req.method === "POST") {
    const { items, totalPrice } = req.body;

    if (!user?.id || typeof totalPrice !== "number") {
      return res.status(400).json({ message: "Invalid data" });
    }

    try {
      const order = await db.order.create({
        data: {
          userId: user.id,
          totalPrice,
          items: {
            create: items.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
            })),
          },
        },
      });

      // Clear cart after creating the order
      await db.cartItem.deleteMany({ where: { userId: user.id } });

      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: "Error creating order" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
