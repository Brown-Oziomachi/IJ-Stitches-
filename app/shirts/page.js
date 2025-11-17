// app/shirts/page.js
"use client";
import { portfolioData, categoryTitles } from '@/lib/portfolioData';
import PortfolioCard from '@/components/PortfolioCard';
import { useOrders } from '@/lib/context/OrderContext';

export default function ShirtsPage() {
    const { requestOrder, handleViewItem } = useOrders();
    const items = portfolioData.shirts;

    return (
        <div className="container mx-auto px-4 py-12 text-black">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">{categoryTitles.shirts}</h1>
            <p className="text-gray-600 mb-12 text-lg">Showcasing {items.length} custom designs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {items.map(item => (
                    <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={handleViewItem} />
                ))}
            </div>
        </div>
    );
}

// // app/trousers/page.js
// "use client";
// import { useOrders } from '@/lib/context/OrderContext';
// import { portfolioData, categoryTitles } from '@/lib/portfolioData';
// import PortfolioCard from '@/components/PortfolioCard';

// export default function TrousersPage() {
//     const { requestOrder, handleViewItem } = useOrders();
//     const items = portfolioData.trousers;

//     return (
//         <div className="container mx-auto px-4 py-12 text-black">
//             <h1 className="text-5xl font-bold mb-4 text-gray-900">{categoryTitles.trousers}</h1>
//             <p className="text-gray-600 mb-12 text-lg">Showcasing {items.length} custom designs</p>
//             <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                 {items.map(item => (
//                     <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={handleViewItem} />
//                 ))}
//             </div>
//         </div>
//     );
// }

