"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
import { Button } from "@/components/ui/shadcn/button";

import angleLeftIcon from "@/assets/1608508_angle_left_icon.svg";
import crossImg from "@/assets/cross.svg";
import creditCard from "@/assets/credit-card.svg";
import paypalLogo from "@/assets/paypal.svg";
import { Input } from "@/components/ui/shadcn/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

const Checkout = () => {
  const router = useRouter();
  const {
    cartItems,

    removeFromCart,
    calculateTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsProcessing(true);
    } else {
      setIsProcessing(false);
    }
  }, [cartItems]);

  const handleCheckout = async () => {
    setIsProcessing(true);

    try {
      await axios.post(`/api/orders/checkout`, {
        items: cartItems,
        totalPrice: calculateTotalPrice(),
      });

      clearCart();

      router.push("profile/orders");
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="flex pt-[7rem] md:pt-[7.5rem]">
          <div className="pr-20">
            <h2 className="mb-10 mt-6 font-extrabold text-2xl">
              Shopping cart.
            </h2>
            <div>
              <div className="flex ">
                <p className="pr-[400px] pl-4">Product</p>
                <p className="pr-[200px]">Quantity</p>
                <p>Total Price</p>
              </div>
              <div className="border-b my-2 border-gray-100 border" />
              <ScrollArea className="h-[350px] w-[1000px]">
                <ul className="my-4">
                  {cartItems.map((item: any) => (
                    <li key={item.id} className="flex my-4 ">
                      <div className="pl-4 flex w-[45%]">
                        <Image
                          className="min-w-[4rem] min-h-[6rem] max-w-[4rem] max-h-[6rem] shadow-lg border border-stone-300"
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
                      <div className="w-[30%] pl-6 ">
                        <div className="bg-gray-100 max-w-max p-2 rounded-sm">
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
                </div>
              </div>
              <div className="flex justify-end">
                <div className="border w-[35%] border-gray-100" />
              </div>
              <div className="flex w-full my-6">
                <div className="w-[70%]">
                  <Button
                    variant={"ghost"}
                    className="hover:opacity-70 hover:bg-transparent"
                  >
                    <Image src={angleLeftIcon} alt="angle elft" height={20} />
                    <Link
                      href={"/shop"}
                      className="font-extrabold text-base pl-1"
                    >
                      Continue shopping
                    </Link>
                  </Button>
                </div>
                <div className="flex w-[25%] justify-between">
                  <div className="font-bold text-xl">Total:</div>
                  <div className=" text-xl font-semibold">
                    ${calculateTotalPrice().toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-6 bg-gray-100 rounded-md">
            <div className="flex ">
              <h2 className="font-extrabold text-2xl">Payment Info.</h2>
              <div className="bg-orange-200 p-2 text-orange-700 font-bold ml-10 rounded-lg text-sm">
                Fake form
              </div>
            </div>

            <div className="py-10">
              <form id="form">
                <div>
                  <label className="text-gray-400 text-sm">
                    Payment Method:
                  </label>
                  <div className="space-y-[16px] py-2">
                    <div className="flex ">
                      <input
                        className="size-[18px] align-middle"
                        name="category"
                        type="radio"
                        value="card"
                        id="card"
                        defaultChecked
                      />{" "}
                      <div className="flex align-middle pl-2">
                        <Image src={creditCard} alt="credit card" height={20} />
                        <label
                          htmlFor="card"
                          className="ml-1 font-semibold text-sm "
                        >
                          Credit card
                        </label>
                      </div>
                    </div>
                    <div className="flex ">
                      <input
                        className="size-[18px] align-middle"
                        name="category"
                        type="radio"
                        value="paypal"
                        id="paypal"
                      />{" "}
                      <div className="flex align-middle pl-2">
                        <Image src={paypalLogo} alt="paypal logo" height={20} />
                        <label
                          htmlFor="card"
                          className="ml-1 font-semibold text-sm "
                        >
                          PayPal
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <label className="text-gray-400 text-sm my-1">
                      Name on card:
                    </label>
                    <Input
                      type="text"
                      placeholder="John Doe"
                      className="max-w-[300px]"
                      required
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <label className="text-gray-400 text-sm my-1">
                    Card Number:
                  </label>
                  <Input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9/s]{13,19}"
                    autoComplete="cc-number"
                    maxLength={19}
                    placeholder="1234 1234 1234 1234"
                    required
                    className="max-w-[200px]"
                  />
                </div>
                <div className="mt-10 flex space-x-10">
                  <div className="">
                    <label className="text-gray-400 text-sm my-1">
                      Expiration Date:
                    </label>
                    <div className="flex space-x-2">
                      <Select required>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="January">01</SelectItem>
                          <SelectItem value="February">02</SelectItem>
                          <SelectItem value="March">03</SelectItem>
                          <SelectItem value="April">04</SelectItem>
                          <SelectItem value="May">05</SelectItem>
                          <SelectItem value="June">06</SelectItem>
                          <SelectItem value="July">07</SelectItem>
                          <SelectItem value="August">08</SelectItem>
                          <SelectItem value="September">09</SelectItem>
                          <SelectItem value="October">10</SelectItem>
                          <SelectItem value="November">11</SelectItem>
                          <SelectItem value="December">12</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select required>
                        <SelectTrigger className="w-[120px]">
                          <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="2024">2024</SelectItem>
                          <SelectItem value="2025">2025</SelectItem>
                          <SelectItem value="2026">2026</SelectItem>
                          <SelectItem value="2027">2027</SelectItem>
                          <SelectItem value="2028">2028</SelectItem>
                          <SelectItem value="2029">2029</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm my-1">CVV:</label>
                    <Input
                      type="text"
                      placeholder="123"
                      required
                      maxLength={3}
                      className="max-w-[60px]"
                    />
                  </div>
                </div>
              </form>
              <div className="mt-20">
                <Button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  type="submit"
                  form="form"
                  className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-600/80  "
                >
                  Check Out
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
