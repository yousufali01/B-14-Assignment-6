"use client";

import Image from "next/image";
import { Bookmark, CalendarPlus, Clock3, Flame, Star } from "lucide-react";
import { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";
import { toast } from "sonner";

interface WorkoutDetailsProps {
  workout: Workout;
}

export default function WorkoutDetails({ workout }: WorkoutDetailsProps) {
  const { addToPlan, saveForLater, isInPlan, isSaved } = useFitLog();

  const handleAddToPlan = () => {
    if (isInPlan(workout.id)) {
      toast.info("Already in today's plan");
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSaveForLater = () => {
    if (isSaved(workout.id)) {
      toast.info("Already saved");
      return;
    }

    saveForLater(workout);
    toast.success("Saved for later");
  };

  return (
    <main className="min-h-screen bg-black px-[5px] py-10 text-white sm:py-14 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
        {/* ================= LEFT SIDE ================= */}
        <div className="relative min-h-[450px] overflow-hidden rounded-2xl bg-[#111111] lg:min-h-[700px]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h1 className="font-[family:var(--font-oswald)] text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
            {workout.name}
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
            {workout.description}
          </p>

          {/* Category Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="badge border-none bg-[#1A2E05] px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#CCFF00]"
              >
                {group}
              </span>
            ))}
          </div>

          {/* ================= KEY SPECS ================= */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#111111]">
            <div className="border-b border-white/10 px-5 py-4">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
                Key Specs
              </h2>
            </div>

            <div className="divide-y divide-white/10">
              {/* Equipment */}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Equipment
                </span>

                <span className="text-right text-sm font-medium text-white">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Difficulty
                </span>

                <span className="text-sm font-medium text-white">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Sets
                </span>

                <span className="text-sm font-medium text-white">
                  {workout.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Reps
                </span>

                <span className="text-sm font-medium text-white">
                  {workout.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <Clock3 size={15} />
                  Duration
                </span>

                <span className="text-sm font-medium text-white">
                  {workout.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <Flame size={15} />
                  Calories
                </span>

                <span className="text-sm font-medium text-white">
                  {workout.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <Star size={15} />
                  Rating
                </span>

                <span className="flex items-center gap-1 text-sm font-medium text-white">
                  <Star size={15} className="fill-[#CCFF00] text-[#CCFF00]" />
                  {workout.rating}
                </span>
              </div>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-8">
            <h2 className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-[#CCFF00]">
              Instructions
            </h2>

            <ol className="space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#CCFF00] text-sm font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="pt-1 text-sm leading-6 text-gray-300">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {/* Add To Today's Plan */}
            <button
              type="button"
              onClick={() => {
                addToPlan(workout);
                toast.success("Added to today's plan");
              }}
              disabled={isInPlan(workout.id)}
              className="btn flex-1 border-none bg-[#CCFF00] text-black hover:bg-[#b8e600] disabled:bg-gray-700 disabled:text-gray-400"
            >
              <CalendarPlus size={19} />

              {isInPlan(workout.id)
                ? "Already in today's plan"
                : "Add to today's plan"}
            </button>

            {/* Save For Later */}
            <button
              type="button"
              onClick={() => {
                saveForLater(workout);
                toast.success("Saved for later");
              }}
              disabled={isSaved(workout.id)}
              className="btn flex-1 border border-white/20 bg-transparent text-white hover:border-[#CCFF00] hover:bg-transparent hover:text-[#CCFF00] disabled:border-gray-700 disabled:text-gray-500"
            >
              <Bookmark size={19} />

              {isSaved(workout.id) ? "Already saved" : "Save for later"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
