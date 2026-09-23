"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  CalendarDays,
  Clock3,
  Flame,
  Star,
  X,
  Check,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const [completed, setCompleted] = useState<number[]>([]);

  const { plan, saved, isLoading, removeFromPlan, removeFromSaved } =
    useFitLog();

  const workouts = activeTab === "plan" ? plan : saved;

  const totalExercises = plan.length;

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const handleDone = (id: number) => {
    setCompleted((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      return [...current, id];
    });

    toast.success(
      completed.includes(id)
        ? "Workout marked as not done"
        : "Workout marked as done",
    );
  };

  const handleRemovePlan = (id: number) => {
    removeFromPlan(id);

    setCompleted((current) => current.filter((item) => item !== id));

    toast.success("Workout removed from today's plan");
  };

  const handleRemoveSaved = (id: number) => {
    removeFromSaved(id);

    toast.success("Workout removed from saved");
  };

  return (
    <main className="min-h-screen bg-black px-[5px] py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#CCFF00]">
            Your Workout Log
          </p>

          <h1 className="font-[family:var(--font-oswald)] text-5xl font-bold uppercase leading-none sm:text-6xl lg:text-7xl">
            My Plan
          </h1>

          <p className="mt-4 text-base text-gray-400 sm:text-lg">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics Summary */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Exercises */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Exercises
              </p>

              <CalendarDays size={20} className="text-[#CCFF00]" />
            </div>

            <p className="mt-4 font-[family:var(--font-oswald)] text-4xl font-bold">
              {totalExercises}
            </p>

            <p className="mt-1 text-sm text-gray-500">of 5 planned</p>
          </div>

          {/* Minutes */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Minutes
              </p>

              <Clock3 size={20} className="text-[#CCFF00]" />
            </div>

            <p className="mt-4 font-[family:var(--font-oswald)] text-4xl font-bold">
              {totalMinutes}
            </p>

            <p className="mt-1 text-sm text-gray-500">total duration</p>
          </div>

          {/* Calories */}
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                Calories
              </p>

              <Flame size={20} className="text-[#CCFF00]" />
            </div>

            <p className="mt-4 font-[family:var(--font-oswald)] text-4xl font-bold">
              {totalCalories}
            </p>

            <p className="mt-1 text-sm text-gray-500">estimated burn</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex w-fit rounded-full border border-white/10 bg-[#111111] p-1">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === "plan"
                ? "bg-[#CCFF00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <CalendarDays size={17} />

            <span>Today&apos;s Plan</span>

            <span
              className={activeTab === "plan" ? "text-black" : "text-gray-500"}
            >
              {plan.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              activeTab === "saved"
                ? "bg-[#CCFF00] text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Bookmark size={17} />

            <span>Saved</span>

            <span
              className={activeTab === "saved" ? "text-black" : "text-gray-500"}
            >
              {saved.length}
            </span>
          </button>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
            <div className="text-center">
              <span className="loading loading-spinner loading-lg text-[#CCFF00]" />

              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-gray-400">
                Loading workouts…
              </p>
            </div>
          </div>
        ) : workouts.length === 0 ? (
          /* Empty State */
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-white/10 bg-[#111111] px-6">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1A2E05]">
                {activeTab === "plan" ? (
                  <CalendarDays size={30} className="text-[#CCFF00]" />
                ) : (
                  <Bookmark size={30} className="text-[#CCFF00]" />
                )}
              </div>

              <h2 className="mt-6 font-[family:var(--font-oswald)] text-3xl font-bold uppercase sm:text-4xl">
                Nothing Here Yet
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="btn mt-6 border-none bg-[#CCFF00] px-6 text-black hover:bg-[#b8e600]"
              >
                Go to workouts
              </Link>
            </div>
          </div>
        ) : (
          /* Workout Cards */
          <div className="space-y-5">
            {workouts.map((workout) => {
              const isDone = completed.includes(workout.id);

              return (
                <div
                  key={workout.id}
                  className={`overflow-hidden rounded-2xl border bg-[#111111] transition ${
                    isDone
                      ? "border-[#CCFF00]/30 opacity-75"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Thumbnail */}
                    <div className="relative h-56 w-full shrink-0 overflow-hidden bg-[#1a1a1a] md:h-auto md:w-64 lg:w-72">
                      <Image
                        src={workout.image}
                        alt={workout.name}
                        fill
                        className={`object-cover transition duration-300 ${
                          isDone ? "grayscale" : ""
                        }`}
                        sizes="(max-width: 768px) 100vw, 288px"
                      />

                      {isDone && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <div className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 font-bold text-black">
                            <Check size={18} />
                            DONE
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="mb-3 flex flex-wrap gap-2">
                          {workout.muscleGroups.map((group) => (
                            <span
                              key={group}
                              className="badge border-none bg-[#1A2E05] px-3 py-3 text-[10px] font-bold uppercase tracking-wider text-[#CCFF00]"
                            >
                              {group}
                            </span>
                          ))}
                        </div>

                        <h2 className="font-[family:var(--font-oswald)] text-2xl font-bold uppercase leading-tight sm:text-3xl">
                          {workout.name}
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                          {workout.equipment}
                        </p>

                        {/* Stats */}
                        <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-white/10 pt-4">
                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Clock3 size={17} className="text-[#CCFF00]" />
                            <span>{workout.duration} min</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Flame size={17} className="text-[#CCFF00]" />
                            <span>{workout.caloriesBurned} kcal</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-300">
                            <Star
                              size={17}
                              className="fill-[#CCFF00] text-[#CCFF00]"
                            />
                            <span>{workout.rating}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <Link
                          href={`/workout/${workout.id}`}
                          className="btn flex-1 border-none bg-[#CCFF00] text-black hover:bg-[#b8e600]"
                        >
                          View Details
                        </Link>

                        {activeTab === "plan" && (
                          <button
                            type="button"
                            onClick={() => handleDone(workout.id)}
                            className={`btn flex-1 border ${
                              isDone
                                ? "border-[#CCFF00] bg-[#1A2E05] text-[#CCFF00]"
                                : "border-white/20 bg-transparent text-white"
                            } hover:border-[#CCFF00] hover:bg-transparent hover:text-[#CCFF00]`}
                          >
                            <Check size={18} />

                            {isDone ? "Done" : "Mark as Done"}
                          </button>
                        )}

                        <button
                          type="button"
                          onClick={() =>
                            activeTab === "plan"
                              ? handleRemovePlan(workout.id)
                              : handleRemoveSaved(workout.id)
                          }
                          className="btn btn-square border border-white/20 bg-transparent text-gray-400 transition hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
                          aria-label={`Remove ${workout.name}`}
                          title="Remove workout"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
