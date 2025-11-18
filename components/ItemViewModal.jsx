"use client";
import { X } from "lucide-react";

export default function ItemViewModal({ item, onClose, requestOrder }) {
  if (!item) return null;

  // Mock color variations - you can replace this with actual data from your item
  const colorVariations = [
    { color: "Charcoal Black", image: item.frontImage },
  ];

  return (
    <div
      className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-6xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-black p-3 hover:bg-gray-100 z-10"
          >
            <X size={24} />
          </button>

          <div className="grid md:grid-cols-2 gap-8 h-[90vh]">
            {/* Scrollable Images Section */}
            <div className="overflow-y-auto p-8 space-y-6">
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
                      className="w-full h-auto shadow-xl"
                    />
                 
                  </div>
                )}
              </div>

              {/* Color Variations */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4 text-black">
                  Available in Other Colors
                </h3>
                <div className="space-y-4">
                  {colorVariations.map((variant, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-lg overflow-hidden"
                    >
                      <img
                        src={variant.image}
                        alt={variant.color}
                        className="w-full h-auto"
                      />
                      <div className="p-3 bg-gray-50 text-center">
                        <p className="font-semibold text-gray-800">
                          {variant.color}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fixed Product Info Section */}
            <div className="text-black flex flex-col justify-center p-8 overflow-hidden">
              <h2 className="text-4xl font-bold mb-2 text-gray-900">
                {item.title ||
                  `Custom ${
                    item.category.charAt(0).toUpperCase() +
                    item.category.slice(1)
                  }`}
                          </h2>
                          
              <div className="mb-8 space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-lg">About This Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A charcoal black long sleeve kaftan with swavroski buttons
                    and a patterned pocket flap for a clean, stylish look. Each
                    piece is custom-tailored to your exact measurements and
                    specifications.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-lg">
                    Bespoke Tailoring Service
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ Personal measurement session</li>
                    <li>✓ Premium fabric selection</li>
                    <li>✓ Expert hand-tailoring</li>
                    <li>✓ Perfect fit guarantee</li>
                    <li>✓ Multiple fittings included</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  const phoneNumber = "2347013725529"; // Replace with actual tailor's WhatsApp number
                  const itemTitle =
                    item.title ||
                    `Custom ${
                      item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)
                    }`;
                  const itemUrl = window.location.href; // Current page URL
                  const imageUrl = item.frontImage; // Full image URL

                  const message = encodeURIComponent(
                    `Hi! I'm interested in this design:\n\n*${itemTitle}*\n\nImage: ${imageUrl}\n\nPage: ${itemUrl}`
                  );
                  window.open(
                    `https://wa.me/${phoneNumber}?text=${message}`,
                    "_blank"
                  );
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-amber-700 to-amber-900 text-white py-5 hover:from-amber-800 hover:to-amber-950 transition font-bold text-lg rounded-lg shadow-xl"
              >
                CHAT TAILOR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
