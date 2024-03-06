"use client";

import { DriverCard } from "@/components/DriverCard/DriverCard";
import { useDrivers } from "@/hooks/useDrivers";

export default function Home() {
  const { data: Drivers, isLoading } = useDrivers();

  if (isLoading)
    return (
      <main className={"flex min-h-screen flex-col items-center gap-10 p-10"}>
        <h1 className={"text-5xl font-bold"}>F1 Simulator</h1>
        <h2 className={"text-2xl"}>Current order:</h2>
        <div className={"flex flex-wrap items-center justify-center gap-10"}>
          Loading...
        </div>
      </main>
    );

  const data = Drivers?.data;

  return (
    <main className={"flex min-h-screen flex-col items-center gap-10 p-10"}>
      <h1 className={"text-5xl font-bold"}>F1 Simulator</h1>
      <h2 className={"text-2xl"}>Current order:</h2>
      <div className={"flex flex-wrap items-center justify-center gap-10"}>
        {!!data?.length &&
          data.map((driver) => <DriverCard key={driver.id} {...driver} />)}
      </div>
    </main>
  );
}
