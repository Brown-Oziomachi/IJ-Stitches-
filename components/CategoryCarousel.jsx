"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function CategoryCarousel({
  category,
  requestOrder,
  onViewItem,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Add safety check to prevent undefined error
  const allItems = category?.items || [];
  const items = allItems.slice(0, 4);

  // Return early if no items
  if (items.length === 0) {
    return (
      <div className="bg-orange-50 p-6 text-center">
        <p className="text-gray-500">No items available</p>
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="bg-orange-50 overflow-hidden items-center justify-center ">
      <div className="relative group">
        <img
          src={currentItem.frontImage}
          alt={`${category.name} showcase`}
          className="w-full h-[500px] object-cover"
        />

        {items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <button
          onClick={() => requestOrder(currentItem)}
          className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-3 px-4 text-sm font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition hover:from-black hover:to-gray-900"
        >
          REQUEST THIS DESIGN
        </button>

        <button
          onClick={() => onViewItem(currentItem)}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-gray-100 shadow-lg"
        >
          <Eye size={18} />
        </button>

        {items.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex
                    ? "bg-white w-8"
                    : "bg-white bg-opacity-50 w-2"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 text-center bg-gradient-to-b from-white to-gray-50">
        <h3 className="font-bold text-xl mb-3 text-gray-900">
          {category.name}
        </h3>
        <Link
          href={`/${category.category}`}
          className="text-sm text-black font-semibold hover:underline inline-flex items-center gap-2"
        >
          VIEW ALL {allItems.length} DESIGNS →
        </Link>
      </div>
    </div>
  );
}
