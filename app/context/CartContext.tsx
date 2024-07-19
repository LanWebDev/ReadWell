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
import debounce from "lodash/debounce";

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
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const user = useCurrentUser();

  // Load cart from local storage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cartItems");
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart);
      }
      setIsMounted(true);
    }
  }, []);

  // Save cart to local storage whenever cartItems change and user is not logged in
  useEffect(() => {
    if (isMounted && !user) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted, user]);

  const mergeCarts = (
    localCart: CartItemProps[],
    userCart: CartItemProps[]
  ): CartItemProps[] => {
    const mergedCartItems = [...localCart];

    userCart.forEach((userCartItem) => {
      const existingItemIndex = mergedCartItems.findIndex(
        (cartItem) => cartItem.id === userCartItem.id
      );
      if (existingItemIndex !== -1) {
        mergedCartItems[existingItemIndex].quantity += userCartItem.quantity;
      } else {
        mergedCartItems.push(userCartItem);
      }
    });

    return mergedCartItems;
  };

  const fetchAndMergeUserCart = useCallback(async () => {
    if (user && !hasFetched) {
      try {
        const response = await axios.get("/api/cart/user-cart");
        const userCart = response.data;

        const transformedUserCart = userCart.map((item: any) => ({
          id: item.productId,
          thumbnail: item.thumbnail,
          title: item.title,
          author: item.author,
          price: item.price,
          quantity: item.quantity,
        }));

        const localCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

        const mergedCartItems = mergeCarts(localCart, transformedUserCart);

        setCartItems(mergedCartItems);

        // Sync with backend and remove local storage after a delay
        await syncCartWithBackend(mergedCartItems);

        setTimeout(() => {
          localStorage.removeItem("cartItems");
        }, 1000);

        setHasFetched(true);
      } catch (error) {
        console.error("Error fetching or merging user cart:", error);
      }
    }
  }, [user, hasFetched]);

  useEffect(() => {
    if (user && !hasFetched) {
      fetchAndMergeUserCart();
    }
  }, [fetchAndMergeUserCart, user]);

  const syncCartWithBackend = useCallback(
    debounce(async (items) => {
      if (user) {
        try {
          await axios.post("/api/cart/sync-cart", {
            cartItems: items.map((item: CartItemProps) => ({
              userId: user.id,
              productId: item.id,
              quantity: item.quantity,
              price: item.price,
              thumbnail: item.thumbnail,
              title: item.title,
              author: item.author,
            })),
          });
        } catch (error) {
          console.error("Error syncing cart with backend:", error);
        }
      }
    }, 500),
    [user]
  );

  useEffect(() => {
    if (hasFetched) {
      syncCartWithBackend(cartItems);
    }
  }, [cartItems, user, syncCartWithBackend, hasFetched]);

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
