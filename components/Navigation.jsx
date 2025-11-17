"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Handbag, Menu, X } from "lucide-react";
import { useOrders } from "@/lib/context/OrderContext";

export default function Navigation() {
  const pathname = usePathname();
  const { orderRequests, setShowCart } = useOrders();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const cartCount = orderRequests.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/shirts", label: "SHIRTS" },
    // { href: "/trousers", label: "TROUSERS" },
    { href: "/suits", label: "SUITS" },
    { href: "/native", label: "NATIVE WEAR" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white sticky top-0 z-50 shadow-2xl border-b border-gray-800">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-4 cursor-pointer select-none"
          >
            <div>
              <h1 className="text-3xl font-serif font-semibold tracking-[0.25em] text-white drop-shadow-sm">
                Ij Stitches
              </h1>
              <p className="text-[10px] tracking-[0.45em] text-gray-300/80 mt-1">
                WE CLOTHE THE WORLD
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-gray-300 transition font-medium ${
                  pathname === link.href ? "text-gray-300" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowCart(true)}
              className="relative hover:text-gray-300 transition"
            >
              <Handbag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden mt-4 flex flex-col gap-7 pb-4 p-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setShowMobileMenu(false)}
                className={`text-left hover:text-gray-300 font-medium ${
                  pathname === link.href ? "text-gray-300" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setShowCart(true);
                setShowMobileMenu(false);
              }}
              className="text-left hover:text-gray-300 font-medium"
            >
              ORDERS ({cartCount})
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
