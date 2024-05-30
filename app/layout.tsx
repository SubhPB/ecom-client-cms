// Byimaan

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

import { FixHydration } from "@/components/providers/fix-hydration";
import ToastProvider from "@/components/providers/toast-provider";
import { CartProvider } from "@/components/providers/cart-provider";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "CMS store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={font.className + ' min-h-[100dvh] flex flex-col justify-between flex-shrink-0 scrollbar-cstm'}>


        <FixHydration>
          <CartProvider>
            <Header/>

              <section className=" flex flex-col flex-grow-[1] relative">            
                  <ToastProvider />
                  {children}    
              </section>

            <Footer />
          </CartProvider>  
        </FixHydration>

      </body>

    </html>
  );
}
