import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

export default function CoffeeCard({ coffee, onAdd }) {
  
  return (
    <Link href={`/det/${coffee.id}`} className="bg-[#424141] rounded-2xl p-3 flex flex-col">
      {/* Image */}
      <div className="relative mb-3">
        <img
          src={coffee.image}
          alt={coffee.title}
          className="w-full h-28 object-cover rounded-xl"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-white">
          {coffee.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
          {coffee.description}
        </p>
      </div>

      {/* Price + Cart */}
      <div className="flex items-center justify-between mt-3">
        <span className="text-white font-semibold">
          ${coffee.price}
        </span>

        <button
          onClick={() => onAdd(coffee)}
          className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center active:scale-95 transition"
        >
          <FiShoppingBag className="text-black" size={16} />
        </button>
      </div>
    </Link>
  );
}
