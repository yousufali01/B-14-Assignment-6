import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-2 mt-6 mb-4 rounded-2xl bg-gray-900 text-white sm:mx-4 sm:mb-6 lg:mx-6 lg:mb-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 py-10 sm:gap-10 sm:px-8 sm:py-14 md:py-16 lg:flex-row lg:gap-6 lg:px-10 lg:py-16 xl:gap-10">
        {/* Left Content */}
        <div className="w-full flex-1 lg:max-w-[52%]">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-lime-400 sm:text-sm sm:tracking-[0.3em]">
            Workout Library
          </p>

          <h1 className="font-[family:var(--font-oswald)] text-4xl font-bold uppercase leading-[0.95] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Train with Intent. Log Every Set.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-gray-300 sm:mt-6 sm:text-base sm:leading-7">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 sm:mt-8 sm:px-6 sm:text-base"
          >
            Browse Workouts
            <ArrowDownRight size={20} />
          </a>
        </div>

        {/* Right Image */}
        <div className="flex w-full flex-1 items-center justify-center lg:max-w-[48%]">
          <div className="relative h-[280px] w-full sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[540px]">
            <Image
              src="/banner.png"
              alt="FitLog Workout Banner"
              fill
              priority
              loading="eager"
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
