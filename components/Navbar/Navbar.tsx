import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="z-10 w-full bg-green-50 flex px-24 py-4 justify-between fixed top-0 shadow-sm">
        <ul className="flex gap-8 items-center">
          <li>
            <Link href="/">
              <a className="font-bold text-3xl">avostore</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li> */}
        </ul>
        <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:ring focus:ring-green-300 text-zinc-50 px-2 rounded-md">
          My cart
        </button>
      </nav>
      <div className="mt-16" />
    </>
  );
}
