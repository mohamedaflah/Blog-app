import { axiosInstance } from "@/api/api.config";
import { useQuery } from "@tanstack/react-query";

export const useGetAllBLogsAdmin = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/blogs/getblogs-admin`);
      return data.blogs;
    },
  });
};
