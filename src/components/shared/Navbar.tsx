"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // For now initial value is 0
  // Later these will be dynamic from Today's Plan and Saved items
  const planCount = 0;
  const savedCount = 0;

  return (
    <header className="w-full bg-black">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-3 lg:px-8">
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Workouts */}
          <Link
            href="/"
            className={`rounded-full px-5 py-2 font-medium transition ${
              pathname === "/"
                ? "bg-[#1A2E05] text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            className={`rounded-full px-3 py-2 font-medium transition ${
              pathname === "/my-plan"
                ? "text-[#CCFF00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Right Side Badges */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Plan Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 transition hover:bg-[#b8e600]"
          >
            <span className="font-medium text-black">Plan</span>

            <span className="font-bold text-black">{planCount}</span>
          </Link>

          {/* Saved Badge */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-gray-600 px-4 py-2 transition hover:border-gray-400"
          >
            <span className="font-medium text-white">Saved</span>

            <span className="font-bold text-white">{savedCount}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="space-y-4 border-t border-gray-800 bg-black px-5 py-4 md:hidden">
          {/* Workouts */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`block rounded-full px-4 py-2 font-medium ${
              pathname === "/" ? "bg-[#1A2E05] text-[#CCFF00]" : "text-gray-300"
            }`}
          >
            Workouts
          </Link>

          {/* My Plan */}
          <Link
            href="/my-plan"
            onClick={() => setOpen(false)}
            className={`block rounded-full px-4 py-2 font-medium ${
              pathname === "/my-plan" ? "text-[#CCFF00]" : "text-gray-300"
            }`}
          >
            My Plan
          </Link>

          {/* Mobile Badges */}
          <div className="flex gap-3 pt-2">
            {/* Plan */}
            <Link
              href="/my-plan"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#CCFF00] px-4 py-2 font-semibold text-black"
            >
              Plan {planCount}
            </Link>

            {/* Saved */}
            <Link
              href="/my-plan"
              onClick={() => setOpen(false)}
              className="rounded-full border border-gray-600 px-4 py-2 font-semibold text-white"
            >
              Saved {savedCount}
            </Link>
          </div>
        </div>
      )}
      <hr className="border-gray-800" />
    </header>
  );
}
