import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] px-[5px] py-8 text-white sm:py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="FitLog Logo"
            width={38}
            height={38}
            className="rounded-full"
          />

          <span className="font-[family:var(--font-oswald)] text-2xl font-bold tracking-wide">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 sm:text-right sm:text-sm">
          © 2026 FitLog — Workout Library. Train hard, log honest. | Developer | Md. Yousuf Ali
        </p>
      </div>
    </footer>
  );
}