"use client";
import { useOrders } from '@/lib/context/OrderContext';
import { useState } from 'react';

export default function OrderRequestPage() {
    const { orderRequests } = useOrders();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        state: '',
        measurements: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const tailorNumber = '2349050622081'; // tailor's WhatsApp number
        const lines = [];
        lines.push('*🎨 CUSTOM ORDER REQUEST - IJ STITCHES*');
        lines.push('');
        lines.push('👤 *Customer Details:*');
        lines.push(`Name: ${formData.name}`);
        lines.push(`Email: ${formData.email}`);
        lines.push(`Phone: ${formData.phone}`);
        lines.push(`Address: ${formData.address}`);
        lines.push(`State: ${formData.state}`);
        lines.push('');
        lines.push('✂️ *Requested Designs:*');

        orderRequests.forEach((item, index) => {
            lines.push(`${index + 1}. Custom ${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`);
            lines.push(`   Quantity: ${item.quantity}`);
            lines.push('');
        });

        if (formData.measurements) {
            lines.push('📏 *Special Measurements/Notes:*');
            lines.push(formData.measurements);
            lines.push('');
        }

        lines.push('');
        lines.push('_Thank you for choosing IJ STITCHES - We Clothe The World_');

        const message = lines.join('\n');
        const url = `https://wa.me/${tailorNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="container mx-auto px-4 py-50 min-h-screen">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Request Custom Order</h1>
            <p className="text-gray-600 mb-12 text-lg">Fill in your details and we'll get started on your custom pieces</p>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Your Information</h2>
                    <form onSubmit={handleSubmit} className="space-y-6 text-black">
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-900">Full Name *</label>
                            <input
                                type="text"
                                required
                                className="w-full border-2 border-gray-300 p-4 rounded-lg focus:border-black focus:outline-none transition"
                                value={formData.name}
                                placeholder="Enter your full name"
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-900">Email *</label>
                            <input
                                type="email"
                                required
                                className="w-full text-black border-2 border-gray-300 p-4 rounded-lg focus:border-black focus:outline-none transition"
                                value={formData.email}
                                placeholder="Enter your email"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-900">Phone Number *</label>
                            <input
                                type="tel"
                                required
                                className="w-full text-black border-2 border-gray-300 p-4 rounded-lg focus:border-black focus:outline-none transition"
                                value={formData.phone}
                                placeholder="Enter your number"
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-900">Address *</label>
                            <textarea
                                required
                                className="w-full text-black border-2 border-gray-300 p-4 rounded-lg focus:border-black focus:outline-none transition"
                                rows="3"
                                value={formData.address}
                                placeholder="Enter your address"
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-900">State *</label>
                            <input
                                type="text"
                                required
                                className="w-full text-black border-2 border-gray-300 p-4 rounded-lg focus:border-black focus:outline-none transition"
                                value={formData.state}
                                placeholder="Enter your state"
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-gray-900">Special Measurements/Notes (Optional)</label>
                            <textarea
                                className="w-full text-black border-2 border-gray-300 p-4 rounded-lg focus:border-black focus:outline-none transition"
                                rows="4"
                                placeholder="Enter any specific measurements or design preferences..."
                                value={formData.measurements}
                                onChange={(e) => setFormData({ ...formData, measurements: e.target.value })}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-5 hover:from-black hover:to-gray-900 transition font-bold text-lg rounded-lg shadow-xl"
                        >
                            SEND REQUEST VIA WHATSAPP
                        </button>
                    </form>
                </div>

                <div>
                    <h2 className="text-3xl font-bold mb-8 text-gray-900">Order Summary</h2>
                    <div className="bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl text-black border-2 border-gray-200 shadow-xl">
                        {orderRequests.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No designs requested yet</p>
                            </div>
                        ) : (
                            <>
                                <div className="space-y-6 mb-8">
                                    {orderRequests.map(item => (
                                        <div key={item.id} className="flex gap-6 border-b-2 border-gray-200 pb-6">
                                            <img src={item.frontImage} alt="Requested design" className="w-28 h-28 object-cover shadow-md" />
                                            <div className="flex-1">
                                                <h3 className="font-bold text-lg">Custom {item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h3>
                                                <p className="text-gray-600 mt-2">Quantity: {item.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-black text-white p-6">
                                    <p className="text-lg font-bold">Total Designs Requested: {orderRequests.length}</p>
                                    <p className="text-sm mt-2 text-gray-300">Custom pricing will be discussed via WhatsApp based on fabric selection and specifications</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}