import Image from "next/image";
import { DriverProps } from "@/types";

export function DriverCard({
  id,
  code,
  firstname,
  lastname,
  team,
  country,
  imgUrl,
  place,
}: DriverProps) {
  return (
    <div
      className={
        "flex flex-col items-center justify-center gap-4 p-4 rounded-xl bg-blue-950 max-w-80 w-full relative"
      }
    >
      <Image
        className={"w-fit max-w-52"}
        src={process.env.NEXT_PUBLIC_BACKEND_URL + imgUrl}
        alt={`${firstname} ${lastname} picture`}
        width={200}
        height={200}
      />
      <span
        className={"text-xl font-bold text-blue-300 absolute top-6 left-6"}
      >{`#${place}`}</span>
      <Image
        src={`https://flagsapi.com/${country}/flat/24.png`}
        alt={country}
        width={24}
        height={24}
        className={"absolute top-6 right-6"}
      />
      <h3 className={"text-3xl font-bold"}>{`${firstname} ${lastname}`}</h3>
      <span className={"text-xl font-bold text-blue-300"}>({code})</span>
      <p className={"text-l"}>
        Team: <b>{team}</b>
      </p>
    </div>
  );
}
