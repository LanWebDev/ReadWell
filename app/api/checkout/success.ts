// pages/api/checkout/success.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import Stripe from "stripe";
import { db } from "@/lib/db";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { session_id } = req.query;

  try {
    const stripeSession = await stripe.checkout.sessions.retrieve(
      session_id as string
    );

    if (stripeSession.payment_status === "paid") {
      const userId = session.user.id;
      const cartItems = await db.cartItem.findMany({ where: { userId } });

      const order = await db.order.create({
        data: {
          userId,
          totalPrice: stripeSession.amount_total! / 100,
          items: {
            create: cartItems.map((item) => ({
              productId: item.productId,
              quantity: item.quantity,
            })),
          },
        },
      });

      // Clear cart after successful order
      await db.cartItem.deleteMany({ where: { userId } });

      res.status(200).json({ order });
    } else {
      res.status(400).json({ error: "Payment not completed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to process order" });
  }
}
