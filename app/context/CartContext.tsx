"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useRef,
} from "react";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import axios from "axios";

interface CartItemProps {
  id: number;
  thumbnail: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
}
interface CartContextProps {
  cartItems: CartItemProps[];
  addToCart: (item: CartItemProps) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  calculateTotalPrice: () => number;
  calculateTotalQuantity: () => number;
  syncCartWithBackend: () => Promise<void>;
}
const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [initialLoadCompleted, setInitialLoadCompleted] = useState(false);

  const lastSyncedCartRef = useRef<CartItemProps[]>([]);

  const user = useCurrentUser();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
      setIsMounted(true);
      console.log("Cart fetched from local storage:", storedCart);
    }
  }, []);

  useEffect(() => {
    if (isMounted && !user) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      console.log("Cart saved to local storage:", cartItems);
    }
  }, [cartItems, isMounted, user]);

  const syncCartWithBackend = useCallback(async () => {
    if (user && !initialLoadCompleted) {
      setIsSyncing(true);
      try {
        console.log("Syncing cart with backend:", cartItems);
        const cartItemsData = cartItems.map((item) => ({
          userId: user.id,
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          thumbnail: item.thumbnail,
          title: item.title,
          author: item.author,
        }));

        await axios.post("/api/cart/sync-cart", {
          cartItems: cartItemsData,
        });

        lastSyncedCartRef.current = cartItems;
        console.log("Cart synced with backend");
      } catch (error) {
        const err = error as Error;
        console.error("Error syncing cart with backend:", err.message);
      } finally {
        setIsSyncing(false);
        setInitialLoadCompleted;
      }
    }
  }, [user]);

  const fetchUserCart = useCallback(async () => {
    if (user && isMounted && !isSyncing) {
      try {
        const response = await axios.get("/api/cart/user-cart");
        const userCart = response.data;

        console.log("Fetching user cart from backend", userCart);
        const transformedCartItems = userCart.map((item: any) => ({
          id: item.productId,
          thumbnail: item.thumbnail,
          title: item.title,
          author: item.author,
          price: item.price,
          quantity: item.quantity,
        }));

        // Merge user cart with local cart items
        const mergedCartItems = [...cartItems];
        transformedCartItems.forEach((userCartItem: any) => {
          const existingItemIndex = mergedCartItems.findIndex(
            (cartItem) => cartItem.id === userCartItem.id
          );
          if (existingItemIndex !== -1) {
            mergedCartItems[existingItemIndex].quantity +=
              userCartItem.quantity;
          } else {
            mergedCartItems.push(userCartItem);
          }
        });

        setCartItems(mergedCartItems);
        localStorage.removeItem("cartItems");

        console.log("User cart fetched and merged:", mergedCartItems);
      } catch (error) {
        const err = error as Error;
        console.error("Error fetching user cart:", err.message);
      }
    }
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     fetchUserCart();
  //   }
  // }, [user, fetchUserCart]);

  // useEffect(() => {
  //   if (
  //     user &&
  //     isMounted &&
  //     initialLoadCompleted &&
  //     lastSyncedCartRef.current !== cartItems
  //   ) {
  //     const syncTimeout = setTimeout(syncCartWithBackend, 500); // throttle the sync
  //     return () => clearTimeout(syncTimeout);
  //   }
  // }, [user, cartItems, isMounted, initialLoadCompleted, syncCartWithBackend]);

  const addToCart = (item: CartItemProps) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
            }
          : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  console.log(cartItems);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        removeFromCart,
        calculateTotalPrice,
        calculateTotalQuantity,
        syncCartWithBackend,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
