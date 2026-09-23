import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-900  text-white m-15 rounded-2xl">
      <div className="mx-auto flex max-w-[96%] h-150 flex-col items-center gap-12 px-3 py-16 lg:flex-row lg:py-24">
        {/* Left Content */}
        <div className="flex-1">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-lime-400">
            Workout Library
          </p>

          <h1 className="font-[family:var(--font-oswald)] text-5xl font-bold uppercase leading-none sm:text-6xl lg:text-7xl">
            Train with Intent. Log Every Set.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA */}
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime-300 px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Browse Workouts
            <ArrowDownRight size={20} />
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-1 translate-x-5 sm:translate-x-10 md:translate-x-15 lg:translate-x-25">
          <Image
            src="/banner.png"
            alt="FitLog Workout Banner"
            width={800}
            height={800}
            priority
            className="w-auto h-auto rounded-3xl object-cover "
          />
        </div>
      </div>
    </section>
  );
}
