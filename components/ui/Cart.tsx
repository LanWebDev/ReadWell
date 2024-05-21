import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import cartIcon from "@/assets/cart-icon.svg";
import { Button } from "./button";
import { useCart } from "@/app/context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  return (
    <Sheet>
      <SheetTrigger className="min-w-[2.5rem] hover:opacity-50">
        <p
          className={`${
            cartItems.length > 0 &&
            "absolute scale-75 -translate-y-2 translate-x-3 bg-blue-400 rounded-full border p-0 m-0 w-[1.7rem] min-w-min text-white"
          } `}
        >
          {cartItems.length > 0 ? cartItems.length : ""}
        </p>
        <Image src={cartIcon} alt="cart icon" width={35} height={35} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Cart ({cartItems.length})</SheetTitle>
        </SheetHeader>
        <div>
          <ul>
            {cartItems.map((item: any) => (
              <li key={item.id} className="flex">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={35}
                  height={35}
                />
                <div>{item.title}</div>
                <div>{item.author}</div>
                <div>Quantity: {item.quantity}</div>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>

          <button onClick={clearCart}>Clear Cart</button>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Checkout
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
