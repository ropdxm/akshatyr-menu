"use client";

import { akContext } from "@frontend/components/context";
import { CartLineItemDTO } from "@medusajs/types";
import { Text, clx } from "@medusajs/ui";
import { useContext } from "react";


export function CartCounter() {

  const {itemsInCart} = useContext(akContext);

  return (
    <Text
      key={itemsInCart}
      className={clx(
        "absolute flex bottom-2 right-2 rounded-full bg-ui-bg-base group-hover:bg-ui-fg-base group-hover:text-ui-bg-base p-1 h-4 w-4 items-center justify-center text-[10px]",
        {
          "animate-bounce duration-300 repeat-1": itemsInCart > 0,
        }
      )}
    >
      {itemsInCart}
    </Text>
  );
}