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
  isLoading: boolean;
  addToPlan: (workout: Workout) => boolean;
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      try {
        const storedPlan = localStorage.getItem("fitlog-plan");
        const storedSaved = localStorage.getItem("fitlog-saved");

        if (storedPlan) {
          const parsedPlan = JSON.parse(storedPlan);

          if (Array.isArray(parsedPlan)) {
            setPlan(parsedPlan);
          }
        }

        if (storedSaved) {
          const parsedSaved = JSON.parse(storedSaved);

          if (Array.isArray(parsedSaved)) {
            setSaved(parsedSaved);
          }
        }
      } catch {
        setPlan([]);
        setSaved([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = window.setTimeout(loadData, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("fitlog-plan", JSON.stringify(plan));
    }
  }, [plan, isLoading]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("fitlog-saved", JSON.stringify(saved));
    }
  }, [saved, isLoading]);

  const addToPlan = (workout: Workout) => {
    if (plan.some((item) => item.id === workout.id)) {
      return false;
    }

    if (plan.length >= 5) {
      return false;
    }

    setPlan((currentPlan) => [...currentPlan, workout]);

    return true;
  };

  const saveForLater = (workout: Workout) => {
    setSaved((currentSaved) => {
      if (currentSaved.some((item) => item.id === workout.id)) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== id)
    );
  };

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
        isLoading,
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