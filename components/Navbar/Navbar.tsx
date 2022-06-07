import React from "react";
import Link from "next/link";
import { useCart } from "@store/Cart";

export default function Navbar() {
  const { itemsCount } = useCart();

  return (
    <>
      <nav className="z-10 w-full bg-green-50 flex px-12 sm:px-24 py-4 justify-between fixed top-0 shadow-sm">
        <Link href="/">
          <a className="font-bold text-3xl">avostore</a>
        </Link>

        <Link href="/cart">
          <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring focus:ring-green-200 text-zinc-50 px-6 rounded-xl">
            My cart ({itemsCount || 0})
          </button>
        </Link>
      </nav>
      <div className="mt-16" />
    </>
  );
}
