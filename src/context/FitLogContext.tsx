"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  addToPlan: (workout: Workout) => void;
  saveForLater: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  // Load data from localStorage
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  // Save plan
  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  // Save saved workouts
  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  // Add workout to Today's Plan
  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      if (currentPlan.some((item) => item.id === workout.id)) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  // Save workout for later
  const saveForLater = (workout: Workout) => {
    setSaved((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  // Remove from plan
  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== id)
    );
  };

  // Remove from saved
  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) =>
      currentSaved.filter((item) => item.id !== id)
    );
  };

  const isInPlan = (id: number) => {
    return plan.some((item) => item.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((item) => item.id === id);
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}