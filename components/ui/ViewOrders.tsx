import React from "react";
import { Button } from "./shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/shadcn/dialog";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
import Image from "next/image";

interface orderProps {
  id: "";
  userId: "";
  totalPrice: number;
  createdAt: Date;
  items: [];
}

const ViewOrders = ({ order }: { order: orderProps }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant={"ghost"}
            className="text-blue-400 hover:bg-transparent h-6 hover:text-blue-400/70"
          >
            View Order
          </Button>
        </DialogTrigger>
        <DialogContent className="px-10 ">
          <DialogHeader className="text-xs text-black/70 flex flex-row justify-between ">
            <div className="space-y-2">
              <div>
                <div>ORDER PLACED</div>
                <div className="font-semibold">
                  {new Date(order.createdAt).toLocaleDateString("en-UK")}
                </div>
              </div>
              <div>
                <div>TOTAL</div>
                <div className="font-semibold">
                  EUR {order.totalPrice.toFixed(2)}
                </div>
              </div>
            </div>
            <div>ORDER # {order.id}</div>
          </DialogHeader>

          <div className="border-b  border-gray-100 border" />
          <ScrollArea className="h-[350px] ">
            <ul className="my-4">
              {order.items.map((item: any) => (
                <li
                  key={item.id}
                  className="flex justify-between my-4 border-b pb-4 px-2"
                >
                  <div className=" flex">
                    <Image
                      className="min-w-[4rem] min-h-[6rem] max-w-[4rem] max-h-[6rem] shadow-lg border border-stone-300"
                      src={item.thumbnail}
                      alt={item.title}
                      width={80}
                      height={80}
                    />
                    <div className="mx-2 max-sm:max-w-[150px] max-w-[220px]">
                      <div className="text-sm font-bold">{item.title}</div>

                      <div className=" text-xs text-stone-600">
                        {item.author}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4 pr-4  items-center">
                    <div className="  ">
                      <div className="bg-gray-100 max-w-max p-2 rounded-sm">
                        x{item.quantity}
                      </div>
                    </div>

                    <div className="align-middle ">
                      €{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ViewOrders;
