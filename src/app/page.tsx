import Hero from "@/components/workout/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Workout Library Section */}
      <section
        id="library"
        className="mx-auto max-w-7xl px-6 py-16"
      >
        <h2 className="mb-8 text-3xl font-bold">
          Workout Library
        </h2>

        {/* Next step: Workout Cards */}
      </section>
    </main>
  );
}