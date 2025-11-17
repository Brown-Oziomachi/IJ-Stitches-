"use client";
import { portfolioData } from "@/lib/portfolioData";

export default function AutoScrollCarousel({ requestOrder }) {
  const showcaseImages = [
    { id: 1, src: "/2.jpg", item: portfolioData.native[0] },
    { id: 2, src: "/3.jpg", item: portfolioData.native[1] },
    { id: 3, src: "/4.jpg", item: portfolioData.native[2] },
    { id: 4, src: "/5.jpg", item: portfolioData.native[3] },
    { id: 5, src: "/6.jpg", item: portfolioData.native[0] },
    { id: 6, src: "/7.jpg", item: portfolioData.suits[0] },
    { id: 7, src: "/8.jpg", item: portfolioData.suits[1] },
    { id: 8, src: "/10.jpg", item: portfolioData.native[0] },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-10">
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
                <div className="w-full h-full relative group cursor-pointer">
                  <img
                    src={item.src}
                    alt="Tailored garment"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <button
                    onClick={() => requestOrder(item.item)}
                    className="absolute bottom-6 left-6 right-6 bg-white text-black py-4 px-6 font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100 z-10 rounded-lg shadow-xl"
                  >
                    REQUEST THIS DESIGN
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
