import { getWorkouts } from "@/lib/getWorkouts";
import WorkoutGrid from "./WorkoutGrid";

export default async function Library() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="bg-black px-1.25 py-16 text-white lg:py-24"
    >
      <div className="mx-auto max-w-[96%]">
        {/* Section Heading */}
        <div className="mb-10 md:mb-14">
          <h2 className="font-[family:var(--font-oswald)] text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
            The Library
          </h2>

          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <WorkoutGrid workouts={workouts} />
      </div>
    </section>
  );
}
