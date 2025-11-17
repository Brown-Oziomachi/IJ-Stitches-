"use client";
import React, { useState } from 'react';
import { Handbag, Menu, X, Plus, Minus, Trash2, User, Search, Eye, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';

const portfolioData = {
  shirts: [
    { id: 1, frontImage: "1.jpg", category: "shirts" },
    { id: 2, frontImage: "11.jpg",  category: "shirts" },
    { id: 3, frontImage: "9.jpg", category: "shirts" },
    { id: 4, frontImage: "9.jpg", category: "shirts" },
  ],
  trousers: [
    { id: 5, frontImage: "shirt1.jpg", backImage: "trouser1.jpg", category: "shirt" },
    { id: 6, frontImage: "shirt3.jpg", backImage: "trouser2.jpg", category: "shirt" },
    { id: 7, frontImage: "shirt4.jpg", backImage: "trouser3.jpg", category: "shirt" },
    { id: 8, frontImage: "shirt5.jpg", backImage: "trouser4.jpg", category: "shirt" },
  ],
  suits: [
    { id: 9, frontImage: "suit12.jpg", backImage: "suit12.jpg", category: "suits" },
    { id: 10, frontImage: "suit13.jpg", backImage: "suit12.jpg", category: "suits" },
    { id: 10, frontImage: "suit14.jpg", backImage: "suit12.jpg", category: "suits" },
  ],
  native: [
    { id: 13, frontImage: "2.jpg", backImage: "2.jpg", category: "native" },
    { id: 14, frontImage: "3.jpg", backImage: "3.jpg", category: "native" },
    { id: 15, frontImage: "5.jpg", backImage: "5.jpg", category: "native" },
    { id: 16, frontImage: "7.jpg", backImage: "7.jpg", category: "native" },
    { id: 16, frontImage: "8.jpg", backImage: "7.jpg", category: "native" },
    { id: 16, frontImage: "9.jpg", backImage: "7.jpg", category: "native" },
    { id: 16, frontImage: "10.jpg", backImage: "7.jpg", category: "native" },
    { id: 16, frontImage: "11.jpg", backImage: "7.jpg", category: "native" },
    { id: 16, frontImage: "4.jpg", backImage: "7.jpg", category: "native" },
    { id: 16, frontImage: "6.jpg", backImage: "7.jpg", category: "native" },
  ]
};

const Navigation = ({ setCurrentPage, cartItems, setShowCart, showMobileMenu, setShowMobileMenu }) => {
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white sticky top-0 z-50 shadow-2xl border-b border-gray-800">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
         <div className="flex items-center gap-4">
  <div onClick={() => setCurrentPage('home')} className="cursor-pointer select-none">
    <h1 className="text-3xl font-serif font-semibold tracking-[0.25em] text-white drop-shadow-sm ">
      Ij Stitches
    </h1>
    <p className="text-[10px] tracking-[0.45em] text-gray-300/80 mt-1">
      WE CLOTHE THE WORLD
    </p>
  </div>
</div>


          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-gray-300 transition font-medium">HOME</button>
            <button onClick={() => setCurrentPage('portfolio')} className="hover:text-gray-300 transition font-medium">PORTFOLIO</button>
            <button onClick={() => setCurrentPage('shirts')} className="hover:text-gray-300 transition font-medium">SHIRTS</button>
            <button onClick={() => setCurrentPage('trousers')} className="hover:text-gray-300 transition font-medium">TROUSERS</button>
            <button onClick={() => setCurrentPage('suits')} className="hover:text-gray-300 transition font-medium">SUITS</button>
            <button onClick={() => setCurrentPage('native')} className="hover:text-gray-300 transition font-medium">NATIVE WEAR</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-gray-300 transition font-medium">ABOUT</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-gray-300 transition font-medium">CONTACT</button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => { setCurrentPage('orders'); setShowCart(true); }}
              className="relative hover:text-gray-300 transition"
            >
              <Handbag size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {showMobileMenu && (
          <div className="md:hidden mt-4 flex flex-col gap-7 pb-4 p-5 h-300">
            <button onClick={() => { setCurrentPage('home'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">HOME</button>
            <button onClick={() => { setCurrentPage('portfolio'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">PORTFOLIO</button>
            <button onClick={() => { setCurrentPage('shirts'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">SHIRTS</button>
            <button onClick={() => { setCurrentPage('trousers'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">TROUSERS</button>
            <button onClick={() => { setCurrentPage('suits'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">SUITS</button>
            <button onClick={() => { setCurrentPage('native'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">NATIVE WEAR</button>
            <button onClick={() => { setCurrentPage('about'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">ABOUT</button>
            <button onClick={() => { setCurrentPage('contact'); setShowMobileMenu(false); }} className="text-left hover:text-gray-300 font-medium">CONTACT</button>
            <button onClick={() => { setCurrentPage('orders'); setShowMobileMenu(false); setShowCart(true); }} className="text-left hover:text-gray-300 font-medium">ORDERS ({cartCount})</button>
          </div>
        )}
      </div>
    </nav>
  );
};

const CategoryCarousel = ({ category, setCurrentPage, requestOrder, onViewItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = category.items.slice(0, 4);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="bg-orange-50 overflow-hidden">
      <div className="relative group">
        <img
          src={currentItem.frontImage}
          alt={`${category.name} showcase`}
          className="w-full h-[500px] object-cover"
        />
        
        {items.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition z-10"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-90 transition z-10"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <button
          onClick={() => requestOrder(currentItem)}
          className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-gray-900 to-black text-white py-3 px-4 text-sm font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition hover:from-black hover:to-gray-900"
        >
          REQUEST THIS DESIGN
        </button>

        <button
          onClick={() => onViewItem(currentItem)}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-gray-100 shadow-lg"
        >
          <Eye size={18} />
        </button>

        {items.length > 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-white w-8' : 'bg-white bg-opacity-50 w-2'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 text-center bg-gradient-to-b from-white to-gray-50">
        <h3 className="font-bold text-xl mb-3 text-gray-900">{category.name}</h3>
        <button
          onClick={() => setCurrentPage(category.category)}
          className="text-sm text-black font-semibold hover:underline inline-flex items-center gap-2"
        >
          VIEW ALL {category.items.length} DESIGNS →
        </button>
      </div>
    </div>
  );
};

const PortfolioCard = ({ item, requestOrder, onViewItem }) => {
  return (
    <div className="bg-white group overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div 
        className="relative overflow-hidden cursor-pointer h-[600px] w-full"
        onClick={() => onViewItem(item)}
      >
        <img
          src={item.frontImage}
          alt="Custom tailored garment"
          className="w-full h-[600px] object-cover transition duration-500 group-hover:scale-105"
        />
        <button
          onClick={(e) => { e.stopPropagation(); onViewItem(item); }}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition hover:bg-gray-100 shadow-lg"
        >
          <Eye size={20} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); requestOrder(item); }}
          className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-gray-900 to-black text-white py-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition hover:from-black hover:to-gray-900 font-bold"
        >
          REQUEST THIS DESIGN
        </button>
      </div>
    </div>
  );
};

const ItemViewModal = ({ item, onClose, requestOrder, onViewItem }) => {
  if (!item) return null;

  const similarItems = portfolioData[item.category]?.filter(p => p.id !== item.id).slice(0, 4) || [];

  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white max-w-6xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-black p-3 hover:bg-gray-100 z-10 "
          >
            <X size={24} />
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="relative group">
                <img
                  src={item.frontImage}
                  alt="Front view"
                  className="w-full h-auto shadow-xl"
                />
               
              </div>
              {item.backImage && item.backImage !== item.frontImage && (
                <div className="relative group">
                  <img
                    src={item.backImage}
                    alt="Back view"
                    className="w-full h-auto "
                  />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-2 text-sm font-semibold">
                    BACK VIEW
                  </div>
                </div>
              )}
            </div>

            <div className="text-black flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Custom {item.category.charAt(0).toUpperCase() + item.category.slice(1)}</h2>
              
              <div className="mb-8 space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-lg">About This Design</h3>
                  <p className="text-gray-700 leading-relaxed">
                    This is a showcase of our expert tailoring work. Each piece is custom-made to exact measurements and specifications, ensuring a perfect fit and premium finish.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-3 text-lg">What You Get</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>✓ Custom measurements</li>
                    <li>✓ Premium fabric selection</li>
                    <li>✓ Expert craftsmanship</li>
                    <li>✓ Perfect fit guarantee</li>
                  </ul>
                </div>
              </div>

              <button
                onClick={() => {
                  requestOrder(item);
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-5 hover:from-black hover:to-gray-900 transition font-bold text-lg rounded-lg shadow-xl"
              >
                REQUEST THIS DESIGN
              </button>
            </div>
          </div>

          {similarItems.length > 0 && (
            <div className="border-t px-8 py-8 bg-gray-50">
              <h3 className="text-2xl font-bold mb-6 text-black">More From This Category</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {similarItems.map(similarItem => (
                  <div
                    key={similarItem.id}
                    className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition transform hover:scale-105"
                    onClick={() => onViewItem(similarItem)}
                  >
                    <div className="relative h-48">
                      <img
                        src={similarItem.frontImage}
                        alt="Similar design"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <button
                        onClick={(e) => { e.stopPropagation(); requestOrder(similarItem); }}
                        className="w-full bg-black text-white py-2 text-xs font-bold hover:bg-gray-800 transition rounded"
                      >
                        REQUEST DESIGN
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AutoScrollCarousel = ({ requestOrder }) => {
  const showcaseImages = [
    { id: 1, src: "2.jpg", item: portfolioData.native[0] },
    { id: 2, src: "3.jpg", item: portfolioData.native[1] },
    { id: 3, src: "4.jpg", item: portfolioData.native[2] },
    { id: 4, src: "5.jpg", item: portfolioData.native[3] },
    { id: 5, src: "6.jpg", item: portfolioData.native[0] },
    { id: 6, src: "7.jpg", item: portfolioData.suits[0] },
    { id: 7, src: "8.jpg", item: portfolioData.suits[1] },
    { id: 8, src: "10.jpg", item: portfolioData.native[0] },
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="text-4xl font-bold text-center text-gray-900">TRADITIONAL NATIVE WEAR SHOWCASE</h2>
        <p className="text-center text-gray-600 mt-3 text-lg">Authentic designs with intricate embroidery and expert craftsmanship</p>
      </div>
      <div className="relative w-full">
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 50s linear infinite;
            display: flex;
            width: max-content;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="animate-scroll gap-1">
          {[...showcaseImages, ...showcaseImages, ...showcaseImages].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 w-[400px] h-[600px] overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full relative group cursor-pointer">
                <img
                  src={item.src}
                  alt="Tailored garment"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  onClick={() => requestOrder(item.item)}
                  className="absolute bottom-6 left-6 right-6 bg-white text-black py-4 px-6 font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100 z-10 rounded-lg shadow-xl"
                >
                  REQUEST THIS DESIGN
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HomePage = ({ requestOrder, setCurrentPage, onViewItem }) => {
  const featuredItems = [
    ...portfolioData.shirts.slice(0, 2),
    ...portfolioData.suits.slice(0, 2)
  ];

  return (
    <div>
      {/* HERO SECTION */}
 <div className="relative h-screen overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="/sow.jpg"
      alt="IJ Stitches"
      className="w-full h-full object-cover object-center brightness-75 blur-[1px]"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0  to-black/80"></div>

  {/* Content */}
  <div className="relative h-full flex items-center">
    <div className="container mx-auto px-8 md:px-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
          IJ STITCHES
        </h1>

        <div className="w-32 h-1 bg-amber-400 mb-8 shadow-md"></div>

        <p className="text-4xl max-md:text-2xl text-white font-light mb-6 tracking-wide drop-shadow-md">
          WE CLOTHE THE WORLD
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="bg-amber-400 text-black px-10 py-4 text-lg font-bold hover:bg-amber-300 transition shadow-2xl rounded"
          >
            VIEW PORTFOLIO
          </button>

          <button
            onClick={() => setCurrentPage('contact')}
            className="bg-transparent border-2 border-white text-white px-10 py-4 text-lg font-bold hover:bg-white hover:text-black transition rounded"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
</div>



      <AutoScrollCarousel requestOrder={requestOrder} />

      {/* FULL WIDTH SHOWCASE SECTION */}
<div className="w-full bg-white">
  <div className="max-w-[1800px] mx-auto px-2 sm:px-6 lg:px-10">
    
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 text-black">
      SIGNATURE COLLECTIONS
    </h2>
    <p className="text-center text-gray-500 mb-12 sm:mb-16 text-base sm:text-lg">
      Premium craftsmanship meets timeless elegance
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full">

      {/* Tailor-Made Suits */}
      <div className="relative group overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01]">
        <div className="relative h-[450px] sm:h-[600px] md:h-[700px] w-full">
          <img
            src="suit12.jpg"
            alt="Tailor Made Suits"
            className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
          />

          <div className="absolute inset-0"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
              Tailor-Made Suits
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-gray-200">
              Handcrafted excellence for the distinguished gentleman
            </p>
            <button
              onClick={() => setCurrentPage('suits')}
              className="bg-white text-black px-6 sm:px-8 py-3 font-bold hover:bg-gray-200 transition rounded-lg shadow-xl text-sm sm:text-base"
            >
              EXPLORE COLLECTION
            </button>
          </div>

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
            <span className="font-semibold text-black text-xs sm:text-sm">PREMIUM COLLECTION</span>
          </div>
        </div>
      </div>

      {/* Native Elegance */}
      <div className="relative group overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.01]">
        <div className="relative h-[450px] sm:h-[600px] md:h-[700px] w-full">
          <img
            src="2.jpg"
            alt="Traditional Native Wear"
            className="w-full h-full brightness-90 group-hover:brightness-100 transition-all duration-500"
          />

          <div className="absolute inset-0 opacity-90"></div>

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
              Native Elegance
            </h3>
            <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-gray-200">
              Celebrating African heritage with modern sophistication
            </p>
            <button
              onClick={() => setCurrentPage('native')}
              className="bg-white text-black px-6 sm:px-8 py-3 font-bold hover:bg-gray-200 transition rounded-lg shadow-xl text-sm sm:text-base"
            >
              EXPLORE COLLECTION
            </button>
          </div>

          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
            <span className="font-semibold text-black text-xs sm:text-sm">CULTURAL HERITAGE</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>


      <div className="container mx-auto px-4 py-20 text-black">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">FEATURED DESIGNS</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Showcase of our recent custom tailoring work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.map(item => (
            <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={onViewItem} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-gray-50 py-20 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">BROWSE BY CATEGORY</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Explore our diverse portfolio of custom tailoring</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'CUSTOM SHIRTS', category: 'shirts', items: portfolioData.shirts },
              { name: 'TAILORED TROUSERS', category: 'trousers', items: portfolioData.trousers },
              { name: 'BESPOKE SUITS', category: 'suits', items: portfolioData.suits },
              { name: 'NATIVE WEAR', category: 'native', items: portfolioData.native }
            ].map((cat, idx) => (
              <CategoryCarousel 
                key={idx} 
                category={cat} 
                setCurrentPage={setCurrentPage}
                requestOrder={requestOrder}
                onViewItem={onViewItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OrderRequestPage = ({ orderRequests, setCurrentPage }) => {
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

    const tailorNumber = '2347013725529';
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
    <div className="container mx-auto px-4 py-12 min-h-screen">
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
};

const OrdersPage = ({ orderRequests, updateQuantity, removeFromOrders, setCurrentPage, setShowCart }) => {
  return (
    <div className="container mx-auto px-4 py-12 min-h-screen text-black">
      <h1 className="text-5xl font-bold mb-4 text-gray-900">Your Order Requests</h1>
      <p className="text-gray-600 mb-12 text-lg">Review your selected designs before submitting your request</p>

      {orderRequests.length === 0 ? (
        <div className="text-center py-20">
          <Handbag size={100} className="mx-auto mb-8 text-gray-300" />
          <h2 className="text-3xl font-bold mb-4 text-gray-900">No designs requested yet</h2>
          <p className="text-gray-600 mb-10 text-lg">Browse our portfolio and request designs you like!</p>
          <button
            onClick={() => setCurrentPage('portfolio')}
            className="bg-black text-white px-10 py-4 hover:bg-gray-800 transition font-bold text-lg rounded-lg shadow-xl"
          >
            BROWSE PORTFOLIO
          </button>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {orderRequests.map(item => (
                <div key={item.id} className="flex gap-6 border-2 border-gray-200 p-6 bg-white text-black ">
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
                        <span></span>
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
              <button
                onClick={() => { setCurrentPage('request'); setShowCart(false); }}
                className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-5 hover:from-black hover:to-gray-900 transition font-bold text-lg mb-4 rounded-lg shadow-xl"
              >
                SUBMIT REQUEST
              </button>
              <button
                onClick={() => setCurrentPage('portfolio')}
                className="w-full bg-white text-black border-2 border-black py-5 hover:bg-gray-100 transition font-bold text-lg rounded-lg"
              >
                BROWSE MORE DESIGNS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PortfolioPage = ({ requestOrder, onViewItem }) => {
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
          <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={onViewItem} />
        ))}
      </div>
    </div>
  );
};

const categoryTitles = {
  shirts: 'CUSTOM SHIRTS',
  trousers: 'TAILORED TROUSERS',
  suits: 'BESPOKE SUITS',
  native: 'NATIVE WEAR'
};

const CategoryPage = ({ category, items, requestOrder, onViewItem }) => (
  <div className="container mx-auto px-4 py-12 text-black">
    <h1 className="text-5xl font-bold mb-4 text-gray-900">{categoryTitles[category]}</h1>
    <p className="text-gray-600 mb-12 text-lg">Showcasing {items.length} custom designs</p>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {items.map(item => (
        <PortfolioCard key={item.id} item={item} requestOrder={requestOrder} onViewItem={onViewItem} />
      ))}
    </div>
  </div>
);

const AboutPage = ({ requestOrder }) => {
  const suitImages = [
    'suit12.jpg',
    'suit13.jpg',
    'suit12.jpg'
  ];

  const suitItems = [
    portfolioData.suits[0],
    portfolioData.suits[1],
    portfolioData.suits[0]
  ];

  const nativeWearImages = [
    '2.jpg',
    '5.jpg',
    '7.jpg'
  ];

  const nativeWearItems = [
    portfolioData.native[0],
    portfolioData.native[1],
    portfolioData.native[2]
  ];

  const shirtImages = [
    'shirt1.jpg',
    'shirt3.jpg',
    'shirt5.jpg'
  ];

  const shirtItems = [
    portfolioData.shirts[3],
    portfolioData.shirts[2],
    portfolioData.shirts[1]
  ];

  const ImageCarousel = ({ images, items, requestOrder }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3500);
      return () => clearInterval(interval);
    }, [images.length]);

    const currentItem = items[currentIndex];

    return (
      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
        <div className="absolute top-6 right-6 bg-white bg-opacity-95 px-4 py-2 rounded-full z-10 shadow-lg">
          <span className="text-sm font-bold text-black">{currentIndex + 1}/{images.length}</span>
        </div>
        
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Design ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {currentItem && (
          <button
            onClick={() => requestOrder(currentItem)}
            className="absolute bottom-6 left-6 right-6 bg-white text-black py-4 px-8 font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100 rounded-lg shadow-xl"
          >
            REQUEST THIS DESIGN
          </button>
        )}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex ? 'bg-white w-10' : 'bg-white bg-opacity-60 w-2'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="relative h-[500px] bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(/ijo.jpg)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white z-10 px-4">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-2xl">About IJ STITCHES</h1>
            <p className="text-2xl md:text-3xl drop-shadow-xl">Where Craftsmanship Meets Excellence</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img
              src="ijj.jpg"
              alt="Master Tailor"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-8 text-gray-900">Meet The Master Tailor</h2>
            <h3 className="text-3xl font-semibold mb-6 text-gray-700">Joel I. Onyi MD</h3>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              With over 30 years of expertise in bespoke tailoring, Chief Ibrahim Joel founded IJ STITCHES with a passion for creating garments that embody elegance, precision, and individuality.
            </p>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              From traditional African attire to contemporary European suits, every piece is crafted with meticulous attention to detail, ensuring the perfect fit and finish for each client.
            </p>
            <blockquote className="border-l-4 border-black pl-6 italic text-gray-600 mt-8 text-lg">
              "We don't just make clothes—we create confidence, we celebrate heritage, and we craft masterpieces that tell your story."
              <span className="block mt-3 not-italic font-semibold text-black text-xl">- Chief Ibrahim Joel</span>
            </blockquote>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Our Signature Work</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <ImageCarousel 
                images={suitImages}
                items={suitItems}
                requestOrder={requestOrder}
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">Bespoke Suit Tailoring</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Each suit is meticulously crafted to your exact measurements and style preferences. Our master tailors use traditional techniques combined with modern precision to create garments that fit like a second skin and make a lasting impression.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-bold mb-6 text-gray-900">Traditional Native Wear</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                We honor African heritage through our exquisite traditional wear collection. Our Agbadas, Kaftans, and Senator styles feature intricate embroidery and authentic designs that celebrate cultural richness and pride.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ImageCarousel 
                images={nativeWearImages}
                items={nativeWearItems}
                requestOrder={requestOrder}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageCarousel 
                images={shirtImages}
                items={shirtItems}
                requestOrder={requestOrder}
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">Premium Shirt Collection</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our shirts are crafted from the finest Egyptian cotton and premium fabrics. Each shirt is tailored for perfect fit and lasting quality with attention to collar styles, cuff details, and button placement.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-16 shadow-2xl">
          <h2 className="text-5xl font-bold text-center mb-16">Why Choose IJ STITCHES?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="text-6xl mb-6">✂️</div>
              <h4 className="text-2xl font-bold mb-3">Master Craftsmanship</h4>
              <p className="text-gray-300 text-lg">30+ years of tailoring excellence</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">📏</div>
              <h4 className="text-2xl font-bold mb-3">Perfect Fit</h4>
              <p className="text-gray-300 text-lg">Custom measurements for every client</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🧵</div>
              <h4 className="text-2xl font-bold mb-3">Premium Fabrics</h4>
              <p className="text-gray-300 text-lg">Sourced from the finest mills worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">⭐</div>
              <h4 className="text-2xl font-bold mb-3">Client Satisfaction</h4>
              <p className="text-gray-300 text-lg">Thousands of satisfied clients since 1994</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
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
};

const OrderPanel = ({ showCart, setShowCart, orderRequests, updateQuantity, removeFromOrders, setCurrentPage }) => {
  if (!showCart) return null;

  return (
<div
  className="fixed inset-0 bg-[url('/sow.jpg')] bg-cover bg-center z-50 flex justify-end"
  onClick={() => setShowCart(false)}
>
  <div
    className="bg-white/80 text-black w-full md:w-[450px] h-full overflow-y-auto shadow-2xl"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="p-8">
      <div className="flex justify-between items-center mb-8 border-b-2 border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900">Order Requests</h2>
        <button onClick={() => setShowCart(false)} className="hover:bg-gray-100 p-2 rounded-lg transition">
          <X size={48} />
        </button>
      </div>

      {orderRequests.length === 0 ? (
        <div className="text-center py-16">
          <Handbag size={80} className="mx-auto mb-6 text-gray-300" />
          <p className="text-gray-500 text-lg">No designs requested yet</p>
        </div>
      ) : (
        <>
          <div className="space-y-6 mb-8">
            {orderRequests.map(item => (
              <div key={item.id} className="flex gap-4 border-b-2 border-gray-200 pb-6">
                <img src={item.frontImage} alt="Requested design" className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">
                    Custom {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                  </h3>

                  <div className="flex items-center gap-2 mt-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-gray-100 p-1 hover:bg-gray-200 rounded">
                      <Minus size={16} />
                    </button>

                    <span className="px-3 font-bold">{item.quantity}</span>

                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-gray-100 p-1 hover:bg-gray-200 rounded">
                      <Plus size={16} />
                    </button>

                    <button onClick={() => removeFromOrders(item.id)}
                      className="ml-auto text-red-600 hover:text-red-800">
                      <Trash2 size={18} />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

              <div className="border-t-2 border-gray-200 pt-6 space-y-5">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-gray-900">Total Designs:</span>
                    <span className="text-2xl font-bold text-gray-900">{orderRequests.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                  <p className="text-sm text-gray-600">Custom pricing will be discussed via WhatsApp</p>
                </div>

                <button
                  onClick={() => { setCurrentPage('request'); setShowCart(false); }}
                  className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 hover:from-black hover:to-gray-900 transition font-bold rounded-lg shadow-xl"
                >
                  SUBMIT REQUEST
                </button>
                <button
                  onClick={() => { setCurrentPage('portfolio'); setShowCart(false); }}
                  className="w-full bg-white text-black border-2 border-black py-4 hover:bg-gray-100 transition font-bold rounded-lg"
                >
                  BROWSE MORE
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

function TailorPortfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [orderRequests, setOrderRequests] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [viewingItem, setViewingItem] = useState(null);

  const requestOrder = (item) => {
    const existingItem = orderRequests.find(order => order.id === item.id);
    if (existingItem) {
      setOrderRequests(orderRequests.map(order =>
        order.id === item.id
          ? { ...order, quantity: order.quantity + 1 }
          : order
      ));
    } else {
      setOrderRequests([...orderRequests, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setOrderRequests(orderRequests.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromOrders = (id) => {
    setOrderRequests(orderRequests.filter(item => item.id !== id));
  };

  const handleViewItem = (item) => {
    setViewingItem(item);
  };

  const handleCloseItemView = () => {
    setViewingItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation
        setCurrentPage={setCurrentPage}
        cartItems={orderRequests}
        setShowCart={setShowCart}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      {currentPage === 'home' && <HomePage requestOrder={requestOrder} setCurrentPage={setCurrentPage} onViewItem={handleViewItem} />}
      {currentPage === 'portfolio' && <PortfolioPage requestOrder={requestOrder} onViewItem={handleViewItem} />}
      {currentPage === 'orders' && <OrdersPage orderRequests={orderRequests} updateQuantity={updateQuantity} removeFromOrders={removeFromOrders} setCurrentPage={setCurrentPage} setShowCart={setShowCart} />}
      {currentPage === 'shirts' && <CategoryPage category="shirts" items={portfolioData.shirts} requestOrder={requestOrder} onViewItem={handleViewItem} />}
      {currentPage === 'trousers' && <CategoryPage category="trousers" items={portfolioData.trousers} requestOrder={requestOrder} onViewItem={handleViewItem} />}
      {currentPage === 'suits' && <CategoryPage category="suits" items={portfolioData.suits} requestOrder={requestOrder} onViewItem={handleViewItem} />}
      {currentPage === 'native' && <CategoryPage category="native" items={portfolioData.native} requestOrder={requestOrder} onViewItem={handleViewItem} />}
      {currentPage === 'request' && <OrderRequestPage orderRequests={orderRequests} setCurrentPage={setCurrentPage} />}
      {currentPage === 'about' && <AboutPage requestOrder={requestOrder} />}
      {currentPage === 'contact' && <ContactPage />}

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
        setCurrentPage={setCurrentPage}
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
                <button onClick={() => setCurrentPage('home')} className="block text-gray-400 hover:text-white transition">Home</button>
                <button onClick={() => setCurrentPage('portfolio')} className="block text-gray-400 hover:text-white transition">Portfolio</button>
                <button onClick={() => setCurrentPage('about')} className="block text-gray-400 hover:text-white transition">About</button>
                <button onClick={() => setCurrentPage('contact')} className="block text-gray-400 hover:text-white transition">Contact</button>
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

export default function Page() {
  return <TailorPortfolio />;
}