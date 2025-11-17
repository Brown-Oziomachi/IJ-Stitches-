"use client";
import Link from 'next/link';
import { Handbag, Plus, Minus, Trash2 } from 'lucide-react';
import { useOrders } from '@/lib/context/OrderContext';

export default function OrdersPage() {
    const { orderRequests, updateQuantity, removeFromOrders, setShowCart } = useOrders();

    return (
        <div className="container mx-auto px-4 py-12 min-h-screen text-black">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Your Order Requests</h1>
            <p className="text-gray-600 mb-12 text-lg">Review your selected designs before submitting your request</p>

            {orderRequests.length === 0 ? (
                <div className="text-center py-20">
                    <Handbag size={100} className="mx-auto mb-8 text-gray-300" />
                    <h2 className="text-3xl font-bold mb-4 text-gray-900">No designs requested yet</h2>
                    <p className="text-gray-600 mb-10 text-lg">Browse our portfolio and request designs you like!</p>
                    <Link
                        href="/portfolio"
                        className="inline-block bg-black text-white px-10 py-4 hover:bg-gray-800 transition font-bold text-lg rounded-lg shadow-xl"
                    >
                        BROWSE PORTFOLIO
                    </Link>
                </div>
            ) : (
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {orderRequests.map(item => (
                                <div key={item.id} className="flex gap-6 border-2 border-gray-200 p-6 bg-white text-black">
                                    <img src={item.frontImage} alt="Requested design" className="w-40 h-40 object-cover" />
                                    <div className="flex-1">
                                        <h3 className="font-bold text-2xl mb-3 text-gray-900">Custom {item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
                                        <p className="text-gray-600 mb-6">Custom-tailored to your exact measurements</p>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="bg-white p-2 hover:bg-gray-200 transition shadow"
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className="px-4 font-bold text-lg">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="bg-white p-2 hover:bg-gray-200 rounded-lg transition shadow"
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => removeFromOrders(item.id)}
                                                className="ml-auto text-red-600 hover:text-red-800 flex items-center gap-2 font-semibold"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl sticky top-24 border-2 border-gray-200 shadow-xl">
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Request Summary</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-700">Total Designs:</span>
                                    <span className="font-bold text-gray-900">{orderRequests.reduce((sum, item) => sum + item.quantity, 0)}</span>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg">
                                    <p className="text-sm text-gray-600">Custom pricing will be discussed based on your fabric preferences and design specifications</p>
                                </div>
                            </div>
                            <Link
                                href="/request"
                                onClick={() => setShowCart(false)}
                                className="block w-full bg-gradient-to-r from-gray-900 to-black text-white py-5 hover:from-black hover:to-gray-900 transition font-bold text-lg mb-4 rounded-lg shadow-xl text-center"
                            >
                                SUBMIT REQUEST
                            </Link>
                            <Link
                                href="/portfolio"
                                className="block w-full bg-white text-black border-2 border-black py-5 hover:bg-gray-100 transition font-bold text-lg rounded-lg text-center"
                            >
                                BROWSE MORE DESIGNS
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}