'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const { cartItems } = useCart();
  console.log('Cart Items:', cartItems);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="navbar bg-[#fff] shadow-xl p-6">
            <div className="flex-1">
              <Link href="/" className="text-5xl font-bold text-[#d9b028] cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">Fake eCommerce</Link>
              <p className="text-[#303030] text-lg">Version 3 with Next.js</p>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 gap-4">
                <li>
                  <Link href="/" className="btn btn-outline cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">Home</Link>
                </li>
                <li>
                  <Link href="/cart" className=" btn btn-outline cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
                    <ShoppingCart />
                    {totalItems > 0 && (
                      <span className="badge badge-commerce ml-2 border border-black">{totalItems}</span>
                    )}
                  </Link>
                </li>
              </ul>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
  );
};