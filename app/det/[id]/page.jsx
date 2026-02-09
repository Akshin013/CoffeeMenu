"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { getMenu } from "@/data/getMenu";

export default function CoffeeDetail() {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenu().then((data) => {
      const formatted = data.map((item, index) => ({
        id: index, // тот же id что и на главной
        title: item.Title || "",
        price: Number(item.Price) || 0,
        category: item.Category || "Other",
        image: item.Image || "",
      }));

      const found = formatted.find(
        (item) => item.id === Number(id)
      );

      setCoffee(found);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-400">
        Загрузка...
      </div>
    );
  }

  if (!coffee) {
    return (
      <div className="p-6 text-center">
        <p className="text-lg">☕ Кофе не найден</p>
        <Link href="/" className="text-amber-700 underline">
          Вернуться в меню
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 max-w-md mx-auto">

      <img
        src={coffee.image}
        alt={coffee.title}
        className="w-full h-56 object-cover rounded-2xl mb-4"
      />

      <h1 className="text-2xl font-bold mb-1">
        {coffee.title}
      </h1>

      <p className="text-sm text-gray-400 mb-2">
        {coffee.category}
      </p>

      <p className="text-xl font-semibold text-amber-500 mb-4">
        {coffee.price} ₼
      </p>

      <button className="w-full bg-amber-700 text-white py-3 rounded-xl hover:bg-amber-600 transition">
        Добавить в корзину
      </button>

      <Link
        href="/"
        className="block text-center mt-4 text-gray-500"
      >
        ← Назад
      </Link>

    </div>
  );
}
