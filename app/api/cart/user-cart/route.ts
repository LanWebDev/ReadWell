// pages/api/cart/user-cart.ts

import { db } from "@/lib/db";
import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await auth();
  if (!session) return;

  const userId = session.user.id;

  try {
    const cartItems = await db.cartItem.findMany({
      where: { userId },
    });

    console.log(cartItems);
    return NextResponse.json(cartItems, { status: 200 });
  } catch (error) {
    console.error("Error fetching user cart:", error);
    const err = error as Error;
    return NextResponse.json(
      {
        error: "Error fetching user cart",
        message: err.message,
      },
      { status: 500 }
    );
  }
}
