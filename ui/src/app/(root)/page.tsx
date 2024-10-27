import Header from "@/components/pages-components/Header";
import { Container, LightFlash } from "@/constants/assets";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <section className="w-full h-[600px] border border-borderColor grid grid-cols-1 md:grid-cols-10">
        <div className="md:col-span-6 border-r border-borderColor relative flex flex-col">
          <div className="w-full h-full relative border-b border-borderColor">
            <div className="md:w-[92%] w-[92%]  h-full mx-auto md:absolute right-0 top-0 flex flex-col">
              <div className="w-full h-full flex flex-col justify-center md:gap-8 gap-2 pr-4">
                <div>
                  <span className="text-[#666666] font-semibold md:text-[18px] text-sm">
                    Your Journey to Tomorrow Begins Here
                  </span>
                </div>
                <div>
                  <h1 className="text-white font-semibold md:text-6xl text-2xl  leading-snug font-kubsans-medium">
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
          <div className="w-full h-full relative flex flex-row items-end mt-2 md:mt-0 border-t md:border-none">
            <div className="w-full h-64  flex flex-col px-12 md:px-20 gap-4 ">
              <div className="flex min-h-16 p-2 w-56 border rounded-full items-center justify-between">
                <div className="size-14 border-2 rounded-full bg-grayBackground"></div>
                <div className="size-14 border-2 rounded-full -ml-2 bg-grayBackground"></div>
                <div className="size-14 border-2 rounded-full -ml-2 bg-grayBackground"></div> 
                <div className="size-14 border-2 rounded-full -ml-2 bg-grayBackground"></div>
              </div>
              <div>
                <h2 className="font-kubsans-medium md:text-[18px] text-[14px]">Explore 1000+ resources</h2>
              </div>
              <div>
                <h5 className="text-[#98989A] md:text-[14px] text-[12px]">Over 1,000 articles on emerging tech trends and breakthroughs.</h5>
              </div>
              <div>
              <button className="h-12 px-4 rounded-xl flex-center border border-borderColor ">
                <span className="text-[#98989A] font-kubsans-regular">Explore resources</span>
              </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-width h-full"></div> */}
      </section>
    </main>
  );
}
