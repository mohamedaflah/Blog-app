import { ArrowTopRightIcon, GrayHeart, GrayShare, WindMill } from "@/constants/assets";
import Image from "next/image";

export default function HomUiCard() {
  return (
    <div className="w-full min-h-80 rounded-[12px]  flex flex-col">
      <div className="w-full   h-52">
        <Image
          className="w-full h-full object-cover rounded-[12px]"
          alt=""
          src={WindMill}
        />
      </div>
      <div className="flex-1 pt-4 flex flex-col gap-5 justify-between">
        <div>
          <h4>A Decisive Victory for Progressive Policies</h4>
        </div>
        <div>
          <h4 className="text-[#98989A]">Politics</h4>
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
            <button className="px-7 w-full h-14 rounded-[10px] border border-borderColor gap-5 flex-center ">
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
