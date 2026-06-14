"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Warranty", href: "/warranty" },
  { label: "Location", href: "/#location" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "/#location" && pathname === "/") {
      e.preventDefault();
      setMenuOpen(false);
      document.getElementById("location")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setMenuOpen(false);
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
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-right">
            <div className="text-2xl font-semibold text-[#1e3a5f] tracking-tight">
              (941) 518-9940
            </div>
            <div className="text-xs text-gray-400 mt-0.5">
              5002 Lena Rd Unit 104, Bradenton, FL
            </div>
          </div>
          <button
            className="md:hidden text-[#1e3a5f] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex bg-[#1e3a5f]">
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

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden bg-[#1e3a5f] flex flex-col">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-[#c5d5e8] text-sm font-semibold px-5 py-4 border-b border-white/10 hover:bg-white/10 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
