"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import crossImg from "@/assets/cross.svg";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";

const Checkout = () => {
  const {
    cartItems,

    removeFromCart,
    calculateTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    calculateTotalQuantity,
  } = useCart();
  return (
    <>
      <div className="p-10">
        <div className="flex pt-[7rem] md:pt-[7.5rem]">
          <div className="pr-20">
            <div className="mb-10 mt-6 font-extrabold text-2xl">
              Shopping cart.
            </div>
            <div>
              <div className="flex ">
                <p className="pr-[400px] pl-4">Product</p>
                <p className="pr-[200px]">Quantity</p>
                <p>Total Price</p>
              </div>
              <div className="border-b my-2 border-gray-100 border" />
              <ScrollArea className="h-[445px] w-[1000px]">
                <ul className="my-4">
                  {cartItems.map((item: any) => (
                    <li key={item.id} className="flex my-4 ">
                      <div className="pl-4 flex w-[45%]">
                        <Image
                          className="min-w-[6rem] min-h-[8rem] max-w-[6rem] max-h-[8rem] shadow-lg border border-stone-300"
                          src={item.thumbnail}
                          alt={item.title}
                          width={80}
                          height={80}
                        />
                        <div className="mx-2 max-sm:max-w-[150px] max-w-[220px]">
                          <div className=" font-bold">{item.title}</div>

                          <div className="truncate text-sm text-stone-600">
                            {item.author}
                          </div>
                        </div>
                      </div>
                      <div className="w-[30%] pl-6">
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="hover:opacity-50 text-xl pr-4"
                        >
                          +
                        </button>{" "}
                        {item.quantity}
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="hover:opacity-50 text-xl pl-6 "
                        >
                          -
                        </button>
                      </div>

                      <div className=" w-[20%]">
                        €{(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className="">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive opacity-70 hover:opacity-50"
                        >
                          <Image src={crossImg} alt="cross" height={22} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
              <div className="border-b my-2 border-gray-100 border" />
              <div className="flex my-4  w-full">
                <div className="w-[70%]"></div>
                <div className="w-[25%]">
                  <div className="flex justify-between">
                    <div className="text-gray-500 font-light pb-2">
                      Subtotal:
                    </div>
                    <div>${calculateTotalPrice().toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-500 font-light">Shipping:</div>
                    <div>Free</div>
                  </div>

                  {/* <div className=" border-b my-2 border-gray-100 border" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-6 bg-gray-100">
            <div className="">
              <h2 className="font-extrabold text-2xl">Payment Info.</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
