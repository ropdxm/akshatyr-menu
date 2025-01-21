"use client"

import { restaurant } from "@frontend/components/common/maincom"
import { akContext } from "@frontend/components/context"
import { Button, Container, Text } from "@medusajs/ui"
import { useRouter } from "next/navigation"
import { useContext } from "react"

  
export default async function WaiterPage(){
    const router = useRouter();
    const {cart} = useContext(akContext);
    return <><Container className="px-3" style={{backgroundColor: "rgba(239, 239, 239, 0.8)", boxShadow: "none !important"}}>
        {cart && cart.map((prod: any, index: number) => {
            if(prod.amount!=0){ 
            return <Container key={index} className="flex flex-col" style={{boxShadow: "none !important", marginBottom: "0.4rem"}}>
            <div className="flex justify-between"><Text size="small">{restaurant.products[index].title}</Text>
            <Text size="small">{prod.price}</Text>
            </div>
            <div className="my-2" style={{boxSizing: "border-box", borderBlockStart: "1px solid rgba(5, 5, 5, 0.08)"}}></div>
        <div className="flex flex-row-reverse p">
            <Text size="small">{prod.amount} x {prod.price} = {prod.amount*prod.price} KZT</Text>
        </div>
        </Container>
            }
            return <></>
        })}
    </Container>
    <div className="flex justify-center"><Button onClick={() => {router.push("/")}}>Назад</Button></div>
    </>

}