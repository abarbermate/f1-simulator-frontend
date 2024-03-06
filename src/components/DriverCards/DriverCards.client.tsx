"use client";

import { useDrivers } from "@/hooks/useDrivers";
import { DriverCard } from "../DriverCard/DriverCard";

export function DriverCards() {
  const { data: Drivers, isLoading } = useDrivers();

  if (isLoading) return <>Loading...</>;

  const data = Drivers?.data;

  return (
    <>
      {!!data?.length &&
        data.map((driver) => <DriverCard key={driver.id} {...driver} />)}
    </>
  );
}
