"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { portfolioData } from "@/lib/portfolioData";

export default function AutoScrollCarousel({ requestOrder }) {
  const [zoomedImage, setZoomedImage] = useState(null);

  const showcaseImages = [
    { id: 1, src: "/2.jpg", item: portfolioData.native[0] },
    { id: 2, src: "/3.jpg", item: portfolioData.native[1] },
    { id: 3, src: "/4.jpg", item: portfolioData.native[2] },
    { id: 4, src: "/5.jpg", item: portfolioData.native[3] },
    { id: 5, src: "/6.jpg", item: portfolioData.native[0] },
    { id: 6, src: "/7.jpg", item: portfolioData.suits[0] },
    { id: 7, src: "/8.jpg", item: portfolioData.suits[1] },
    { id: 8, src: "/10.jpg", item: portfolioData.native[0] },
    { id: 9, src: "/15.jpg", item: portfolioData.native[0] },
  ];

  const handleImageClick = (item) => {
    setZoomedImage(item);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  return (
    <>
      <div className="lg:mt-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
        <div className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-900">
            TRADITIONAL NATIVE WEAR SHOWCASE
          </h2>
          <p className="text-center text-gray-600 mt-3 text-lg">
            Authentic designs with intricate embroidery and expert craftsmanship
          </p>
        </div>
        <div className="relative w-full">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 50s linear infinite;
              display: flex;
              width: max-content;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="animate-scroll gap-1">
            {[...showcaseImages, ...showcaseImages, ...showcaseImages].map(
              (item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-shrink-0 w-[400px] h-[600px] overflow-hidden shadow-2xl"
                >
                  <div className="w-full h-full relative group">
                    <img
                      src={item.src}
                      alt="Tailored garment"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        handleImageClick(item);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 mt-35 bg-white z-50 flex items-center justify-center p-4"
          onClick={closeZoom}
        >
          <button
            onClick={closeZoom}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition z-[101]"
          >
            <X size={32} />
          </button>

          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={zoomedImage.src}
              alt="Zoomed garment"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
