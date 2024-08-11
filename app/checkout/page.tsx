"use client";
import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

import PaymentInfo from "@/components/checkout/PaymentInfo";
import CheckoutCart from "@/components/checkout/CheckoutCart";

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
  }, [cartItems, router]);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsProcessing(true);

    try {
      await axios.post(`/api/orders/checkout`, {
        items: cartItems,
        totalPrice: calculateTotalPrice(),
      });

      clearCart();

      router.push("checkout/order-complete");
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="flex pt-[7rem] md:pt-[7.5rem] max-xl:flex-col max-xl:items-center max-xl:space-y-6">
          <CheckoutCart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            calculateTotalPrice={calculateTotalPrice}
          />
          <PaymentInfo
            handleCheckout={handleCheckout}
            isProcessing={isProcessing}
          />
        </div>
      </div>
    </>
  );
};

export default Checkout;
