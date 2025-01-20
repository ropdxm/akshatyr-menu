"use client"

import { Button, Heading } from "@medusajs/ui"
import DishCard from "../store/restaurant/dish-card"



export const restaurant = {
    "restaurant": {
      "name": "Medusa Falafel",
      "handle": "medusa-falafel",
      "address": "Falafelgatan 1, 123 45 Copenhagen",
      "email": "hello@medusa-falafel.com",
      "phone": "+45 1234 5678",
      "image_url": "/_de4759b3-096f-47f6-936a-ea291df53f9f.jpeg",
      "is_open": true
    },
    "categories": [
      {
        "name": "Pizzas",
        "handle": "pizzas",
        "description": "Delicious pizzas made with the finest ingredients.",
        "is_active": true
      },
      {
        "name": "Falafel",
        "handle": "falafel",
        "description": "Our signature falafel dishes are a must-try.",
        "is_active": true
      },
      {
        "name": "Drinks",
        "handle": "drinks",
        "description": "Quench your thirst with our refreshing drinks.",
        "is_active": true
      }
    ],
    "products": [
      {
        "title": "Margherita Delight",
        "handle": "margherita-delight",
        "description": "Experience the simplicity",
        "status": "published",
        "thumbnail": "/_1ed747de-53f1-4915-aaba-92c046039beb.jpeg",
        "discountable": true,
        "category": "pizzas",
        "variants": [
          {
            "title": "Margherita Delight",
            "manage_inventory": false,
            "sku": "MARGHERITA-DELIGHT",
            "prices": [
              {
                "amount": 12.99,
                "currency_code": "usd"
              },
              {
                "amount": 9.99,
                "currency_code": "eur"
              }
            ]
          }
        ]
      },
      {
        "title": "Spicy Pepperoni Extravaganza",
        "handle": "spicy-pepperoni-extravaganza",
        "description": "Indulge in the bold flavors.",
        "is_giftcard": false,
        "status": "published",
        "thumbnail": "/_35841975-1e89-4c07-adb8-208cc8c59e17.jpeg",
        "discountable": true,
        "category": "pizzas",
        "variants": [
          {
            "title": "Spicy Pepperoni Extravaganza",
            "manage_inventory": false,
            "sku": "SPICY-PEPPERONI-EXTRAVAGANZA",
            "prices": [
              {
                "amount": 14.99,
                "currency_code": "usd"
              },
              {
                "amount": 11.99,
                "currency_code": "eur"
              }
            ]
          }
        ]
      },
      {
        "title": "Falafel Wrap Supreme",
        "handle": "falafel-wrap-supreme",
        "description": "Enjoy the Falafel Wrap",
        "is_giftcard": false,
        "status": "published",
        "thumbnail": "/_de4759b3-096f-47f6-936a-ea291df53f9f.jpeg",
        "discountable": true,
        "category": "falafel",
        "variants": [
          {
            "title": "Falafel Wrap Supreme",
            "manage_inventory": false,
            "sku": "FALAFEL-WRAP-SUPREME",
            "prices": [
              {
                "amount": 9.99,
                "currency_code": "usd"
              },
              {
                "amount": 7.99,
                "currency_code": "eur"
              }
            ]
          }
        ]
      },
      {
        "title": "Mediterranean Falafel Salad",
        "handle": "mediterranean-falafel-salad",
        "description": "Delight in the fresh",
        "is_giftcard": false,
        "status": "published",
        "thumbnail": "/_411c260a-d6e5-4989-9a00-1cd8b80265fb.jpeg",
        "discountable": true,
        "category": "falafel",
        "variants": [
          {
            "title": "Mediterranean Falafel Salad",
            "manage_inventory": false,
            "sku": "MEDITERRANEAN-FALAFEL-SALAD",
            "prices": [
              {
                "amount": 11.99,
                "currency_code": "usd"
              },
              {
                "amount": 8.99,
                "currency_code": "eur"
              }
            ]
          }
        ]
      },
      {
        "title": "Craft Lager Beer",
        "handle": "craft-lager-beer",
        "description": "Refresh yourself",
        "is_giftcard": false,
        "status": "published",
        "thumbnail": "/_ca16b6a2-9c4c-4a6a-98fa-620f12f6123f.jpeg",
        "discountable": true,
        "category": "drinks",
        "variants": [
          {
            "title": "Craft Lager Beer",
            "manage_inventory": false,
            "sku": "CRAFT-LAGER-BEER",
            "prices": [
              {
                "amount": 5.99,
                "currency_code": "usd"
              },
              {
                "amount": 4.99,
                "currency_code": "eur"
              }
            ]
          }
        ]
      },
      {
        "title": "Chilled Coke Zero",
        "handle": "chilled-coke-zero",
        "description": "Quench your",
        "is_giftcard": false,
        "status": "published",
        "thumbnail": "/_4476ce30-b852-402d-b65f-e3db54165e4c.jpeg",
        "discountable": true,
        "category": "drinks",
        "variants": [
          {
            "title": "Chilled Coke Zero",
            "manage_inventory": false,
            "sku": "CHILLED-COKE-ZERO",
            "prices": [
              {
                "amount": 2.99,
                "currency_code": "usd"
              },
              {
                "amount": 1.99,
                "currency_code": "eur"
              }
            ]
          }
        ]
      }
    ]
  }
  
export default async function Maincom() {

    return       <div className="flex gap-4 flex-col md:flex-row w-full">
      <div className="overflow-x-scroll w-screen md:w-fit z-30 bg-white sticky top-16 max-h-[calc(100vh-4rem)] scrollbar-hide ml-[-1rem]">
        <div className="flex flex-row md:flex-col gap-2 py-2 px-4 min-w-64 w-fit h-full">
          {restaurant.categories.map((categoryy) => (
            <Button
            onClick={() => {}}
              key={"button_" + "cat_" + categoryy.name}
              variant="transparent"
            >
              {categoryy.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-8">
        {restaurant.categories.map((categg, index: number) => (
          <div
            key={index}
            className="flex flex-col gap-4"
            
          >
            <Heading level="h2" className="text-xl">
              {categg.name}
            </Heading>
            <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            <DishCard category={categg.handle}/>
            </div>
          </div>
        ))}
      </div>
    </div>

}