import workouts from "@/data/workouts.json";
import { Workout } from "@/types/workout";

export async function getWorkoutById(id: string): Promise<Workout> {
  const workout = (workouts as Workout[]).find(
    (item) => item.id === Number(id),
  );

  if (!workout) {
    throw new Error("Workout not found");
  }

  return workout;
}
