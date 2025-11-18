"use client";
import Link from 'next/link';
import { OrderProvider, useOrders } from '@/lib/context/OrderContext';
import './globals.css';
import Navigation from '@/components/Navigation';
import ItemViewModal from '@/components/ItemViewModal';
import OrderPanel from '@/components/PanelOrder';
import { Phone, Mail, MapPin } from "lucide-react";

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

      <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-white py-16 border-t-4 border-amber-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Info */}
            <div>
              <h3 className="text-3xl font-serif font-bold mb-4 tracking-wider">IJ STITCHES</h3>
              <p className="text-amber-50 text-lg mb-2 font-light tracking-wide">We Clothe The World</p>
              <p className="text-amber-50/80 text-sm">Expert Bespoke Tailoring Since 1994</p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-xl mb-4 text-amber-100">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-amber-50 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-amber-50 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-amber-50 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-amber-50 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-xl mb-4 text-amber-100">Contact</h4>
              <ul className="space-y-3 text-amber-50">
                <li className="flex items-center gap-3">
                  <Phone className="text-amber-50 w-5 h-5" /> +234 701 372 5529
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-amber-50 w-5 h-5" /> info@ijstitches.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-amber-50 w-5 h-5" /> Lagos, Nigeria
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-amber-800 pt-8 text-center text-amber-50 text-sm">
            © 2024 IJ STITCHES. All rights reserved. | <span className="font-light italic">We Clothe The World</span>
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