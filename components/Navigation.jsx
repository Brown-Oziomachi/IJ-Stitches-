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
    <>
      <nav className="bg-white text-black fixed top-0 left-0 right-0 z-50 shadow-2xl border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 sm:gap-4 cursor-pointer select-none"
            >
              <div>
                <h1 className="text-2xl sm:text-3xl font-serif font-semibold tracking-[0.25em] text-black drop-shadow-sm">
                  Ij Stitches
                </h1>
                <p className="text-[9px] sm:text-[10px] tracking-[0.45em] text-gray-800/80 mt-1">
                  WE CLOTHE THE WORLD
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-amber-700 transition font-medium text-sm xl:text-base ${
                    pathname === link.href ? "text-amber-600" : ""
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
                <Handbag size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="lg:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {showMobileMenu ? (
                  <X size={24} className="w-6 h-6" />
                ) : (
                  <Menu size={24} className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {showMobileMenu && (
            <div className="lg:hidden mt-4 flex flex-col gap-5 sm:gap-7 pb-4 p-3 sm:p-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setShowMobileMenu(false)}
                  className={`text-left hover:text-gray-300 font-medium text-base sm:text-lg ${
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
                className="text-left hover:text-gray-300 font-medium text-base sm:text-lg"
              >
                ORDERS ({cartCount})
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-3 sm:py-5 overflow-hidden fixed top-[72px] sm:top-[88px] left-0 right-0 z-40">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-4 text-xs sm:text-sm md:text-base">
            Our Office is now opened! - Visit us at 106, Cameroon Road Aba,
            Opposite shopping center, Aba, Abia State, Nigeria.,
          </span>
          <span className="inline-block px-4 text-xs sm:text-sm md:text-base">
            Our Office is now opened! - Visit us at 106, Cameroon Road Aba,
            Opposite shopping center, Aba, Abia State, Nigeria.,
          </span>
          <span className="inline-block px-4 text-xs sm:text-sm md:text-base">
            Our Office is now opened! - Visit us at 106, Cameroon Road Aba,
            Opposite shopping center, Aba, Abia State, Nigeria.,
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
