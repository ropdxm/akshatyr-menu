"use client"
import { createContext, ReactNode, useContext, useState } from 'react';

export const akContext = createContext<any>(null);

interface CartItem {
    amount: number;
    price: number;
}

export function AkContext({children}: {children: ReactNode}) {
  const [cart, setCart] = useState<CartItem[]>([
    {amount: 0, price: 0},
    {amount: 0, price: 0}, 
    {amount: 0, price: 0}, 
    {amount: 0, price: 0}, 
    {amount: 0, price: 0}, 
    {amount: 0, price: 0}, 
    {amount: 0, price: 0}, 
    {amount: 0, price: 0}
]);

    const [itemsInCart, setItemsInCart] = useState<number>(0);

  return (
    <akContext.Provider value={{cart, setCart, itemsInCart, setItemsInCart}}>
        {children}
    </akContext.Provider>
  );
}
