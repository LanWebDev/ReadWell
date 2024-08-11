import Image from "next/image";
import React from "react";
import { Input } from "../ui/shadcn/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

import creditCard from "@/assets/credit-card.svg";
import paypalLogo from "@/assets/paypal.svg";
import { Button } from "../ui/shadcn/button";

interface PaymentInfoProps {
  handleCheckout: (e: React.FormEvent) => void;
  isProcessing: boolean;
}

const PaymentInfo = ({ handleCheckout, isProcessing }: PaymentInfoProps) => {
  return (
    <div className="w-full h-full p-6 bg-gray-100 rounded-md min-w-[370px] max-w-[400px]">
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
              <Input
                type="text"
                placeholder="John Doe"
                className="max-w-[300px]"
                required
              />
            </div>
          </div>
          <div className="mt-10">
            <label className="text-gray-400 text-sm my-1">Card Number:</label>
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
