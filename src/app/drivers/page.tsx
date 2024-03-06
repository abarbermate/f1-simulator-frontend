import { DriverCards } from "@/components/DriverCards/DriverCards.client";

export default function Home() {
  return (
    <main className={"flex min-h-screen flex-col items-center gap-10 p-10"}>
      <h1 className={"text-5xl font-bold"}>F1 Simulator</h1>
      <h2 className={"text-2xl"}>Leaderboard:</h2>
      <div className={"flex flex-wrap items-center justify-center gap-10"}>
        <DriverCards />
      </div>
    </main>
  );
}
