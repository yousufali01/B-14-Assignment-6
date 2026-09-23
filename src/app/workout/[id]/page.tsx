import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/workout/WorkoutDetails";
import { getWorkoutById } from "@/lib/getWorkoutById";

interface WorkoutPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutPage({
  params,
}: WorkoutPageProps) {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkoutById(id);
  } catch {
    notFound();
  }

  return <WorkoutDetails workout={workout} />;
}