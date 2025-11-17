"use client";
import { X } from "lucide-react";
import { portfolioData } from "@/lib/portfolioData";

export default function ItemViewModal({
  item,
  onClose,
  requestOrder,
  onViewItem,
}) {
  if (!item) return null;

  const similarItems =
    portfolioData[item.category]?.filter((p) => p.id !== item.id).slice(0, 4) ||
    [];

  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-black p-3 hover:bg-gray-100 z-10"
          >
            <X size={24} />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={item.frontImage}
                  alt="Front view"
                  className="w-full h-auto shadow-xl"
                />
              </div>
              {item.backImage && item.backImage !== item.frontImage && (
                <div className="relative group">
                  <img
                    src={item.backImage}
                    alt="Back view"
                    className="w-full h-auto"
                  />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 text-sm font-semibold">
                    BACK VIEW
                  </div>
                </div>
              )}
            </div>

            <div className="text-black flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Custom{" "}
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
              </h2>

              <div className="mb-8 space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-lg">About This Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This is a showcase of our expert tailoring work. Each piece
                    is custom-made to exact measurements and specifications,
                    ensuring a perfect fit and premium finish.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-lg">What You Get</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ Custom measurements</li>
                    <li>✓ Premium fabric selection</li>
                    <li>✓ Expert craftsmanship</li>
                    <li>✓ Perfect fit guarantee</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  requestOrder(item);
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-5 hover:from-black hover:to-gray-900 transition font-bold text-lg rounded-lg shadow-xl"
              >
                REQUEST THIS DESIGN
              </button>
            </div>
          </div>

          {similarItems.length > 0 && (
            <div className="border-t px-8 py-8 bg-gray-50">
              <h3 className="text-2xl font-bold mb-6 text-black">
                More From This Category
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {similarItems.map((similarItem) => (
                  <div
                    key={similarItem.id}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105"
                    onClick={() => onViewItem(similarItem)}
                  >
                    <div className="relative h-48">
                      <img
                        src={similarItem.frontImage}
                        alt="Similar design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          requestOrder(similarItem);
                        }}
                        className="w-full bg-black text-white py-2 text-xs font-bold hover:bg-gray-800 transition rounded"
                      >
                        REQUEST DESIGN
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
