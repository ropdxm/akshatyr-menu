import Maincom from "@frontend/components/common/maincom";
import DishCard from "@frontend/components/store/restaurant/dish-card";
import { Button, Heading, Text } from "@medusajs/ui";
import { notFound } from "next/navigation";
import { useEffect } from "react";


export default async function RestaurantPage({
  params,
}: {
  params: { handle: string };
}) {

  return (
    <div className="flex flex-col md:gap-10 gap-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Heading level="h1" className="text-2xl">
            Akshatyr | Order food online
          </Heading>
          <Text>Akshatyr</Text>
        </div>
      </div>
      
      <Maincom />


    </div>
  );
}
