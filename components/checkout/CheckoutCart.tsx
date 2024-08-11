import Image from "next/image";
import React from "react";
import { ScrollArea } from "../ui/shadcn/scroll-area";
import { Button } from "../ui/shadcn/button";
import Link from "next/link";
import angleLeftIcon from "@/assets/1608508_angle_left_icon.svg";
import crossImg from "@/assets/cross.svg";

interface CheckoutCartProps {
  cartItems: any;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  calculateTotalPrice: () => number;
}

const CheckoutCart = ({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  calculateTotalPrice,
}: CheckoutCartProps) => {
  return (
    <div className="xl:pr-20">
      <div className="flex max-md:flex-col justify-between items-center mt-6 mb-10">
        <Button
          variant={"ghost"}
          className="hover:opacity-70 hover:bg-transparent xl:hidden"
        >
          <Image src={angleLeftIcon} alt="angle left" height={20} />
          <Link href={"/shop"} className="font-extrabold text-base pl-1 ">
            Continue shopping
          </Link>
        </Button>
        <h2 className="pl-4 font-extrabold text-2xl">Shopping cart.</h2>
      </div>
      <div className="2xl:w-[1000px] xl:w-[700px] lg:w-[1000px] md:w-[800px]">
        <div className="flex max-md:hidden">
          <p className="w-[40%] flex justify-left pl-4">Product</p>
          <p className="w-[30%] flex justify-center">Quantity</p>
          <p className="w-[20%] flex justify-center">Total Price</p>
          <p className="w-[10%]"></p>
        </div>
        <div className="border-b my-2 border-gray-100 border" />
        <ScrollArea className="h-[370px] max-md:h-[400px] ">
          <ul className="my-4">
            {cartItems.map((item: any) => (
              <li
                key={item.id}
                className="flex my-4 max-md:flex-col border-b pb-4 px-2"
              >
                <div className="pl-4 flex md:w-[40%] items-center">
                  <Image
                    className="min-w-[4rem] min-h-[6rem] max-w-[4rem] max-h-[6rem] shadow-lg border border-stone-300"
                    src={item.thumbnail}
                    alt={item.title}
                    width={80}
                    height={80}
                  />
                  <div className="mx-2  max-w-[300px]">
                    <div className=" font-bold max-lg:text-sm ">
                      {item.title}
                    </div>

                    <div className="text-sm max-lg:text-xs text-stone-600">
                      {item.author}
                    </div>
                  </div>
                </div>
                <div className=" max-md:space-x-4 max-md:py-6 max-md:pl-4 flex md:w-[60%]">
                  <div className=" md:w-[50%] justify-center items-center flex ">
                    <div className="bg-gray-100 max-w-max   p-2  text-sm rounded-sm">
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="hover:opacity-50 text-xl pr-4 max-lg:pr-2"
                      >
                        +
                      </button>{" "}
                      {item.quantity}
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="hover:opacity-50 text-xl pl-6 max-lg:pl-4"
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="  md:w-[35%]  justify-center items-center flex">
                    €{(item.price * item.quantity).toFixed(2)}
                  </div>
                  <div className="items-center flex justify-center  md:w-[15%]">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive opacity-70 hover:opacity-50"
                    >
                      <Image
                        src={crossImg}
                        alt="cross"
                        height={22}
                        className="max-md:hidden"
                      />
                      <p className="text-red-500 md:hidden">Remove</p>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>
        <div className="border-b my-2 border-gray-100 border" />
        <div className="flex my-4  w-full">
          <div className="md:w-[70%]"></div>
          <div className="md:w-[25%]">
            <div className="flex justify-between">
              <div className="text-gray-500 font-light pb-2">Subtotal:</div>
              <div>${calculateTotalPrice().toFixed(2)}</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500 font-light">Shipping:</div>
              <div>Free</div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end">
          <div className="border w-[35%] border-gray-100" />
        </div>
        <div className="flex w-full my-6">
          <div className="md:w-[70%]">
            <Button
              variant={"ghost"}
              className="hover:opacity-70 hover:bg-transparent max-xl:hidden"
            >
              <Image src={angleLeftIcon} alt="angle elft" height={20} />
              <Link href={"/shop"} className="font-extrabold text-base pl-1 ">
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
  );
};

export default CheckoutCart;
