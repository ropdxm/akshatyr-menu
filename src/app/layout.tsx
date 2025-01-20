import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";

import Footer from "@frontend/components/common/footer";
import { FlyingBox, ShoppingBag } from "@medusajs/icons";
import { IconButton, Text } from "@medusajs/ui";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { Suspense } from "react";
import Navcart from "@frontend/components/store/cart/navcart";
import { AkContext } from "@frontend/components/context";
import { usePathname } from "next/navigation";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medusa Eats",
  description: "Order food from your favorite restaurants",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <AkContext>
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        <body className={inter.className} style={{minWidth: "fit-content"}}>
        <nav className="flex px-4 md:px-10 py-4 h-16 bg-ui-fg-base text-ui-fg-on-inverted justify-between items-center sticky top-0 z-40">
        <Link
          href="/"
          className="flex gap-2 items-center text-xl font-semibold hover:text-ui-bg-base-hover"
        >
          <FlyingBox /> Akshatyr
        </Link>
        
        <div className="flex gap-2 items-center">          
          <Navcart />
        </div>
      </nav>
      <main className="flex flex-col gap-20 p-4 md:p-10 transition-all duration-150 ease-in-out min-h-[calc(100vh-8rem)]">
        {children}
      </main>
      <Footer />

        </body>
        </AkContext>
      </html>
    </ViewTransitions>
  );
}
