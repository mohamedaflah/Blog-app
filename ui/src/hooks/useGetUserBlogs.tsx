/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "@/api/api.config";
import { IBlogPost } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function useGetUserBlogs(type: string) {
  return useQuery<any, Error, IBlogPost[], string[]>({
    queryKey: ["my-blog", type],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/blogs/get-myblog`);
      if (type == "all") {
        return data.blogs;
      } else if (type == "published") {
        return data.blogs?.filter(
          (blog: IBlogPost) => blog.publishStatus == "published"
        );
      } else {
        return data.blogs?.filter(
          (blog: IBlogPost) => blog.publishStatus == "unpublished"
        );
      }
    },
  });
}
