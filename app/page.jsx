"use client";

import { useState, useEffect } from "react";
import { getMenu } from "@/data/getMenu";
import CoffeeCard from "../components/CoffeCard";
import Link from "next/link";

const categories = [
  "All",
  "Espresso",
  "Milk Coffee",
  "Iced Coffee",
  "Alternative Brew",
  "Signature Coffee",
];

export default function Home() {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMenu().then((data) => {
      const formatted = data
        .reverse() // новые товары сверху
        .map((item, index) => ({
          id: index,
          title: item.Title?.trim() || "",
          price: Number(item.Price) || 0,
          category: item.Category?.trim() || "Other",
          image: item.Image || "",
        }));
      setMenu(formatted);
    });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  function addToCart(item) {
    const newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  const filteredMenu = menu.filter((item) => {
    const byCategory =
      activeCategory === "All" || item.category === activeCategory;
    const bySearch = item.title?.toLowerCase().includes(search.toLowerCase());
    return byCategory && bySearch;
  });

  return (
    <div className="min-h-screen bg-[#121212] text-white px-4 pb-24">

      {/* Header + Categories */}
      <div className="sticky top-0 z-50 backdrop-blur-sm bg-[#121212]/70 pt-4 pb-2 border-b border-[#2a2a2a]">
        {/* Header */}
        <div className="flex justify-between items-center py-2">
          <h1 className="text-xl font-bold tracking-wide">☕ Coffee Menu</h1>

          <Link
            href="/cart"
            className="bg-amber-700 px-4 py-2 rounded-xl text-sm shadow-lg"
          >
            🛒 {cart.length}
          </Link>
        </div>

        {/* Search */}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Поиск кофе..."
          className="w-full mb-3 px-4 py-3 rounded-xl bg-[#1e1e1e]/80 text-white border border-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-amber-600"
        />

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200 ${
                activeCategory === category
                  ? "bg-amber-700 text-white shadow-md scale-105"
                  : "bg-[#1e1e1e]/80 text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Menu */}
      {menu.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">Загрузка меню...</p>
      ) : filteredMenu.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">Ничего не найдено ☕</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {filteredMenu.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} onAdd={addToCart} />
          ))}
        </div>
      )}
    </div>
  );
}
