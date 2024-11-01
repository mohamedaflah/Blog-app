import { axiosInstance } from "@/api/api.config";
import { IBlogPost } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useGetBlogById(blogId: string) {
  return useQuery<any, Error, IBlogPost, string[]>({
    queryKey: ["blogbyid", blogId],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/blogs/get-blogbyid/${blogId}`);
      return data?.blog;
    },
  });
}
