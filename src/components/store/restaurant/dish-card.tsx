"use client";

import { ProductDTO } from "@medusajs/types";
import { Heading, Text } from "@medusajs/ui";
import { IconButton } from "@medusajs/ui";
import { Minus, Plus } from "@medusajs/icons";
import Image from "next/image";
import { useContext, useState } from "react";
import { restaurant } from "@frontend/components/common/maincom";
import { akContext } from "@frontend/components/context";

export default function DishCard({
  category
}: {category: string}) {

  const {cart, setCart, setItemsInCart, itemsInCart} = useContext(akContext)

  return (restaurant.products.map((product, index) => {
    if(product.category==category){

    
      return <div className="flex py-3 justify-between shadow-sm border rounded-xl h-fit" key={index}>
      <div className="flex flex-col justify-between gap-2 px-4">
        <div className="flex flex-col gap-2 py-1"><Heading>{product.title}</Heading>
        <Text className="line-clamp-3">{product.description}</Text>
        </div>
        <Text className="text-lg font-semibold">
          €
          {
            //@ts-ignore
            product.variants[0].prices[0].amount
          }
        </Text>
      </div>
      <div className="relative h-fit">
        <Image
          src={product.thumbnail}
          width={100}
          height={100}
          alt={`Thumbnail of ${product.title}`}
          className="min-w-40 bg-ui-bg-base rounded-r-lg h-full object-cover"
        />
        <div style={{display: cart[index].amount==0 ? "none" : "block"}}><IconButton
          // isLoading={isAdding}
          onClick={async () => {
            let itemss = [...cart];
            let item = {...itemss[index]};
            if(item.amount==1){
              setItemsInCart(() => itemsInCart-1);
            }
            if(item.amount==0){
              return;
            }
            item.amount --;
            itemss[index] = item;
            setCart(itemss);
          }}
          size="large"
          className="absolute left-6 bottom-0 rounded-full bg-ui-bg-base"
        >
          <Minus />
        </IconButton>
        <Text className="absolute bottom-1 rounded-full bg-ui-bg-base py-1 px-2 bold" style={{"left": "53%", "transform": "translate(-50%, 0)"}}>{cart[index].amount}</Text></div>
        <IconButton
          // isLoading={isAdding}
          onClick={async () => {
            let itemss = [...cart];
            let item = {...itemss[index]};
            if(item.amount==0){
              setItemsInCart(() => itemsInCart+1)
            }
            item.amount ++;
            item.price = product.variants[0].prices[0].amount
            itemss[index] = item;
            setCart(itemss);
          }}
          size="large"
          className="absolute right-3 bottom-0 rounded-full bg-ui-bg-base"
        >
          <Plus />
        </IconButton>
      </div>
    </div>
    }
    return <></>
  }));
}
