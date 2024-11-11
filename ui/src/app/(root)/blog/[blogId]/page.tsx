/* eslint-disable @next/next/no-img-element */
"use client";
import HomUiCard from "@/components/pages-components/ui-card";
import {
  ArrowTopRightIcon,
  DownArrow,
  GrayHeart,
  GrayShare,
} from "@/constants/assets";
import useGetAllBlogsUserSide from "@/hooks/useGetAllBlogsUserSide";
import { useGetBlogById } from "@/hooks/useGetOneBlogById";
import { cn } from "@/lib/utils";

import { format } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function BlogDetailPage() {
  const { data: blogs } = useGetAllBlogsUserSide();
  const [viewAll, setViewAll] = useState<boolean>(false);
  const { blogId } = useParams<{ blogId: string }>();
  const { data: blogDetail } = useGetBlogById(blogId!);
  return (
    <main className="w-full h-ful">
      <section className="w-full h-full">
        <div className="w-full lg:h-[530px] md:h-[450px] sm:h-[300px] h-[280px]   relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={blogDetail?.thumbnailImage}
            alt=""
          />
          <div className="absolute left-0 bottom-0 lg:h-40 md:h-32 sm:h-24 h-20  w-full bg-detail-gradient flex justify-center items-center px-10 ">
            <h1 className="text-white font-semibold xl:text-5xl text-2xl lg:text-3xl md:text-3xl line-clamp-1  leading-snug font-kubsans-medium text-center">
              {blogDetail?.title}
            </h1>
          </div>
        </div>
      </section>
      <section
        className={cn("w-full  border-t border-borderColor border-b relative", {
          "lg:h-[650px] md:h-[600px] sm:h-[740px] h-[690px] overflow-hidden":
            !viewAll,
          "h-auto": viewAll,
        })}
      >
        <div className="container-width grid lg:grid-cols-10 grid-cols-1 relative  ">
          <div className="lg:col-span-7  flex flex-col lg:border-r border-borderColor relative ">
            <div className="flex flex-col gap-3 py-12 border-b  lg:pr-9">
              <div className="w-full">
                <h4 className="font-kubsans-medium text-lg">Introduction</h4>
              </div>
              <div>
                <p className="text-[#98989A]">{blogDetail?.description}</p>
              </div>
            </div>
            {blogDetail?.contents?.map((item, i) => (
              <div key={i} className="flex flex-col gap-3 py-12 lg:pr-9">
                <div className="w-full">
                  <h4 className="font-kubsans-medium text-2xl">{item.title}</h4>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[#98989A]">{item?.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-3">
            <div className="w-full xl:px-12 px-0 xl:py-14 py-7 border-b border-borderColor ">
              <div className="flex gap-3">
                <button className="px-4 bg-transparent h-12 flex justify-center items-center gap-2 border border-borderColor rounded-full">
                  <Image alt="" src={GrayHeart} width={20} height={20} />
                  <h4 className="text-[#98989A]">
                    {blogDetail?.likedUsers?.length}
                  </h4>
                </button>
                <button className="px-4 bg-transparent h-12 flex justify-center items-center gap-2 border border-borderColor rounded-full">
                  <Image alt="" src={GrayShare} width={20} height={20} />
                  <h4 className="text-[#98989A]">
                    {blogDetail?.sharedUsers?.length}
                  </h4>
                </button>
                <button className="px-4 bg-transparent h-12 flex justify-center items-center gap-2 border border-borderColor rounded-full">
                  <Image alt="" src={GrayShare} width={20} height={20} />
                  <h4 className="text-[#98989A]">204</h4>
                </button>
              </div>
            </div>
            <div className="w-full  xl:py-14 py-7  border-borderColor ">
              <div className="w-full xl:pl-12 pl-0 grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <div className="w-full h-24  flex flex-col gap-2">
                  <span className="text-[#98989A] font-kubsans-thin">
                    Publication Date
                  </span>
                  <span className="font-kubsans-medium">
                    {blogDetail?.createdAt &&
                      format(blogDetail?.createdAt, "PPP")}
                  </span>
                </div>
                <div className="w-full h-24  flex flex-col gap-2">
                  <span className="text-[#98989A] font-kubsans-thin">
                    Category
                  </span>
                  <span className="font-kubsans-medium">
                    {blogDetail?.category}
                  </span>
                </div>
                <div className="w-full h-24  flex flex-col gap-2">
                  <span className="text-[#98989A] font-kubsans-thin">
                    Reading Time
                  </span>
                  <span className="font-kubsans-medium">10 Min</span>
                </div>
                <div className="w-full h-24  flex flex-col gap-2">
                  <span className="text-[#98989A] font-kubsans-thin">
                    Author Name
                  </span>
                  <span className="font-kubsans-medium">
                    {blogDetail?.userDetail?.fullname}
                  </span>
                </div>
              </div>
              <div className="lg:mt-2 mt-1 xl:pl-12 pl-0 ">
                <div className="w-full">
                  <span className="text-[#98989A] font-kubsans-thin">
                    Table of Contents
                  </span>
                </div>
                <div className="p-5 rounded-[9px] bg-cardBackground mt-3 flex flex-col">
                  <ul className="list-disc ml-4 font-kubsans-thin text-sm flex flex-col gap-3">
                    {blogDetail?.contents?.map((item, I) => (
                      <li key={I + JSON.stringify(item)}>{item.title}</li>
                    ))}
                    {/* <li>AI in Diagnostic Imaging</li>
                    <li>Predictive Analytics and Disease Prevention</li>
                    <li>Personalized Treatment Plans</li>
                    <li>Drug Discovery and Research</li>
                    <li>AI in Telemedicine</li>
                    <li>Ethical Considerations</li>
                    <li>The Future of AI in Healthcare</li>
                    <li>Conclusion</li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!viewAll && (
          <>
            <div className="w-full h-48 absolute left-0 bottom-0  bg-detail-gradient-2 flex-center">
              <button
                onClick={() => setViewAll(!viewAll)}
                className="h-12 rounded-[8px] border border-borderColor  gap-2 px-4 text-[#98989A] text-sm flex items-center justify-center"
              >
                Read Full Blog
                <Image alt="" src={DownArrow} width={20} height={20} />
              </button>
            </div>
          </>
        )}
      </section>
      <section className="md:py-12 py-5">
        <div className="container-width">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-2xl font-kubsans-medium">Similar News</h3>
            <button className="h-12  px-5 rounded-[10px] border border-borderColor bg-background flex-center gap-2">
              <span className="text-sm text-[#98989A]">View All News</span>
              <Image
                src={ArrowTopRightIcon}
                width={19}
                height={19}
                alt="Arrow-top"
              />
            </button>
          </div>
          <div className="md:mt-12 mt-7 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogs?.map(
              (blog, I) =>
                blog._id !== blogId && (
                  <HomUiCard key={I + String(blog?._id)} blog={blog} />
                )
            )}
            {/* <HomUiCard />
            <HomUiCard /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
