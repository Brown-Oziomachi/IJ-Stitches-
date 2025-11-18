const { Mail, Phone, MapPin } = require("lucide-react");

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="grid md:grid-cols-2 min-h-screen lg:px-24 lg:py-24 max-md:px-5 max-md:py-10">
                {/* Left Side - Image */}
                <div className="relative bg-gray-200">
                    <img
                        src="13.jpg"
                        alt="Grandeur Tailors Workshop"
                         className="w-full h-full object-cover"
                    />
                    <div className="absolute top-8 left-8 bg-white rounded-full p-4 shadow-lg">
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex items-center justify-center p-8 md:p-16">
                    <div className="max-w-xl w-full">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Get in touch</h1>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                            Have a question? I'm always ready to help. Feel free to reach out anytime, I'll be glad to have you in my atelier.                                  </p>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <Mail className="text-gray-600 mt-1" size={20} />
                                <div>
                                    <p className="text-gray-900">
                                        <span className="font-medium">Email:</span>{' '}
                                        <span className="text-gray-600">grandeurtailors@gmail.com</span>
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Phone className="text-gray-600 mt-1" size={20} />
                                <div>
                                    <p className="text-gray-900">
                                        <span className="font-medium">Phone Number:</span>{' '}
                                        <span className="text-gray-600">+234 708 025 0212</span>
                                    </p>
                                </div>
                            </div>

                            {/* Office Addresses */}
                            <div className="flex items-start gap-4">
                                <MapPin className="text-gray-600 mt-1" size={20} />
                                <div>
                                    <p className="text-gray-900 font-medium mb-3">Office Address:</p>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-700 mt-1.5">•</span>
                                            <span>A5, The Greyheights, Ope-Daniel, Taiwo Street, Ikate, Lekki, Lagos State.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-amber-700 mt-1.5">•</span>
                                            <span>19A, Alake Street, Opposite Abeokuta South LG Secretariat, Ake, Abeokuta, Ogun State.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-12">
                            <a href="#" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}