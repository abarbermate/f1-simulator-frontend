"use client";

import { useDrivers } from "@/hooks/useDrivers";
import { DriverCard } from "../DriverCard/DriverCard";

export function DriverCards() {
  const { data: Drivers, isLoading, isError } = useDrivers();

  if (isLoading) return <>Loading...</>;
  if (isError) return <>Cannot load data. Please try again later.</>;

  const data = Drivers?.data;

  return (
    <>
      {!!data?.length &&
        data.map((driver) => <DriverCard key={driver.id} {...driver} />)}
    </>
  );
}
