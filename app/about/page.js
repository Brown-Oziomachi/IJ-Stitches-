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
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
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

            {currentItem && (
                <button
                    onClick={() => requestOrder(currentItem)}
                    className="absolute bottom-6 left-6 right-6 bg-white text-black py-4 px-8 font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100 rounded-lg shadow-xl"
                >
                    REQUEST THIS DESIGN
                </button>
            )}

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

    const suitImages = ['/suit12.jpg', '/suit13.jpg', '/suit12.jpg'];
    const suitItems = [portfolioData.suits[0], portfolioData.suits[1], portfolioData.suits[0]];

    const nativeWearImages = ['/2.jpg', '/5.jpg', '/7.jpg'];
    const nativeWearItems = [portfolioData.native[0], portfolioData.native[1], portfolioData.native[2]];

    const shirtImages = ['/shirt1.jpg', '/shirt3.jpg', '/shirt5.jpg'];
    const shirtItems = [portfolioData.shirts[3], portfolioData.shirts[2], portfolioData.shirts[1]];

    return (
        <div className="bg-white text-black min-h-screen">
            <div className="relative h-[500px] bg-gradient-to-br from-gray-900 via-black to-gray-800">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: 'url(/ijo.jpg)' }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white z-10 px-4">
                        <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl">About IJ STITCHES</h1>
                        <p className="text-2xl md:text-3xl drop-shadow-xl">Where Craftsmanship Meets Excellence</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <img
                            src="/ijj.jpg"
                            alt="Master Tailor"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold mb-8 text-gray-900">Meet The Master Tailor</h2>
                        <h3 className="text-3xl font-semibold mb-6 text-gray-700">Joel I. Onyi MD</h3>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            With over 30 years of expertise in bespoke tailoring, Chief Ibrahim Joel founded IJ STITCHES with a passion for creating garments that embody elegance, precision, and individuality.
                        </p>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            From traditional African attire to contemporary European suits, every piece is crafted with meticulous attention to detail, ensuring the perfect fit and finish for each client.
                        </p>
                        <blockquote className="border-l-4 border-black pl-6 italic text-gray-600 mt-8 text-lg">
                            "We don't just make clothes—we create confidence, we celebrate heritage, and we craft masterpieces that tell your story."
                            <span className="block mt-3 not-italic font-semibold text-black text-xl">- Chief Ibrahim Joel</span>
                        </blockquote>
                    </div>
                </div>

                <div className="mb-20">
                    <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Signature Work</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <ImageCarousel images={suitImages} items={suitItems} requestOrder={requestOrder} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold mb-6 text-gray-900">Bespoke Suit Tailoring</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Each suit is meticulously crafted to your exact measurements and style preferences. Our master tailors use traditional techniques combined with modern precision to create garments that fit like a second skin and make a lasting impression.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div className="order-2 md:order-1">
                            <h3 className="text-4xl font-bold mb-6 text-gray-900">Traditional Native Wear</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                We honor African heritage through our exquisite traditional wear collection. Our Agbadas, Kaftans, and Senator styles feature intricate embroidery and authentic designs that celebrate cultural richness and pride.
                            </p>
                        </div>
                        <div className="order-1 md:order-2">
                            <ImageCarousel images={nativeWearImages} items={nativeWearItems} requestOrder={requestOrder} />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <ImageCarousel images={shirtImages} items={shirtItems} requestOrder={requestOrder} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-bold mb-6 text-gray-900">Premium Shirt Collection</h3>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                Our shirts are crafted from the finest Egyptian cotton and premium fabrics. Each shirt is tailored for perfect fit and lasting quality with attention to collar styles, cuff details, and button placement.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-16 shadow-2xl">
                    <h2 className="text-5xl font-bold text-center mb-16">Why Choose IJ STITCHES?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        <div className="text-center">
                            <div className="text-6xl mb-6">✂️</div>
                            <h4 className="text-2xl font-bold mb-3">Master Craftsmanship</h4>
                            <p className="text-gray-300 text-lg">30+ years of tailoring excellence</p>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl mb-6">📏</div>
                            <h4 className="text-2xl font-bold mb-3">Perfect Fit</h4>
                            <p className="text-gray-300 text-lg">Custom measurements for every client</p>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl mb-6">🧵</div>
                            <h4 className="text-2xl font-bold mb-3">Premium Fabrics</h4>
                            <p className="text-gray-300 text-lg">Sourced from the finest mills worldwide</p>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl mb-6">⭐</div>
                            <h4 className="text-2xl font-bold mb-3">Client Satisfaction</h4>
                            <p className="text-gray-300 text-lg">Thousands of satisfied clients since 1994</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}