"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  // 🔹 Группируем одинаковые товары
  const grouped = cart.reduce((acc, item) => {
    const key = item.id;
    if (!acc[key]) acc[key] = { ...item, quantity: 1 };
    else acc[key].quantity += 1;
    return acc;
  }, {});

  const items = Object.values(grouped);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  async function submitOrder() {
    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, total }),
      });

      localStorage.removeItem("cart");
      router.push("/success");
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Не удалось отправить заказ. Попробуйте позже.");
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center p-4">
        <p className="text-gray-400 text-center">Корзина пуста ☕</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 pb-32">
      <h1 className="text-xl font-bold mb-4">Подтверждение заказа</h1>

      <div className="space-y-3 mb-24">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#1a1a1a] rounded-2xl p-3 flex items-center gap-3 shadow-lg shadow-black/30"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-xl"
            />

            <div className="flex-1">
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.category}</p>
            </div>

            <div className="text-right font-semibold text-amber-400">
             x {item.quantity}  ({(item.quantity * item.price).toFixed(2)} ₼)
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 mb-18 left-0 right-0 bg-[#141414]/90 backdrop-blur-sm border-t border-zinc-800 p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400">Итого (оплата на кассе)</span>
          <span className="text-lg font-bold text-amber-500">{total.toFixed(2)} ₼</span>
        </div>

        <button
          onClick={submitOrder}
          className="w-full bg-amber-600 text-black py-3 rounded-xl font-semibold hover:bg-amber-500 transition"
        >
          Подтвердить заказ
        </button>
      </div>
    </div>
  );
}
