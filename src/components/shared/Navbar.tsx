"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const planCount = 0;
  const savedCount = 0;

  return (
    <header className="w-full bg-black">
      <nav className="max-w-7xl mx-auto h-20 px-5 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={42}
            height={42}
            className="rounded-full"
          />

          <h1 className="text-2xl font-bold text-white">FitLog</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className={`px-5 py-2 rounded-full font-medium transition ${
              pathname === "/"
                ? "bg-[#1A2E05] text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`px-2 py-2 font-medium transition ${
              pathname === "/my-plan"
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Badges */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2">
            <span className="font-medium text-black">Plan</span>
            <span className="font-bold text-black">{planCount}</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2">
            <span className="font-medium text-white">Saved</span>
            <span className="font-bold text-white">{savedCount}</span>
          </div>
        </div>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black px-5 py-4 space-y-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`block rounded-full px-4 py-2 ${
              pathname === "/" ? "bg-[#1A2E05] text-[#CCFF00]" : "text-gray-300"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            onClick={() => setOpen(false)}
            className="block px-4 text-gray-300"
          >
            My Plan
          </Link>

          <div className="flex gap-3 pt-2">
            <div className="rounded-full bg-[#CCFF00] px-4 py-2 text-black font-semibold">
              Plan {planCount}
            </div>

            <div className="rounded-full border border-gray-600 px-4 py-2 text-white font-semibold">
              Saved {savedCount}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
