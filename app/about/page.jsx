"use client";

import { FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen bg-[#121212] text-white px-6 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex justify-center mb-4">
          <FiCoffee size={40} className="text-amber-500" />
        </div>
        <h1 className="text-3xl font-bold tracking-wide">
          О нашей кофейне
        </h1>
        <p className="text-gray-400 mt-3 max-w-md mx-auto">
          Мы создаём атмосферу уюта и подаём лучший кофе в городе.
          Только качественные зёрна и любовь к своему делу ☕
        </p>
      </div>

      {/* Info Card */}
      <div className="bg-[#1e1e1e] rounded-3xl p-6 shadow-2xl space-y-6 max-w-md mx-auto">

        {/* Location */}
        <div className="flex items-center gap-4">
          <div className="bg-amber-600 p-3 rounded-xl">
            <FaMapMarkerAlt size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Мы находимся</h3>
            <p className="text-gray-400 text-sm">
              Баку, центр города
            </p>
          </div>
        </div>

        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          className="flex items-center gap-4 hover:bg-[#2a2a2a] p-3 rounded-xl transition"
        >
          <div className="bg-pink-600 p-3 rounded-xl">
            <FaInstagram size={20} />
          </div>
          <div>
            <h3 className="font-semibold">Instagram</h3>
            <p className="text-gray-400 text-sm">
              @coffeehouse
            </p>
          </div>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/994000000000"
          target="_blank"
          className="flex items-center gap-4 hover:bg-[#2a2a2a] p-3 rounded-xl transition"
        >
          <div className="bg-green-600 p-3 rounded-xl">
            <FaWhatsapp size={20} />
          </div>
          <div>
            <h3 className="font-semibold">WhatsApp</h3>
            <p className="text-gray-400 text-sm">
              Написать нам
            </p>
          </div>
        </a>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-12 text-gray-500 text-sm">
        © 2026 Coffee House. Все права защищены.
      </div>

    </div>
  );
}
