"use client";
import Link from 'next/link';
import { OrderProvider, useOrders } from '@/lib/context/OrderContext';
import './globals.css';
import Navigation from '@/components/Navigation';
import ItemViewModal from '@/components/ItemViewModal';
import OrderPanel from '@/components/PanelOrder';

function LayoutContent({ children }) {
  const { viewingItem, handleCloseItemView, requestOrder, handleViewItem, showCart, setShowCart, orderRequests, updateQuantity, removeFromOrders } = useOrders();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>{children}</main>

      <ItemViewModal
        item={viewingItem}
        onClose={handleCloseItemView}
        requestOrder={requestOrder}
        onViewItem={handleViewItem}
      />

      <OrderPanel
        showCart={showCart}
        setShowCart={setShowCart}
        orderRequests={orderRequests}
        updateQuantity={updateQuantity}
        removeFromOrders={removeFromOrders}
      />

      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12 mt-20 border-t-4 border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">IJ STITCHES</h3>
              <p className="text-gray-400 text-lg">We Clothe The World</p>
              <p className="text-gray-400 mt-2">Expert Bespoke Tailoring Since 1994</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-white transition">Home</Link>
                <Link href="/portfolio" className="block text-gray-400 hover:text-white transition">Portfolio</Link>
                <Link href="/about" className="block text-gray-400 hover:text-white transition">About</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-white transition">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <p className="text-gray-400">Phone: +234 701 372 5529</p>
              <p className="text-gray-400 mt-2">Email: info@ijstitches.com</p>
              <p className="text-gray-400 mt-2">Lagos, Nigeria</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 IJ STITCHES. All rights reserved. | We Clothe The World</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <OrderProvider>
          <LayoutContent>{children}</LayoutContent>
        </OrderProvider>
      </body>
    </html>
  );
}