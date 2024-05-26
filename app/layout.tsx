// Byimaan

import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import nxtLogo from '@/app/favicon.ico'

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

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

        <Header />
          <section className=" flex flex-col flex-grow-[1] relative">
            {children}
          </section>
        <Footer />

      </body>

    </html>
  );
}
