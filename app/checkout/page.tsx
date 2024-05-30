// pages/checkout.tsx
import { useCart } from "@/app/context/CartContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const { cartItems, calculateTotalPrice } = useCart();
  const { data: session } = useSession();
  const router = useRouter();

  const handleCheckout = async () => {
    if (!session) {
      router.push("/api/auth/signin");
      return;
    }

    try {
      const res = await fetch("/api/checkout/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
          cartItems,
        }),
      });

      const { id } = await res.json();
      router.push(id);
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
      <h2>Total: ${calculateTotalPrice().toFixed(2)}</h2>
      <button onClick={handleCheckout}>Checkout with Stripe</button>
    </div>
  );
};

export default CheckoutPage;
