"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, CalendarDays, Trash2 } from "lucide-react";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";

export default function MyPlanPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");

  const { plan, saved, removeFromPlan, removeFromSaved } = useFitLog();

  const workouts = activeTab === "plan" ? plan : saved;

  return (
    <main className="min-h-screen bg-black px-[5px] py-12 text-white sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#CCFF00]">
            Your Workouts
          </p>

          <h1 className="font-[family:var(--font-oswald)] text-4xl font-bold uppercase sm:text-5xl lg:text-6xl">
            My Plan
          </h1>

          <p className="mt-4 text-gray-400">
            Manage your planned and saved workouts.
          </p>
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
            Today&apos;s Plan
            <span>{plan.length}</span>
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
            Saved
            <span>{saved.length}</span>
          </button>
        </div>

        {/* Empty State */}
        {workouts.length === 0 ? (
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-white/10 bg-[#111111]">
            <div className="text-center">
              {activeTab === "plan" ? (
                <CalendarDays
                  size={48}
                  className="mx-auto mb-4 text-gray-600"
                />
              ) : (
                <Bookmark size={48} className="mx-auto mb-4 text-gray-600" />
              )}

              <h2 className="text-2xl font-bold uppercase">
                {activeTab === "plan"
                  ? "Your plan is empty"
                  : "Nothing saved yet"}
              </h2>

              <p className="mt-2 text-gray-500">
                {activeTab === "plan"
                  ? "Add workouts to today's plan to see them here."
                  : "Save workouts for later to see them here."}
              </p>

              <Link
                href="/"
                className="btn mt-6 border-none bg-[#CCFF00] text-black hover:bg-[#b8e600]"
              >
                Browse Workouts
              </Link>
            </div>
          </div>
        ) : (
          /* Workout Cards */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className="card overflow-hidden border border-white/10 bg-[#111111]"
              >
                {/* Image */}
                <figure className="relative h-52 w-full">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </figure>

                {/* Body */}
                <div className="card-body p-5">
                  <div className="flex flex-wrap gap-2">
                    {workout.muscleGroups.map((group) => (
                      <span
                        key={group}
                        className="badge border-none bg-[#1A2E05] text-[#CCFF00]"
                      >
                        {group}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-2 text-xl font-bold uppercase">
                    {workout.name}
                  </h2>

                  <p className="text-sm text-gray-400">{workout.equipment}</p>

                  {/* Buttons */}
                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/workout/${workout.id}`}
                      className="btn flex-1 border-none bg-[#CCFF00] text-black hover:bg-[#b8e600]"
                    >
                      View Details
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        activeTab === "plan"
                          ? removeFromPlan(workout.id)
                          : removeFromSaved(workout.id)
                      }
                      className="btn btn-square border border-white/10 bg-transparent text-gray-400 hover:border-red-500 hover:bg-transparent hover:text-red-500"
                      aria-label="Remove workout"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
