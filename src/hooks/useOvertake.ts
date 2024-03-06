import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type OvertakeProps = {
  driverId: number;
  queryClient: ReturnType<typeof useQueryClient>;
};

function overtake({ driverId, queryClient }: OvertakeProps) {
  return axios
    .post(`/api/drivers/${driverId}/overtake`, null, {
      baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    })
    .then((res) => {
      void queryClient.invalidateQueries({ queryKey: ["drivers"] });
      return res.data;
    });
}

export function useOvertake() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["overtake"],
    mutationFn: (driverId: number) => overtake({ driverId, queryClient }),
    onError: (error: any) => {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message);
      }
    },
  });
}
