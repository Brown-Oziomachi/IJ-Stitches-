"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import AutoScrollCarousel from '@/components/AutoScrollCarousel';
import PortfolioCard from '@/components/PortfolioCard';
import CategoryCarousel from '@/components/CategoryCarousel';
import { portfolioData } from '@/lib/portfolioData';
import { useOrders } from '@/lib/context/OrderContext';

export default function HomePage() {
  const { requestOrder, handleViewItem } = useOrders();
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  // Fix React muted bug - force muted attribute
  useEffect(() => {
    console.log('=== VIDEO DEBUG ===');

    if (video1Ref.current) {
      console.log('Video 1 element found:', video1Ref.current);
      video1Ref.current.muted = true;
      video1Ref.current.defaultMuted = true;
      video1Ref.current.play()
        .then(() => console.log('Video 1 playing'))
        .catch(err => console.error(' Video 1 error:', err));
    } else {
      console.error(' Video 1 ref not found');
    }

    if (video2Ref.current) {
      console.log('Video 2 element found:', video2Ref.current);
      console.log('Video 2 src:', video2Ref.current.src);
      console.log('Video 2 readyState:', video2Ref.current.readyState);
      video2Ref.current.muted = true;
      video2Ref.current.defaultMuted = true;

      // Add load event listener
      video2Ref.current.addEventListener('loadeddata', () => {
        console.log(' Video 2 data loaded');
      });

      video2Ref.current.addEventListener('error', (e) => {
        console.error(' Video 2 error event:', e);
        console.error('Error code:', video2Ref.current.error?.code);
        console.error('Error message:', video2Ref.current.error?.message);
      });

      video2Ref.current.play()
        .then(() => console.log(' Video 2 playing'))
        .catch(err => console.error('Video 2 play error:', err));
    } else {
      console.error(' Video 2 ref not found');
    }
  }, []);

  const featuredItems = [
    ...portfolioData.shirts.slice(0, 2),
    ...portfolioData.suits.slice(0, 2)
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <div className="relative h-screen overflow-hidden ">
        <div className="absolute inset-0 max-md:mt-35 ">
          <img
            src="/5.jpg"
            alt="IJ Stitches"
            className="w-full object-center brightness-100 object-cover"
          />
        </div>

        <div className="absolute inset-0 "></div>

        <div className="relative h-full flex items-center ">
          <div className="container mx-auto px-8 md:px-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
                IJ STITCHES
              </h1>

              <div className="w-32 h-1 bg-amber-400 mb-8 shadow-md"></div>

              <p className="text-4xl max-md:text-2xl text-white font-light mb-6 tracking-wide drop-shadow-md">
                WE CLOTHE THE WORLD
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white px-10 py-4 text-lg font-bold hover:bg-amber-300 transition shadow-2xl rounded"
                >
                  VIEW PORTFOLIO
                </Link>

                <Link
                  href="/contact"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 text-lg font-bold hover:bg-white hover:text-black transition rounded"
                >
                  GET IN TOUCH
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <AutoScrollCarousel requestOrder={requestOrder} />

      {/* FULL WIDTH SHOWCASE SECTION */}
      <div className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 lg:py-20 py-20">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-black">
            SIGNATURE COLLECTIONS
          </h2>
          <p className="text-center text-gray-500 mb-12 sm:mb-16 text-base sm:text-lg">
            Premium craftsmanship meets timeless elegance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">
            <div className="relative group overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01]">
              <div className="relative h-[450px] sm:h-[600px] md:h-[700px] w-full">
                <img
                  src="/suit12.jpg"
                  alt="Tailor Made Suits"
                  className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
                />

                <div className="absolute inset-0"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
                    Tailor-Made Suits
                  </h3>
                  <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-gray-200">
                    Handcrafted excellence for the distinguished gentleman
                  </p>
                  <Link
                    href="/suits"
                    className="inline-block bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white px-6 sm:px-8 py-3 font-bold hover:bg-gray-200 transition rounded-lg shadow-xl text-sm sm:text-base"
                  >
                    EXPLORE COLLECTION
                  </Link>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                  <span className="font-semibold text-black text-xs sm:text-sm">PREMIUM COLLECTION</span>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01]">
              <div className="relative h-[450px] sm:h-[600px] md:h-[700px] w-full">
                <img
                  src="/2.jpg"
                  alt="Traditional Native Wear"
                  className="w-full h-full brightness-90 group-hover:brightness-100 transition-all duration-500"
                />

                <div className="absolute inset-0 opacity-90"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
                    Native Elegance
                  </h3>
                  <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-gray-200">
                    Celebrating African heritage with modern sophistication
                  </p>
                  <Link
                    href="/native"
                    className="inline-blockn bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white px-6 sm:px-8 py-3 font-bold hover:bg-gray-200 transition rounded-lg shadow-xl text-sm sm:text-base"
                  >
                    EXPLORE COLLECTION
                  </Link>
                </div>

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                  <span className="font-semibold text-black text-xs sm:text-sm">CULTURAL HERITAGE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO SHOWCASE SECTION - FIXED */}
      <div className="w-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20">
        <div className="max-w-[1800px] mx-auto px-2 sm:px-6 lg:px-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-black">
            BEHIND THE STITCHES
          </h2>
          <p className="text-center text-gray-500 mb-12 sm:mb-16 text-base sm:text-lg">
            Watch our craftsmanship come to life
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Video 1 */}
            <div className="relative group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-gray-900">
              <video
                ref={video1Ref}
                className="w-full h-[700px] object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/video4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent group-hover:from-black/20 transition-all pointer-events-none"></div>

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-60 pointer-events-none">
                <p className="text-4xl font-bold tracking-wider drop-shadow-lg">IJ STITCHES</p>
              </div>

            </div>

            {/* Video 2 */}
            <div className="relative group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-amber-900">
              <video
                ref={video2Ref}
                className="w-full h-[700px] object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src="/video5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-transparent group-hover:from-amber-900/20 transition-all pointer-events-none"></div>

              <div className="absolute inset-0 flex items-center justify-center text-white opacity-60 pointer-events-none">
                <p className="text-4xl font-bold tracking-wider drop-shadow-lg">IJ STITCHES</p>
              </div>

            </div>
          </div>

          <div className="text-center">
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 text-black ">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">FEATURED DESIGNS</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Showcase of our recent custom tailoring work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map(item => (
            <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={handleViewItem} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">BROWSE BY CATEGORY</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Explore our diverse portfolio of custom tailoring</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-10xl">
            {[
              { name: 'CUSTOM SHIRTS', category: 'shirts', items: portfolioData.shirts },
              { name: 'BESPOKE SUITS', category: 'suits', items: portfolioData.suits },
              { name: 'NATIVE WEAR', category: 'native', items: portfolioData.native }
            ].map((cat, idx) => (
              <CategoryCarousel
                key={idx}
                category={cat}
                requestOrder={requestOrder}
                onViewItem={handleViewItem}
              />
            ))}

            {/* Video Card */}
            <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
              <div className="relative group">
                <video
                  className="w-full h-[500px] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src="/video6.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Watermark */}
                <div className="absolute inset-0 flex items-center justify-center text-white opacity-50 pointer-events-none">
                  <p className="text-3xl font-bold tracking-wider drop-shadow-lg">IJ STITCHES</p>
                </div>
              </div>

              <div className="p-6 text-center bg-gradient-to-b from-white to-gray-50">
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  CRAFTSMANSHIP IN ACTION
                </h3>
                <Link
                  href="/portfolio"
                  className="text-sm text-black font-semibold hover:underline inline-flex items-center gap-2"
                >
                  VIEW FULL PORTFOLIO →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}