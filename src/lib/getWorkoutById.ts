import { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkoutById(id: string): Promise<Workout> {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 10000);

  try {
    const response = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("Workout not found");
    }

    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}
