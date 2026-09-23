import Link from "next/link";
import { ArrowLeft, Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-black px-[5px] py-20 text-white">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A2E05]">
          <Dumbbell size={36} className="text-[#CCFF00]" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#CCFF00]">
          Error 404
        </p>

        <h1 className="mt-3 font-[family:var(--font-oswald)] text-6xl font-bold uppercase leading-none sm:text-7xl lg:text-8xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-400 sm:text-lg">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          href="/"
          className="btn mt-8 border-none bg-[#CCFF00] px-7 text-black hover:bg-[#b8e600]"
        >
          <ArrowLeft size={18} />
          Back to Workouts
        </Link>
      </div>
    </main>
  );
}
