
"use client";

import { restaurant } from "@frontend/components/common/maincom";
import { akContext } from "@frontend/components/context";
import { XMark } from "@medusajs/icons";
import { Button, Container, Heading, IconButton, Text } from "@medusajs/ui";
import Image from "next/image";
import { useContext, useState } from "react";

export default function CartModal({
  handleCheckoutClick,
}: {
  handleCheckoutClick: () => void;
}) {
  const {cart, itemsInCart} = useContext(akContext);
  return (
    <Container className="flex flex-col gap-4 w-fit min-w-72 max-h-[80vh] overflow-y-auto m-0">
      <Heading level="h2" className="text-lg font-semibold text-ui-fg-base">
        Your order
      </Heading>

      <div className="flex flex-col gap-4">
        {itemsInCart && itemsInCart>0 ? <>{
          cart?.map((item: any, index: number) => {
            if(item.amount!=0){
              return <CartItem key={index} item={item} ind={index} />
            }
            return <></>
})}
        <Heading level="h3" className="text-sm text-ui-fg-subtle">
            {cart.map((datum: any) => datum.price*datum.amount).reduce((a: number, b: number) => a + b)} KZT
          </Heading>
        </> : (
          <Text className="break-words">No items added yet.</Text>
        )}
        <Button
          variant="primary"
          className="w-full"
          size="large"
          onClick={handleCheckoutClick}
          disabled={!itemsInCart || itemsInCart===0}
        >
          Show to Waiter
        </Button>
      </div>
    </Container>
  );
}

function CartItem({ item, ind }: { item: any, ind: number }) {

  if(item.amount==0){
    return <></>;
  }
  const {cart, setCart, itemsInCart, setItemsInCart} = useContext(akContext);

  return (
    <div className="flex items-center gap-4">
      <Image
        src={restaurant.products[ind].thumbnail}
        alt={item.title}
        className="w-16 h-16 rounded-md"
        width={64}
        height={64}
      />
      <div className="flex justify-between w-full gap-2 items-center">
        <div className="flex flex-col gap-2base">
          <Heading level="h3" className="text-sm text-ui-fg-subtle">
            {restaurant.products[ind].title}
          </Heading>
          <Text className="text-sm text-ui-fg-subtle">
            {item.amount} x €{item.price}
          </Text>
        </div>
        <IconButton
          onClick={async () => {
            let itemss = [...cart];
            let item = {...itemss[ind]};
            setItemsInCart(() => itemsInCart-1)
            item.amount = 0;
            itemss[ind] = item;
            setCart(itemss);
          }}
          variant="transparent"
          isLoading={false}
        >
          <XMark />
        </IconButton>
      </div>
    </div>
  );
}
