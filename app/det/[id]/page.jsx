"use client";

import { useParams } from "next/navigation";
import { menu } from "@/data/menu";
import Link from "next/link";

export default function CoffeeDetail() {
  const { id } = useParams();

  const coffee = menu.find(
    (item) => item.id === Number(id)
  );

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
    <div className="p-6 max-w-md mx-auto">
      <img
        src={coffee.image}
        alt={coffee.title}
        className="w-full h-56 object-cover rounded-2xl mb-4"
      />

      <h1 className="text-2xl font-bold mb-1">
        {coffee.title}
      </h1>

      <p className="text-sm text-gray-500 mb-2">
        {coffee.category}
      </p>

      <p className="text-xl font-semibold text-amber-700 mb-4">
        {coffee.price} ₼
      </p>

      <button className="w-full bg-amber-700 text-white py-3 rounded-xl">
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
