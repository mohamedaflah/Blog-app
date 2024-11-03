/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api/api.config";
import { IBlogPost } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function useGetAllBlogsUserSide() {
  return useQuery<any, Error, IBlogPost[], string[]>({
    queryKey: ["all-blogs-user"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/blogs/`);
      return data.blogs;
    },
  });
}
