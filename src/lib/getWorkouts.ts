import workouts from "@/data/workouts.json";
import { Workout } from "@/types/workout";

export async function getWorkouts(): Promise<Workout[]> {
  return workouts as Workout[];
}
