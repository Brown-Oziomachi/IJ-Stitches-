"use client";
import { Eye } from "lucide-react";

export default function PortfolioCard({ item, requestOrder, onViewItem }) {
  return (
    <div className="bg-white group overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div
        className="relative overflow-hidden cursor-pointer h-[600px] w-full"
        onClick={() => onViewItem(item)}
      >
        <img
          src={item.frontImage}
          alt="Custom tailored garment"
          className="w-full h-[600px] object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onViewItem(item);
          }}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-gray-100 shadow-lg"
        >
          <Eye size={20} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            requestOrder(item);
          }}
          className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-gray-900 to-black text-white py-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition hover:from-black hover:to-gray-900 font-bold"
        >
          REQUEST THIS DESIGN
        </button>
      </div>
    </div>
  );
}
