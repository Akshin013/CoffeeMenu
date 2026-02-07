import React from "react";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { TbInfoOctagonFilled } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdCart } from "react-icons/io";

const navbar = () => {
  const links = [
    {
      href: "/",
      icon: <IoMdHome size={37} color="#ebc032" />,
      label: "ESAS",
      color: "#ebc032",
    },
    {
      href: "/cart",
      icon: <IoMdCart size={46} color="#e62328" />,
      label: "SECILMISDER",
      color: "#e62328",
      elevated: true,
    },
    {
      href: "/about",
      icon: <TbInfoOctagonFilled size={37} color="#ebc032" />,
      label: "HAKKIMIZDA",
      color: "#ebc032",
    },
  ];

  return (
    <div
      className="z-50 rounded-lg m-[2%] shadow-[0_20px_40px_15px_rgba(92,51,23,0.45)] fixed left-0 w-[96%] grid grid-cols-3 gap-3 md:hidden"
      style={{
        bottom: 0,
        paddingBottom: "env(safe-area-inset-bottom)", // учитывает вырезы и панель
        backgroundColor: "rgba(51, 51, 51, 0.6)", // полупрозрачный фон
        backdropFilter: "blur(10px)", // стеклянный эффект
        WebkitBackdropFilter: "blur(10px)", // для Safari
      }}
    >
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className={`flex flex-col items-center gap-0.5 rounded-2xl p-2 ${link.elevated ? "-mt-7" : ""}`}
        >
          {link.icon}
          <p
            className={`text-xs ${link.elevated ? "mt-4.5" : ""}`}
            style={{ color: link.color }}
          >
            {link.label}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default navbar;
