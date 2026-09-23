import Image from "next/image";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link href={`/workout/${workout.id}`} className="group block h-full">
      <div className="card h-full overflow-hidden border border-white/10 bg-[#111111] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/40 hover:shadow-2xl">
        {/* Image */}
        <figure className="relative h-65 w-full overflow-hidden bg-[#1a1a1a]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Difficulty */}
          <span className="badge absolute right-4 top-4 border-none bg-black/70 px-3 py-3 text-xs font-semibold uppercase text-white backdrop-blur-sm">
            {workout.difficulty}
          </span>
        </figure>

        {/* Card Body */}
        <div className="card-body p-5">
          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="badge border-none bg-[#1A2E05] px-3 py-3 text-[11px] font-bold uppercase tracking-wider text-[#CCFF00]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h3 className="mt-2 text-xl font-bold uppercase leading-tight text-white transition-colors group-hover:text-[#CCFF00]">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="mt-1 line-clamp-1 text-sm text-gray-400">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
            {/* Duration */}
            <div className="flex items-center gap-1.5 text-gray-300">
              <Clock3 size={16} className="text-[#CCFF00]" />
              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5 text-gray-300">
              <Flame size={16} className="text-red-500" />
              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5 text-gray-300">
              <Star size={16} className="fill-[#CCFF00] text-[#CCFF00]" />
              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
