import { Dumbbell } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-[5px] text-white">
      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A2E05]">
          <Dumbbell size={36} className="animate-pulse text-[#CCFF00]" />
        </div>

        <p className="mt-6 font-[family:var(--font-oswald)] text-2xl font-bold uppercase tracking-wider">
          Loading workouts…
        </p>

        <div className="mt-4 flex justify-center">
          <span className="loading loading-spinner loading-md text-[#CCFF00]" />
        </div>
      </div>
    </main>
  );
}
