"use client";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/app/components/page";

export default function RootLayout({ children }) {

  return (
    <CartProvider>
      <html lang="en" data-theme="cupcake">
        <body className="max-w-[1280px] mx-auto text-[#303030]">
          <Navbar />
          {children}
        </body>
      </html>
    </CartProvider>
  );
}
