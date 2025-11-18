// app/native/page.js
"use client";
import { portfolioData, categoryTitles } from '@/lib/portfolioData';
import PortfolioCard from '@/components/PortfolioCard';
import { MessageCircle } from 'lucide-react';
import { useOrders } from '@/lib/context/OrderContext';

export default function NativePage() {
    const { requestOrder, handleViewItem } = useOrders();
    const items = portfolioData.native;

    const handleWhatsAppContact = () => {
        const phoneNumber = "2347013725529";
        const message = encodeURIComponent("Hi IJ-Stitches! I didn't find the native attire design I'm looking for in your portfolio. I'd like to discuss a custom design with you.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl mt-30 font-bold text-center mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {categoryTitles.native}
                </h1>
                <p className="text-center text-gray-600 mb-12 text-lg">
                    Showcasing {items.length} custom designs
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map(item => (
                        <PortfolioCard
                            key={item.id}
                            item={item}
                            requestOrder={requestOrder}
                            onViewItem={handleViewItem}
                        />
                    ))}
                </div>

                {/* Didn't Find Design Section */}
                <div className="mt-16 bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12 text-center border border-orange-100">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Didn't Find What You're Looking For?
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            No worries! We specialize in creating custom native attire designs tailored to your unique style and preferences.
                            Let's discuss your vision and bring it to life.
                        </p>
                        <button
                            onClick={handleWhatsAppContact}
                            className="inline-flex items-center gap-3 max-md:text-sm bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            <MessageCircle size={24} />
                            Discuss Custom Design on WhatsApp
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}