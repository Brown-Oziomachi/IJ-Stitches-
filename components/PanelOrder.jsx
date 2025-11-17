"use client";
import Link from "next/link";
import { X, Handbag, Plus, Minus, Trash2 } from "lucide-react";

export default function OrderPanel({
  showCart,
  setShowCart,
  orderRequests,
  updateQuantity,
  removeFromOrders,
}) {
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
            <button
              onClick={() => setShowCart(false)}
              className="hover:bg-gray-100 p-2 rounded-lg transition"
            >
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
                {orderRequests.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 border-b-2 border-gray-200 pb-6"
                  >
                    <img
                      src={item.frontImage}
                      alt="Requested design"
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">
                        Custom{" "}
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </h3>

                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="bg-gray-100 p-1 hover:bg-gray-200 rounded"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="px-3 font-bold">{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="bg-gray-100 p-1 hover:bg-gray-200 rounded"
                        >
                          <Plus size={16} />
                        </button>

                        <button
                          onClick={() => removeFromOrders(item.id)}
                          className="ml-auto text-red-600 hover:text-red-800"
                        >
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
                    <span className="text-lg font-bold text-gray-900">
                      Total Designs:
                    </span>
                    <span className="text-2xl font-bold text-gray-900">
                      {orderRequests.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Custom pricing will be discussed via WhatsApp
                  </p>
                </div>

                <Link
                  href="/request"
                  onClick={() => setShowCart(false)}
                  className="block w-full bg-gradient-to-r from-gray-900 to-black text-white py-4 hover:from-black hover:to-gray-900 transition font-bold rounded-lg shadow-xl text-center"
                >
                  SUBMIT REQUEST
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setShowCart(false)}
                  className="block w-full bg-white text-black border-2 border-black py-4 hover:bg-gray-100 transition font-bold rounded-lg text-center"
                >
                  BROWSE MORE
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
