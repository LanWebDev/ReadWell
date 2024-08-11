import Image from "next/image";
import React from "react";
import { Input } from "../ui/shadcn/input";

import creditCard from "@/assets/credit-card.svg";
import paypalLogo from "@/assets/paypal.svg";
import { Button } from "../ui/shadcn/button";
import CardNumberInput from "../ui/CardNumberInput";
import ExpirationDates from "../ui/ExpirationDates";
import CvvInput from "../ui/CvvInput";

interface PaymentInfoProps {
  handleCheckout: (e: React.FormEvent) => void;
  isProcessing: boolean;
}

const PaymentInfo = ({ handleCheckout, isProcessing }: PaymentInfoProps) => {
  return (
    <div className="w-full h-full p-6 bg-gray-100 rounded-md min-w-[370px] max-w-[600px] ">
      <div className="flex ">
        <h2 className="font-extrabold text-2xl">Payment Info.</h2>
      </div>

      <div className="py-10">
        <form id="form" onSubmit={handleCheckout}>
          <div>
            <label className="text-gray-400 text-sm">Payment Method:</label>
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
                  <label htmlFor="card" className="ml-1 font-semibold text-sm ">
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
                  disabled
                />{" "}
                <div className="flex align-middle pl-2">
                  <Image src={paypalLogo} alt="paypal logo" height={20} />
                  <label htmlFor="card" className="ml-1 font-semibold text-sm ">
                    PayPal
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <label className="text-gray-400 text-sm my-1">
                Name on card:
              </label>
              <Input type="text" placeholder="John Doe" className="" required />
            </div>
          </div>
          <CardNumberInput />
          <div className="mt-10 flex space-x-10">
            <ExpirationDates />
            <CvvInput />
          </div>
        </form>
        <div className="mt-20">
          <Button
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
  );
};

export default PaymentInfo;
