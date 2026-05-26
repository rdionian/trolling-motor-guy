"use client";
import React from "react";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Warranty", href: "/warranty" },
  { label: "Location", href: "/#location" },
];

export default function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/#location") {
      e.preventDefault();
      document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="bg-white border-b border-[#d0d8e0] px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="The Trolling Motor Guy"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-bold text-lg text-[#1e3a5f] leading-tight">
              The Trolling Motor Guy
            </div>
            <div className="text-xs text-gray-400">
              Bradenton, FL — Family Owned
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-semibold text-[#1e3a5f] tracking-tight">
            (941) 518-9940
          </div>
          <div className="text-xs text-gray-400 mt-0.5">
            5002 Lena Rd Unit 104, Bradenton, FL
          </div>
        </div>
      </div>
      <nav className="bg-[#1e3a5f] flex">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="text-[#c5d5e8] text-sm font-semibold px-5 py-3 border-r border-white/10 hover:bg-white/10 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
