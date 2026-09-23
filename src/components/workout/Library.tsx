import { getWorkouts } from "@/lib/getWorkouts";
import WorkoutGrid from "./WorkoutGrid";

export default async function Library() {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="bg-black px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:py-16"
    >
      <div className="mx-auto max-w-[96%]">
        {/* Section Heading */}
        <div className="mb-0 md:mb-14">
          <h2 className="mb-0 font-[family:var(--font-oswald)] text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
            The Library
          </h2>

          <p className="mt-0 text-base text-gray-400 sm:text-lg">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Cards */}
        <WorkoutGrid workouts={workouts} />
      </div>
    </section>
  );
}
