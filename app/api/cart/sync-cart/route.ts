// pages/api/sync-cart.ts

import { db } from "@/lib/db";

import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await auth();
  if (!session) return;

  const { cartItems } = await req.json();
  console.log(cartItems);

  try {
    await db.cartItem.deleteMany({
      where: { userId: session.user.id },
    });
    // Insert cart items
    await db.cartItem.createMany({
      data: cartItems.map((item: any) => ({
        userId: session.user.id,
        productId: item.productId,
        quantity: item.quantity,
        price: item.price,
        thumbnail: item.thumbnail,
        title: item.title,
        author: item.author,
      })),
      skipDuplicates: true,
    });

    console.log("test");
    return NextResponse.json(
      { message: "Cart synced successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("pedrski error:", error);
    const err = error as Error;
    return NextResponse.json(
      {
        error: "Error syncing cart with backend",
        message: err.message,
      },
      { status: 400 }
    );
  }
}
