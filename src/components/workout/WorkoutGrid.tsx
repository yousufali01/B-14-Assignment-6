"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutGridProps {
  workouts: Workout[];
}

type SortOption = "duration" | "calories" | "rating";

export default function WorkoutGrid({ workouts }: WorkoutGridProps) {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [workouts, sortBy]);

  return (
    <div>
      {/* Sort Bar */}
      <div className="mb-6 flex justify-end">
        <div className="relative">
          <label htmlFor="sort-workouts" className="sr-only">
            Sort By
          </label>

          <select
            id="sort-workouts"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="appearance-none rounded-full border border-white/15 bg-[#111111] py-3 pl-5 pr-11 text-sm font-semibold text-white outline-none transition hover:border-[#CCFF00]/50 focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]"
          >
            <option value="duration">Sort By: Duration</option>
            <option value="calories">Sort By: Calories</option>
            <option value="rating">Sort By: Rating</option>
          </select>

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#CCFF00]"
          />
        </div>
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedWorkouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </div>
  );
}
