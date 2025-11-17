"use client";

import PortfolioCard from "@/components/PortfolioCard";
import { useOrders } from "@/lib/context/OrderContext";
import { portfolioData } from "@/lib/portfolioData";

export default function PortfolioPage() {
    const { requestOrder, handleViewItem } = useOrders();

    const allItems = [
        ...portfolioData.shirts,
        ...portfolioData.trousers,
        ...portfolioData.suits,
        ...portfolioData.native
    ];

    return (
        <div className="container mx-auto px-4 py-12 text-black">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Our Portfolio</h1>
            <p className="text-gray-600 mb-12 text-lg">Showcasing {allItems.length} custom-tailored designs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allItems.map(item => (
                    <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={handleViewItem} />
                ))}
            </div>
        </div>
    );
}