"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  const total = cart.reduce((sum, i) => sum + i.price, 0);

  function removeItem(index) {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 pb-28">
      {/* Header */}
      <h1 className="text-xl font-semibold mb-4">🛒 Корзина</h1>

      {/* Empty */}
      {cart.length === 0 && (
        <p className="text-gray-400 text-center mt-10">
          Корзина пуста ☕
        </p>
      )}

      {/* Items */}
      <div className="space-y-3">
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl p-3 flex gap-3 items-center"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 rounded-xl object-cover"
            />

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400">
                {item.category}
              </p>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="font-semibold">
                ${item.price}
              </p>
              <button
                onClick={() => removeItem(index)}
                className="text-red-400 mt-1"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="fixed mb-18 bottom-0 left-0 right-0 bg-[#141414] border-t border-zinc-800 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400">Итого</span>
            <span className="text-lg font-semibold">
              ${total.toFixed(2)}
            </span>
          </div>

          <Link
            href="/checkout"
            className="block bg-amber-600 text-black text-center py-3 rounded-xl font-semibold"
          >
            Оформить заказ
          </Link>
        </div>
      )}
    </div>
  );
}
