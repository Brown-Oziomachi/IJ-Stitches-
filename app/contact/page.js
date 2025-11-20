import { Mail, Phone, MapPin, Facebook } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
            <div className="grid md:grid-cols-2 min-h-screen lg:px-24 lg:py-44 max-md:px-5 max-lg:py-40">
                {/* Left Side - Image */}
                <div className="relative bg-gray-200">
                    <img
                        src="13.jpg"
                        alt="Grandeur Tailors Workshop"
                        className="w-full h-full object-cover"
                    />
                   
                </div>

                {/* Right Side - Content */}
                <div className="flex items-center justify-center p-8 md:p-16">
                    <div className="max-w-xl w-full">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">Get in touch</h1>
                        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                            Have a question? I'm always ready to help. Feel free to reach out anytime, I'll be glad to have you in my atelier.
                        </p>

                        <div className="space-y-8">
                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <Mail className="text-gray-600 mt-1" size={20} />
                                <div>
                                    <p className="text-gray-900">
                                        <span className="font-medium">Email:</span>{' '}
                                        <span className="text-gray-600">jeecee54@gmail.com</span>
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <Phone className="text-gray-600 mt-1" size={20} />
                                <div>
                                    <p className="text-gray-900">
                                        <span className="font-medium">Phone Number:</span>{' '}
                                        <span className="text-gray-600">+234 813 081 1263</span>
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
                                            <span>106, Cameroon Road Aba, Opposite shopping center, Aba, Abia State, Nigeria.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-12">
                            <a
                                href="https://www.facebook.com/share/1LrcgybQ17/?mibextid=qi2Omg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                            >
                                <Facebook className="w-6 h-6 text-white" />
                            </a>
                            <a
                                href="mailto:jeecee54@gmail.com"
                                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center hover:bg-gray-800 transition-colors"
                            >
                                <Mail className="w-6 h-6 text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}