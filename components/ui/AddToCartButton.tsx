import { useCart } from "@/app/context/CartContext";
import React from "react";
import { Button } from "./button";

const AddToCartButton = (props: any) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: props.id,
      thumbnail: props.thumbnail,
      title: props.title,
      author: props.author,
      quantity: props.quantity,
      price: props.price,
    });
  };

  console.log(props);

  return (
    <Button
      onClick={handleAddToCart}
      className={`${props.className}  `}
      variant={"outline"}
    >
      ADD TO CART
    </Button>
  );
};

export default AddToCartButton;
