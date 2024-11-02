/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api/api.config";
import { IUser } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsersForAdmin = () => {
  return useQuery<any, Error, IUser[], string[]>({
    queryKey: ["users-admin"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/user/`);
      return data?.users;
    },
  });
};
