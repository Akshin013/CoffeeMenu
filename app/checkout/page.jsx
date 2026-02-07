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

  async function submitOrder() {
    const total = cart.reduce((s, i) => s + i.price, 0);
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart, total }),
    });
    localStorage.removeItem("cart");
    router.push("/success");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Подтверждение</h1>
      <button
        onClick={submitOrder}
        className="bg-green-600 text-white w-full py-3 rounded"
      >
        Отправить заказ
      </button>
    </div>
  );
}
