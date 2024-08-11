"use client";

import angleLeftIcon from "@/assets/1608508_angle_left_icon.svg";
import Link from "next/link";
import { User } from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

import ViewOrders from "@/components/ui/ViewOrders";
import { ScrollArea } from "@/components/ui/shadcn/scroll-area";
import Loading from "@/components/ui/Loading";

interface ordersProps {
  id: "";
  userId: "";
  totalPrice: number;
  createdAt: Date;
  items: [];
}

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get("../api/orders/user-orders");

      setOrders(response.data.reverse());
    } catch (error) {
      console.error("Error fetching user orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserOrders();
  }, []);

  return (
    <div className="pt-[6.5rem]">
      <div className="flex justify-center md:mt-10 ">
        <div className="w-[1000px] md:h-[550px]  p-3 shadow-lg rounded-sm">
          <div className="flex-col py-4">
            <Button
              variant={"ghost"}
              className=" hover:bg-transparent max-md:justify-center justify-start w-full"
            >
              <Link href={"/profile"} className="flex hover:opacity-70">
                <Image src={angleLeftIcon} alt="angle left" height={25} />
                <User className="w-6" />
              </Link>
            </Button>
            <h2 className="font-semibold text-center text-4xl pb-10 max-md:pb-2">
              <p className="">My Orders</p>
            </h2>
          </div>

          {loading ? (
            <div className="pt-[3rem] flex flex-col justify-center items-center">
              <p className=" text-xl text-black/70">Loading orders...</p>
              <Loading className="w-[4rem]" />
            </div>
          ) : orders.length === 0 ? (
            <div className="pt-[3rem] flex flex-col justify-center items-center">
              <p className="text-xl text-black/70">No orders found.</p>
            </div>
          ) : (
            <>
              <div className="flex text-xs px-4 font-bold text-black/80 mb-2 max-md:hidden">
                <div className="w-[25%] justify-left flex">ORDER ID</div>
                <div className="w-[25%] justify-center flex">COST</div>
                <div className="w-[25%] justify-center flex">DATE</div>
                <div></div>
              </div>

              <ScrollArea className="md:h-[310px] ">
                {orders.map((order: ordersProps) => (
                  <div key={order.id} className="space-y-4">
                    <div className="flex max-md:flex-col items-center max-md:space-y-2 border p-4 m-1 shadow-sm">
                      <div className="text-xs font-medium md:w-[25%] justify-left flex ">
                        #{order.id}
                      </div>
                      <div className="text md:w-[25%] justify-center flex">
                        ${order.totalPrice.toFixed(2)}
                      </div>
                      <div className=" md:w-[25%] justify-center flex">
                        {new Date(order.createdAt).toLocaleDateString("en-UK")}
                      </div>
                      <div className="md:w-[25%] justify-center flex">
                        <ViewOrders order={order} />
                      </div>
                    </div>
                  </div>
                ))}
              </ScrollArea>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
