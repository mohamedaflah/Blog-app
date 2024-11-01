/* eslint-disable @next/next/no-img-element */
"use client";
import HomUiCard from "@/components/pages-components/ui-card";
import {
  ArrowTopRightIcon,
  Expert,
  Global,
  GotoBtn,
  GrayHeart,
  GrayShare,
  Latest,
  LightFlash,
  Thought,
  WindMill,
} from "@/constants/assets";
import useGetAllBlogsUserSide from "@/hooks/useGetAllBlogsUserSide";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { data: blogs } = useGetAllBlogsUserSide();
  return (
    <main className="w-full">
      <section className="w-full min-h-[600px] border border-borderColor grid grid-cols-1 md:grid-cols-10">
        <div className="md:col-span-6 border-r border-borderColor relative flex flex-col">
          <div className="w-full h-full relative border-b border-borderColor">
            <div className="md:w-[92%] w-[92%]  h-full mx-auto md:absolute right-0 top-0 flex flex-col">
              <div className="w-full h-full flex flex-col justify-center md:gap-8 gap-2 pr-4">
                <div>
                  <span className="text-[#666666] font-semibold md:text-[18px] text-lg">
                    Your Journey to Tomorrow Begins Here
                  </span>
                </div>
                <div>
                  <h1 className="text-white font-semibold xl:text-6xl text-2xl lg:text-5xl md:text-3xl   leading-snug font-kubsans-medium">
                    Explore the Frontiers of Artificial Intelligence
                  </h1>
                </div>
                <div>
                  <span className="text-[#666666] font-semibold text-sm md:text-[16px] ">
                    Welcome to the epicenter of AI innovation. FutureTech AI
                    News is your passport to a world where machines think,
                    learn, and reshape the future. Join us on this visionary
                    expedition into the heart of AI.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-52 relative">
            <div className="md:w-[92%] w-[92%]  h-full mx-auto md:absolute right-0 top-0 flex flex-col">
              <div className="w-full h-full flex flex-row justify-center">
                <div className="w-full h-full border-r border-borderColor flex-center flex-col items-start gap-2 justify-start sm:justify-center pt-5 md:pt-0">
                  <h1 className="text-2xl sm:text-2xl md:text-4xl flex items-center font-kubsans-bold">
                    300 <span className="text-primaryYellow">+</span>
                  </h1>
                  <span className="text-[#98989A]">Resources available</span>
                </div>
                <div className="w-full h-full border-r border-borderColor flex-center items-start pl-12 flex-col gap-2 justify-start sm:justify-center pt-5 md:pt-0">
                  <h1 className="text-2xl sm:text-2xl md:text-4xl flex items-center font-kubsans-bold">
                    12k <span className="text-primaryYellow">+</span>
                  </h1>
                  <span className="text-[#98989A]">Total Downloads</span>
                </div>
                <div className="w-full h-full  flex-center items-start pl-12 flex-col gap-2 justify-start sm:justify-center pt-5 md:pt-0">
                  <h1 className="text-2xl sm:text-2xl md:text-4xl flex items-center font-kubsans-bold">
                    10k <span className="text-primaryYellow">+</span>
                  </h1>
                  <span className="text-[#98989A] ">Active Users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 h-full">
          <div
            className={`w-full h-full relative flex flex-row  items-end mt-2 md:mt-0 border-t md:border-none   `}
          >
            <Image
              className="w-[100%] h-[100%] absolute left-0 top-0 hidden"
              alt=""
              src={LightFlash}
            />
            <div className="w-full min-h-64  flex flex-col px-12 md:px-20 gap-4 z-10 ">
              <div className="flex min-h-16 p-2 w-56 border rounded-full items-center justify-between">
                <div className="size-14 border-2 rounded-full bg-grayBackground"></div>
                <div className="size-14 border-2 rounded-full -ml-2 bg-grayBackground"></div>
                <div className="size-14 border-2 rounded-full -ml-2 bg-grayBackground"></div>
                <div className="size-14 border-2 rounded-full -ml-2 bg-grayBackground"></div>
              </div>
              <div>
                <h2 className="font-kubsans-medium md:text-[18px] text-[14px]">
                  Explore 1000+ resources
                </h2>
              </div>
              <div>
                <h5 className="text-[#98989A] md:text-[14px] text-[12px]">
                  Over 1,000 articles on emerging tech trends and breakthroughs.
                </h5>
              </div>
              <div>
                <button className="h-12 px-4 rounded-[10px] flex-center border border-borderColor gap-2 ">
                  <span className="text-[#98989A] font-kubsans-regular">
                    Explore resources
                  </span>
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
        {/* <div className="container-width h-full"></div> */}
      </section>
      <section className="w-full ">
        <div className="container-width flex md:flex-row flex-col ">
          <div className="w-full py-9 md:border-r border-b md:border-b-0 border-borderColor flex flex-col gap-5">
            <div className="w-full">
              <Image width={34} height={34} alt="" src={Latest} />
            </div>
            <div className="flex justify-between items-center md:pr-12">
              <div className="flex flex-col">
                <div>
                  <span>Latest News Updates</span>
                </div>
                <div>
                  <span className="text-[#7E7E81] text-sm">Stay Current</span>
                </div>
              </div>
              <Image alt="" width={45} height={45} src={GotoBtn} />
            </div>
            <div>
              <span className="text-[#7E7E81]">
                Over 1,000 articles published monthly
              </span>
            </div>
          </div>
          <div className="w-full py-9 md:border-r border-b md:border-b-0 border-borderColor flex flex-col gap-5 md:px-12">
            <div className="w-full">
              <Image width={34} height={34} alt="" src={Expert} />
            </div>
            <div className="flex justify-between items-center pr-0">
              <div className="flex flex-col">
                <div>
                  <span>Expert Contributors</span>
                </div>
                <div>
                  <span className="text-[#7E7E81] text-sm">
                    Trusted Insights
                  </span>
                </div>
              </div>
              <Image alt="" width={45} height={45} src={GotoBtn} />
            </div>
            <div>
              <span className="text-[#7E7E81]">
                50+ renowned AI experts on our team
              </span>
            </div>
          </div>
          <div className="w-full py-9 flex flex-col gap-5 md:px-12">
            <div className="w-full">
              <Image width={34} height={34} alt="" src={Global} />
            </div>
            <div className="flex justify-between items-center pr-0">
              <div className="flex flex-col">
                <div>
                  <span>Global Readership</span>
                </div>
                <div>
                  <span className="text-[#7E7E81] text-sm">
                    Worldwide Impact
                  </span>
                </div>
              </div>
              <Image alt="" width={45} height={45} src={GotoBtn} />
            </div>
            <div>
              <span className="text-[#7E7E81]">2 million monthly readers</span>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:py-12 py-2 border-b md:border-b-0 border-borderColor">
        <div className="container-width">
          <div className="w-full">
            <h1 className="text-white font-semibold xl:text-6xl text-2xl lg:text-5xl md:text-3xl   leading-snug font-kubsans-medium">
              {"Today's"} Headlines: Stay{" "}
              <span className="md:hidden">Informed</span>
            </h1>
          </div>
          <div className="flex flex-row items-center gap-16 mt-5">
            <h1 className="text-white font-semibold xl:text-6xl text-2xl lg:text-5xl md:text-3xl   leading-snug font-kubsans-medium md:block hidden">
              <span className="">Informed</span>
            </h1>
            <div>
              <p className="text-[#98989A] md:text-1xl">
                Explore the latest news from around the world. We bring you
                up-to-the-minute updates on the most significant events, trends,
                and stories. Discover the world through our news coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:py-10 pb-5 border-y mt-5 border-t-0 md:border-t">
        <div className="container-width">
          <div className="w-full min-h-60 grid md:grid-cols-10 grid-cols-1 md:gap-12 gap-2">
            <div className="lg:col-span-3 md:col-span-4 md:min-h-60 min-h-52 overflow-hidden">
              <img
                alt=""
                className="w-full h-full object-cover rounded-[5px]"
                src={blogs?.[0]?.thumbnailImage}
              />
            </div>
            <div className="lg:col-span-7 md:col-span-6 flex flex-col items-start justify-center gap-8">
              <div>
                <h1 className="text-2xl font-kubsans-medium">
                  {blogs?.[0]?.title}
                </h1>
              </div>
              <div>
                <p className="text-[#98989A] line-clamp-3">
                  {blogs?.[0]?.description}
                </p>
              </div>
              <div className="flex gap-2 md:gap-8">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[#98989A]">Category</h4>
                  <h4 className="text-white">{blogs?.[0]?.category}</h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-[#98989A]">Publication Date</h4>
                  <h4 className="text-white">
                    {blogs?.[0]?.createdAt &&
                      format(blogs?.[0]?.createdAt, "PPP")}
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-[#98989A]">Author</h4>
                  <h4 className="text-white">{blogs?.[0]?.userDetail?.fullname}</h4>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="flex gap-3">
                  <button className="px-4 bg-cardBackground h-12 flex justify-center items-center gap-2 border border-borderColor rounded-full">
                    <Image alt="" src={GrayHeart} width={20} height={20} />
                    <h4 className="text-[#98989A]">14K</h4>
                  </button>
                  <button className="px-4 bg-cardBackground h-12 flex justify-center items-center gap-2 border border-borderColor rounded-full">
                    <Image alt="" src={GrayShare} width={20} height={20} />
                    <h4 className="text-[#98989A]">204</h4>
                  </button>
                </div>
                <Link href={`/blog/${blogs?.[0]?._id}`} className="px-4 h-14 rounded-[10px] border border-borderColor flex-center ">
                  <span className="text-[#98989A]">Read more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:py-10  border-y mt-5 border-t-0 md:border-t-0">
        <div className="container-width">
          <div className="w-full h-full grid grid-cols-1  lg:grid-cols-3 gap-8">
            <HomUiCard />
            <HomUiCard />
            <HomUiCard />
          </div>
        </div>
      </section>
      <section className="w-full md:py-10   border-y mt-5 border-t-0 md:border-t-0 border-b-0">
        <div className="container-width">
          <div className="w-full h-full grid grid-cols-1  lg:grid-cols-3 gap-8">
            <HomUiCard />
            <HomUiCard />
            <HomUiCard />
          </div>
        </div>
      </section>
      <section className="w-full bg-cardBackground md:py-16 py-4 mt-5 md:mt-0">
        <div className="container-width flex justify-between items-center md:flex-row flex-col">
          <div className="flex flex-col gap-4 items-start">
            <div className="px-3 text-sm h-8 rounded-[3px] flex-center bg-grayBackground">
              Featured Blog
            </div>
            <div>
              <h1 className="text-white font-semibold xl:text-5xl text-2xl lg:text-3xl md:text-3xl   leading-snug font-kubsans-medium">
                Visual Insights for the Modern Viewer
              </h1>
            </div>
          </div>
          <div className="w-full md:w-auto mt-5 md:mt-0">
            <button className="h-12 w-full px-5 rounded-[10px] border border-borderColor bg-background flex-center gap-2">
              <span className="text-sm text-[#98989A]">View All</span>
              <Image
                src={ArrowTopRightIcon}
                width={20}
                height={20}
                alt="Arrow-top"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="w-full   mt-5 md:mt-0 border-b">
        <div className="container-width grid gird-col-1 md:grid-cols-2 ">
          <div className="min-h-96 w-full md:border-r border-borderColor py-12 flex items-center md:items-start flex-col border-b md:border-b-0">
            <div className="md:w-[90%]  h-80 rounded-[10px] border overflow-hidden">
              <Image
                className="w-full h-80 object-cover "
                alt=""
                src={Thought}
              />
            </div>
            <div className="mt-4 flex flex-col gap-3 md:w-[90%]">
              <span className="font-kubsans-medium">
                Mars Exploration: Unveiling Alien Landscapes
              </span>
              <p className="text-sm text-[#98989A] font-kubsans-thin">
                Embark on a journey through the Red {"Planet's"} breathtaking
                landscapes and uncover the mysteries of Mars.
              </p>
            </div>
          </div>
          <div className="min-h-96 w-full  py-12 flex items-center md:items-end flex-col md:border-b-0">
            <div className="md:w-[90%]  h-80 rounded-[10px] border overflow-hidden">
              <Image
                className="w-full h-80 object-cover "
                alt=""
                src={Thought}
              />
            </div>
            <div className="mt-4 flex flex-col gap-3 md:w-[90%]">
              <span className="font-kubsans-medium">
                Mars Exploration: Unveiling Alien Landscapes
              </span>
              <p className="text-sm text-[#98989A] font-kubsans-thin">
                Embark on a journey through the Red {"Planet's"} breathtaking
                landscapes and uncover the mysteries of Mars.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full   mt-5 md:mt-0 border-b">
        <div className="container-width grid gird-col-1 md:grid-cols-2 ">
          <div className="min-h-96 w-full md:border-r border-borderColor border-b md:border-b-0 py-12 flex items-center md:items-start flex-col">
            <div className="md:w-[90%]  h-80 rounded-[10px] border overflow-hidden">
              <Image
                className="w-full h-80 object-cover "
                alt=""
                src={Thought}
              />
            </div>
            <div className="mt-4 flex flex-col gap-3 md:w-[90%]">
              <span className="font-kubsans-medium">
                Mars Exploration: Unveiling Alien Landscapes
              </span>
              <p className="text-sm text-[#98989A] font-kubsans-thin">
                Embark on a journey through the Red {"Planet's"} breathtaking
                landscapes and uncover the mysteries of Mars.
              </p>
            </div>
          </div>
          <div className="min-h-96 w-full  py-12 flex items-center md:items-end flex-col ">
            <div className="md:w-[90%]  h-80 rounded-[10px] border overflow-hidden">
              <Image
                className="w-full h-80 object-cover "
                alt=""
                src={Thought}
              />
            </div>
            <div className="mt-4 flex flex-col gap-3 md:w-[90%]">
              <span className="font-kubsans-medium">
                Mars Exploration: Unveiling Alien Landscapes
              </span>
              <p className="text-sm text-[#98989A] font-kubsans-thin">
                Embark on a journey through the Red {"Planet's"} breathtaking
                landscapes and uncover the mysteries of Mars.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
