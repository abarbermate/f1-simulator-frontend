"use client";

import { useOvertake } from "@/hooks/useOvertake";

type OvertakeButtonProps = {
  id: number;
};

export function OvertakeButton({ id }: OvertakeButtonProps) {
  const { mutate } = useOvertake();
  const handleOvertake = () => mutate(id);
  return (
    <button
      className={
        "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      }
      onClick={handleOvertake}
    >
      Overtake
    </button>
  );
}
