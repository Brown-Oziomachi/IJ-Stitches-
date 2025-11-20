"use client";
import { useState, useEffect } from 'react';
import { useOrders } from '@/lib/context/OrderContext';
import { portfolioData } from '@/lib/portfolioData';

function ImageCarousel({ images, items, requestOrder }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [images.length]);

    const currentItem = items[currentIndex];

    return (
        <div className="relative w-full h-full min-h-[600px] overflow-hidden group ">
            <div className="absolute top-6 right-6 bg-white bg-opacity-95 px-4 py-2 rounded-full z-10 shadow-lg">
                <span className="text-sm font-bold text-black">{currentIndex + 1}/{images.length}</span>
            </div>

            {images.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    alt={`Design ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                />
            ))}


            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-10' : 'bg-white bg-opacity-60 w-2'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function AboutPage() {
    const { requestOrder } = useOrders();

    const suitImages = ['/suit12.jpg', '/suit13.jpg', '/suit12.jpg', '/suit14.jpg'];
    const suitItems = [portfolioData.suits[0], portfolioData.suits[1], portfolioData.suits[0], portfolioData.suits[1]];

    const nativeWearImages = ['/6.jpg', '/15.jpg', '/7.jpg', '/12.jpg'];
    const nativeWearItems = [portfolioData.native[0], portfolioData.native[1], portfolioData.native[2]];

    const shirtImages = ['/shirt10.jpg', '/shirt8.jpg', '/shirt5.jpg', '/shirt6.jpg'];
    const shirtItems = [portfolioData.shirts[3], portfolioData.shirts[2], portfolioData.shirts[1]];

    return (
        <div className=" text-black ">
            {/* Hero Section */}
            <div className="relative h-[400px] bg-gradient-to-r from-amber-900 via-amber-900 to-amber-900 overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-200 rounded-full opacity-20"></div>
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-200 rounded-full opacity-20"></div>
                <div className="absolute top-20 -right-20 w-64 h-64 bg-amber-300 rounded-full opacity-15"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-amber-300 rounded-full opacity-15"></div>

                <div className="absolute inset-0 flex items-center justify-center mt-20">
                    <div className="text-center text-white z-10 px-4">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-8">About Us</h1>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Founded in 2003 and based in Aba, Abia state, Nigeria, IJ-Stitches Tailors is a custom tailor shop with a strong commitment and dedication to excellence.
                        </p>
                    </div>
                </div>
            </div>

            {/* Master Tailor Section */}
            <div className="grid md:grid-cols-2 min-h-screen">
                <div className="flex items-center justify-center p-8 md:p-16 lg:p-20">
                    <div className="max-w-xl ">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Meet The Master Tailor</h2>
                        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-700">Joel I. Onyi. MD</h3>
                        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                            With over 22 years of experience in tailoring,  Joel Onyi founded IJ STITCHES with a passion for creating garments that embody elegance, precision, and individuality.
                        </p>
                        <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                            From traditional African attire to contemporary European suits, every piece is crafted with meticulous attention to detail, ensuring the perfect fit and finish for each client.
                        </p>
                        <blockquote className="border-l-4 border-black pl-6 italic text-gray-600 text-lg">
                            "We don't just make clothes—we create confidence, we celebrate heritage, and we craft masterpieces that tell your story."
                            <span className="block mt-4 not-italic font-semibold text-black text-xl">-Joel I. Onyi</span>
                        </blockquote>
                    </div>
                </div>
                <div className="relative p-5">
                    <img
                        src="/ijj.jpg"
                        alt="Master Tailor"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Bespoke Suit Tailoring Section */}
            <div className="grid md:grid-cols-2 min-h-screen ">
                <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 ">
                    <div className="max-w-xl mb-8 ">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 uppercase">IJ Suit Tailoring</h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Each suit is meticulously crafted to your exact measurements and style preferences. Our master tailors use traditional techniques combined with modern precision to create garments that fit like a second skin and make a lasting impression.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-xl ">
                        <img src="/suit12.jpg" alt="Suit detail 1" className="w-full h-64 object-cover rounded-lg" />
                        <img src="/suit13.jpg" alt="Suit detail 2" className="w-full h-64 object-cover rounded-lg" />

                    </div>
                </div>
                <div className="relative bg-gray-200 p-5">
                    <ImageCarousel images={suitImages} items={suitItems} requestOrder={requestOrder} />
                </div>
            </div>

            {/* Traditional Native Wear Section */}
            <div className="grid md:grid-cols-2 min-h-screen">
                <div className="relative bg-gray-200 order-2 md:order-1 p-5">
                    <ImageCarousel images={nativeWearImages} items={nativeWearItems} requestOrder={requestOrder} />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20  order-1 md:order-2">
                    <div className="max-w-xl mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 uppercase">Traditional Native Wear</h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            We honor African heritage through our exquisite traditional wear collection. Our Native, Suit, and Senator styles feature intricate embroidery and authentic designs that celebrate cultural richness and pride.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-xl">
                        <img src="/2.jpg" alt="Native wear detail 1" className="w-full h-64 object-cover rounded-lg" />
                        <img src="/5.jpg" alt="Native wear detail 2" className="w-full h-64 object-cover rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Premium Shirt Collection Section */}
            <div className="grid md:grid-cols-2 min-h-screen">
                <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20">
                    <div className="max-w-xl mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 uppercase">Premium Shirt Collection</h2>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Our shirts are crafted from the finest Egyptian cotton and premium fabrics. Each shirt is tailored for perfect fit and lasting quality with attention to collar styles, cuff details, and button placement.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 max-w-xl">
                        <img src="/shirt1.jpg" alt="Shirt detail 1" className="w-full h-64 object-cover rounded-lg" />
                        <img src="/shirt3.jpg" alt="Shirt detail 2" className="w-full h-64 object-cover rounded-lg" />
                    </div>
                </div>
                <div className="relative bg-gray-200  p-5">
                    <ImageCarousel images={shirtImages} items={shirtItems} requestOrder={requestOrder} />
                </div>
            <div className="bg-gray-200"></div>
            <div className="bg-gray-200"></div>

            </div>
         
        </div>
    );
}