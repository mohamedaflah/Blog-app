"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HospitalImage } from "@/constants/assets";
import useGetUserBlogs from "@/hooks/useGetUserBlogs";
import useUserStore from "@/store";
import { format } from "date-fns";
import { Edit, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

import { useState } from "react";
export default function MyAccount() {
  const { user } = useUserStore();
  const [blogType, setBlogType] = useState<"all" | "published" | "unpublished">(
    "all"
  );
  const { data: blogs } = useGetUserBlogs(blogType);
  return (
    <main className="py-8 scrollbar-thin">
      <section className="container-width ">
        <div className="max-h-screen overflow-y-auto scrollbar-none grid-cols-1 grid lg:grid-cols-10 gap-7">
          <div className="lg:col-span-3 sticky top-0 ">
            <div className="w-full p-5 bg-cardBackground rounded-[5px] space-y-2">
              <div className="flex flex-col gap-2">
                <span className="text-sm capitalize">full name</span>
                <div className="px-4 flex items-center  h-10 border-2 border-borderColor">
                  {user?.fullname}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm capitalize">designation</span>
                <div className="px-4 flex items-center  h-10 border-2 border-borderColor">
                  {user?.designation}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm capitalize">email</span>
                <div className="px-4 flex items-center  h-10 border-2 border-borderColor">
                  {user?.email}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm capitalize">joined on</span>
                <div className="px-4 flex items-center  h-10 border-2 border-borderColor">
                  {user?.createdAt && format(user?.createdAt, "PPP")}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 bg-cardBackground p-4 rounded-[5px] ">
            <div className="w-full h-full relative">
              <Tabs defaultValue={blogType} className="w-full h-10 sticky">
                <TabsList className="w-full h-10">
                  <TabsTrigger
                    className="w-full h-[95%]"
                    value="all"
                    onClick={() => setBlogType("all")}
                  >
                    All Blogs
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full h-[95%]"
                    value="published"
                    onClick={() => setBlogType("published")}
                  >
                    Published
                  </TabsTrigger>
                  <TabsTrigger
                    className="w-full h-[95%]"
                    value="unpublished"
                    onClick={() => setBlogType("unpublished")}
                  >
                    Unpublished
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {blogs?.map((blog) => (
                <div key={blog?._id} className="w-full flex flex-col my-4">
                  <div className="w-full flex flex-col gap-1">
                    <span>{blog?.title}</span>
                    <div className="w-full h-80 border">
                      <img
                        src={blog?.thumbnailImage}
                        className="w-full h-full object-cover rounded-[3px]"
                        alt=""
                      />
                    </div>
                    <div className="line-clamp-2">
                      <p className="line-clamp-2 text-sm font-kubsans-thin">
                        {blog?.description}
                      </p>
                    </div>
                    <div className="w-full flex items-center justify-between mt-3">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          className=" bg-red-600 rounded-[5px] flex-center size-7"
                        >
                          <Trash2 className="w-4" />
                        </button>
                        <Link
                          href={`/edit-blog/${blog?._id}`}
                          type="button"
                          className=" bg-blue-600 rounded-[5px] flex-center size-7"
                        >
                          <Edit className="w-4" />
                        </Link>
                        <Select>
                          <SelectTrigger className="w-[120px] h-8 text-sm rounded-[3px] bg-grayBackground">
                            <SelectValue placeholder={blog?.publishStatus} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="publish">Publish</SelectItem>
                            <SelectItem value="unpublish">Unpublish</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="">
                        <button className="px-3 h-9 border border-borderColor text-sm bg-background  rounded-[2px]">
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 p-3 h-20 sticky bg-cardBackground top-0 right-0">
            <Link
              href={"/create-blog"}
              className="h-12 px-4 bg-background flex items-center w-full gap-5 justify-between rounded-[5px] border border-borderColor"
            >
              <span>Post a new Blog</span>
              <Plus className="w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
