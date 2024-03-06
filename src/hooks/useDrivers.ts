"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DriverProps } from "@/types";

function getDrivers() {
  return axios.get<DriverProps[]>(`/api/drivers`, {
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    params: {
      sorted: true,
    },
  });
}

export function useDrivers() {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: getDrivers,
  });
}
