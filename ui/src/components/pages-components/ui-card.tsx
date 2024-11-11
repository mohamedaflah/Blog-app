/* eslint-disable @next/next/no-img-element */
import { ArrowTopRightIcon, GrayHeart, GrayShare } from "@/constants/assets";
import { IBlogPost } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomUiCard({ blog }: { blog: IBlogPost }) {
  const router = useRouter();
  return (
    <div className="w-full min-h-80 rounded-[12px]  flex flex-col">
      <div className="w-full   h-52">
        <img
          className="w-full h-full object-cover rounded-[12px]"
          alt=""
          src={blog?.thumbnailImage}
        />
      </div>
      <div className="flex-1 pt-4 flex flex-col gap-5 justify-between">
        <div>
          <h4>{blog?.title}</h4>
        </div>
        <div>
          <h4 className="text-[#98989A]">{blog?.subTitle}</h4>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-4 bg-cardBackground h-12 flex justify-center items-center gap-2 border border-borderColor rounded-full">
              <Image alt="" src={GrayHeart} width={20} height={20} />
              <h4 className="text-[#98989A]">14K</h4>
            </button>
            <button className="px-4 bg-cardBackground h-12 flex justify-center items-center gap-2 border border-borderColor rounded-full">
              <Image alt="" src={GrayShare} width={20} height={20} />
              <h4 className="text-[#98989A]">14K</h4>
            </button>
          </div>
          <div className="">
            <button
              onClick={() => router.push(`/blog/${blog?._id}`)}
              className="px-7 w-full h-14 rounded-[10px] border border-borderColor gap-5 flex-center "
            >
              <span className="text-[#98989A]">Read more</span>
              <Image
                src={ArrowTopRightIcon}
                width={20}
                height={20}
                alt="Arrow-top"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
