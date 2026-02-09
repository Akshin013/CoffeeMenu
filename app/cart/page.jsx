"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

export default function Cart() {
  const [cart, setCart] = useState([]);

  // 🟢 Загружаем корзину из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // 🟢 Группируем одинаковые товары
  const grouped = cart.reduce((acc, item) => {
    const key = item.id;
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 };
    } else {
      acc[key].quantity += 1;
    }
    return acc;
  }, {});

  const items = Object.values(grouped);

  // 🟢 Общая сумма
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  // 🟢 Функции управления количеством
  function increase(id) {
    const updated = [...cart, cart.find((c) => c.id === id)];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function decrease(id) {
    let removed = false;
    const updated = cart.filter((c) => {
      if (!removed && c.id === id) {
        removed = true; // удаляем только один экземпляр
        return false;
      }
      return true;
    });
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  function removeItem(id) {
    const updated = cart.filter((c) => c.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-4 pb-32">
      <h1 className="text-xl font-semibold mb-4">🛒 Корзина</h1>

      {items.length === 0 && (
        <p className="text-gray-400 text-center mt-10">Корзина пуста ☕</p>
      )}

      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
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
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.category}</p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-2 text-white">
              <button
                onClick={() => decrease(item.id)}
                className="p-1 bg-[#2a2a2a] rounded"
              >
                <FiMinus />
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increase(item.id)}
                className="p-1 bg-[#2a2a2a] rounded"
              >
                <FiPlus />
              </button>
            </div>

            {/* Price & Remove */}
            <div className="text-right">
              <p className="font-semibold">{(item.price * item.quantity).toFixed(2)} ₼</p>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-400 mt-1"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {items.length > 0 && (
        <div className="fixed bottom-0 mb-18 left-0 right-0 mb-0 bg-[#141414]/90 backdrop-blur-sm border-t border-zinc-800 p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="text-gray-400">Итого (оплата на кассе)</span>
            <span className="text-lg font-semibold">{total.toFixed(2)} ₼</span>
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
