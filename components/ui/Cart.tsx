import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import cartIcon from "@/assets/cart-icon.svg";
import { Button } from "./button";

const Cart = () => {
  const cartItems = 10;

  return (
    <Sheet>
      <SheetTrigger className="min-w-[2.5rem] hover:opacity-50">
        <p
          className={`${
            cartItems > 0 &&
            "absolute scale-75 -translate-y-2 translate-x-3 bg-blue-400 rounded-full border p-0 m-0 w-[1.7rem] min-w-min text-white"
          } `}
        >
          {cartItems > 0 ? cartItems : ""}
        </p>
        <Image src={cartIcon} alt="cart icon" width={35} height={35} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Cart ({cartItems})</SheetTitle>
          <Button>Checkout</Button>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
