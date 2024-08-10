// pages/api/cart/user-cart.ts

import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return;

  const userId = session.user.id;

  try {
    const orders = await db.order.findMany({
      where: { userId },
      include: {
        items: true,
      },
    });

    console.log(orders);
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    const err = error as Error;
    return NextResponse.json(
      {
        error: "Error fetching orders",
        message: err.message,
      },
      { status: 500 }
    );
  }
}
