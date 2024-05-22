import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";

import Image from "next/image";
import cartIcon from "@/assets/cart-icon.svg";
import { Button } from "./button";
import { useCart } from "@/app/context/CartContext";
import emptyCartImage from "@/assets/empty-cart.png";

import Link from "next/link";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    calculateTotalPrice,
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
      <SheetContent className="">
        <ScrollArea className="h-full md:min-w-[270px]">
          <SheetHeader className="text-left">
            <SheetTitle>My Cart ({cartItems.length})</SheetTitle>
          </SheetHeader>
          <div>
            {cartItems.length === 0 && (
              <Image
                className="my-60 h-full w-full"
                src={emptyCartImage}
                alt="empty cart"
                height={500}
                width={500}
              />
            )}
            <ul className="my-4">
              {cartItems.map((item: any) => (
                <li key={item.id} className="flex my-4">
                  <div>
                    <Link href={`/shop/${item.id}`}>
                      <SheetClose asChild>
                        <Image
                          className="min-w-[6rem] min-h-[8rem] max-w-[6rem] max-h-[8rem] shadow-lg border border-stone-300"
                          src={item.thumbnail}
                          alt={item.title}
                          width={80}
                          height={80}
                        />
                      </SheetClose>
                    </Link>
                  </div>
                  <div className="mx-2 max-sm:max-w-[150px] max-w-[220px]">
                    <Link href={`/shop/${item.id}`}>
                      <SheetClose asChild>
                        <div className="truncate font-bold">{item.title}</div>
                      </SheetClose>
                    </Link>
                    <div className="truncate text-sm text-stone-600">
                      {item.author}
                    </div>
                    <div>Quantity: {item.quantity}</div>
                    <div className="flex gap-2  ">
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="hover:opacity-50 text-xl"
                      >
                        +
                      </button>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="hover:opacity-50 text-xl"
                      >
                        -
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:opacity-50"
                      >
                        Remove
                      </button>
                    </div>
                    <div>€{(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <>
              <hr />
              <div className="my-2 flex gap-1">
                <p className="font-bold">Total Price:</p>
                <p>${calculateTotalPrice().toFixed(2)}</p>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" className="w-full max-sm:w-[12rem]">
                    Checkout
                  </Button>
                </SheetClose>
              </SheetFooter>
            </>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
