"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Success() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 pb-28">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-amber-500">
          ✅ Заказ принят
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Покажите этот экран кассиру для оплаты
        </p>
      </div>

      {/* Order list */}
      <div className="space-y-3">
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-3 flex gap-3 items-center shadow-lg shadow-black/30"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-xl object-cover"
            />

            <div className="flex-1">
              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400">
                {item.category}
              </p>
            </div>

            <div className="text-right font-semibold text-amber-400">
              ${Number(item.price).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#141414] border-t border-zinc-800 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400">Итого</span>
            <span className="text-lg font-bold text-amber-500">
              ${total.toFixed(2)}
            </span>
          </div>

          <Link
            href="/"
            className="block bg-amber-600 text-black text-center py-3 rounded-xl font-semibold hover:bg-amber-500 transition"
            onClick={() => localStorage.removeItem("cart")}
          >
            Вернуться в меню
          </Link>
        </div>
      )}

    </div>
  );
}
