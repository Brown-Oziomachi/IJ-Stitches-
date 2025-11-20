"use client";

import PortfolioCard from "@/components/PortfolioCard";
import { useOrders } from "@/lib/context/OrderContext";
import { portfolioData } from "@/lib/portfolioData";

export default function PortfolioPage() {
    const { requestOrder, handleViewItem } = useOrders();

    const allItems = [
        ...portfolioData.shirts,
        ...portfolioData.suits,
        ...portfolioData.native
    ];

    return (
        <div className="container mx-auto px-4 py-12 text-black bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <h1 className="text-5xl font-bold mb-4 text-gray-900 mt-30 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent text-center">Our Portfolio</h1>
            <p className="text-gray-600 mb-12 text-lg text-center">Showcasing {allItems.length} custom-tailored designs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allItems.map(item => (
                    <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={handleViewItem} />
                ))}
            </div>
        </div>
    );
}