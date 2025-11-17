"use client";
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold mb-6 text-center text-gray-900">Get In Touch</h1>
                    <p className="text-xl text-gray-600 mb-16 text-center">Ready to create your perfect custom garment? Contact us today!</p>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-2xl shadow-xl border-2 border-gray-200">
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-6">
                                    <div className="bg-black text-white p-4 rounded-lg">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-gray-900">Phone</h3>
                                        <p className="text-gray-600 text-lg">+234 701 372 5529</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-black text-white p-4 rounded-lg">
                                        <Mail size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-gray-900">Email</h3>
                                        <p className="text-gray-600 text-lg">info@ijstitches.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6">
                                    <div className="bg-black text-white p-4 rounded-lg">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 text-gray-900">Visit Our Workshop</h3>
                                        <p className="text-gray-600 text-lg">Lagos, Nigeria</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl shadow-xl text-white">
                            <h2 className="text-3xl font-bold mb-6">Business Hours</h2>
                            <div className="space-y-4 text-lg">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Monday - Friday:</span>
                                    <span>9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Saturday:</span>
                                    <span>10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">Sunday:</span>
                                    <span>By Appointment</span>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-gray-700">
                                <h3 className="text-2xl font-bold mb-4">Connect With Us</h3>
                                <p className="text-gray-300 text-lg">Follow us on social media for the latest designs and updates!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}