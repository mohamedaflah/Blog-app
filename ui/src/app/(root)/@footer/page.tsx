import { ArrowTopRightIcon, GotoBtn, LogoImageOnly } from "@/constants/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <section className="w-full bg-cardBackground md:py-16 py-4 mt-5 md:mt-0">
        <div className="container-width flex flex-col lg:gap-12 gap-5">
          <div className="w-full hidden md:flex gap-10 items-center min-h-28 ">
            <div className="">
              <Image alt="" src={LogoImageOnly} className="size-28" />
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-6">
              <div className="px-3 text-sm h-8 rounded-[3px] flex-center bg-grayBackground">
                Learn, Connect, and Innovate
              </div>
              <div>
                <h1 className="text-white font-semibold xl:text-5xl text-2xl lg:text-3xl md:text-3xl   leading-snug font-kubsans-medium">
                  Be Part of the Future Tech Revolution
                </h1>
              </div>
              <div>
                <p className="text-[#7E7E81]">
                  Immerse yourself in the world of future technology. Explore
                  our comprehensive resources, connect with fellow tech
                  enthusiasts, and drive innovation in the industry. Join a
                  dynamic community of forward-thinkers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4 md:hidden  items-center min-h-28 ">
            <div className="w-full flex items-center gap-4">
              <Image alt="" src={LogoImageOnly} className="size-16" />
              <div className="px-3 text-sm h-8 rounded-[3px] flex-center bg-grayBackground">
                Learn, Connect, and Innovate
              </div>
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-6">
              <div>
                <h1 className="text-white font-semibold xl:text-5xl text-2xl lg:text-3xl md:text-3xl   leading-snug font-kubsans-medium">
                  Be Part of the Future Tech Revolution
                </h1>
              </div>
              <div>
                <p className="text-[#7E7E81] text-sm">
                  Immerse yourself in the world of future technology. Explore
                  our comprehensive resources.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 p-4 bg-background rounded-[10px] gap-4">
            <div className="w-full h-48 rounded-[10px]  bg-cardBackground border border-borderColor flex flex-col px-8 justify-center gap-3">
              <div className="w-full flex justify-between">
                <span className="font-kubsans-medium text-lg">
                  Resource Access
                </span>
                <Image alt="" width={45} height={45} src={GotoBtn} />
              </div>
              <div className="pr-10 ">
                <p className="text-[#98989A] text-sm">
                  Visitors can access a wide range of resources, including
                  ebooks, whitepapers, reports.
                </p>
              </div>
            </div>
            <div className="w-full h-48 rounded-[10px] border border-borderColor bg-cardBackground flex flex-col px-8 justify-center gap-3">
              <div className="w-full flex justify-between">
                <span className="font-kubsans-medium text-lg">
                  Community Forum
                </span>
                <Image alt="" width={45} height={45} src={GotoBtn} />
              </div>
              <div className="pr-2 ">
                <p className="text-[#98989A] text-sm">
                  Join our active community forum to discuss industry trends,
                  share insights, and collaborate with peers.
                </p>
              </div>
            </div>
            <div className="w-full h-48 rounded-[10px] border border-borderColor bg-cardBackground flex flex-col px-8 justify-center gap-3">
              <div className="w-full flex justify-between">
                <span className="font-kubsans-medium text-lg">Tech Events</span>
                <Image alt="" width={45} height={45} src={GotoBtn} />
              </div>
              <div className="pr-2 ">
                <p className="text-[#98989A] text-sm">
                  Stay updated on upcoming tech events, webinars, and
                  conferences to enhance your knowledge.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4 items-start">
            <div className="px-3 text-sm h-8 rounded-[3px] flex-center bg-grayBackground">
              Featured Blog
            </div>
            <div>
              <h1 className="text-white font-semibold xl:text-5xl text-2xl lg:text-3xl md:text-3xl   leading-snug font-kubsans-medium">
                Visual Insights for the Modern Viewer
              </h1>
            </div>
          </div> */}
        </div>
      </section>
      <footer className="md:py-12 py-2">
        <style>
          {`
            .gradient-button {
              border: 1px solid transparent;
              background-image: linear-gradient(to right, rgb(31, 41, 55), rgb(251, 191, 36));
              color: white;
            }
          `}
        </style>
        <section className="container-width grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="min-h-80 w-full  flex flex-col gap-5">
            <div>
              <span className="font-kubsans-medium">Home</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#666666]">Features</div>
              <div className="text-[#666666]">Blogs</div>
              <div className="text-[#666666] flex items-center gap-2">
                Resources
                <button className="border-2 text-sm font-kubsans-thin border-gradient-button h-8 px-3 rounded-[9px] text-white">
                  New
                </button>
              </div>
              <div className="text-[#666666]">Testimonial</div>
              <div className="text-[#666666]">Contact us</div>
              <div className="text-[#666666]">Newsletter</div>
            </div>
          </div>
          <div className="min-h-80 w-full  flex flex-col gap-5">
            <div>
              <span className="font-kubsans-medium">News</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#666666]">Trending stories</div>
              <div className="text-[#666666]">Featured Videos</div>
              <div className="text-[#666666]">Technology</div>

              <div className="text-[#666666]">Health</div>
              <div className="text-[#666666]">Politics</div>
              <div className="text-[#666666]">Environment</div>
            </div>
          </div>
          <div className="min-h-80 w-full  flex flex-col gap-5">
            <div>
              <span className="font-kubsans-medium">Blogs</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#666666]">Quantum Computing</div>
              <div className="text-[#666666]">AI Ethics</div>
              <div className="text-[#666666]">Space Exploration</div>
              <div className="text-[#666666] flex items-center gap-2">
                Biotechnology
                <button className="border-2 text-sm font-kubsans-thin border-gradient-button h-8 px-3 rounded-[9px] text-white">
                  New
                </button>
              </div>
              <div className="text-[#666666]">Renewable Energy</div>
              <div className="text-[#666666]">Biohacking</div>
            </div>
          </div>
          <div className="min-h-80 w-full  flex flex-col gap-5">
            <div>
              <span className="font-kubsans-medium">Podcasts</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[#666666]">AI Revolution</div>
              <div className="text-[#666666] flex items-center gap-2">
                AI Revolution
                <button className="border-2 text-sm font-kubsans-thin border-gradient-button h-8 px-3 rounded-[9px] text-white">
                  New
                </button>
              </div>
              <div className="text-[#666666]">TechTalk AI</div>
              <div className="text-[#666666]">AI Conversations</div>
            </div>
          </div>
          <div className="min-h-80 w-full  flex flex-col gap-5">
            <div>
              <span className="font-kubsans-medium">Resources</span>
            </div>
            <div className="flex lg:flex-col flex-row flex-wrap gap-3 items-start">
              <button className="h-10 px-4 rounded-[9px] border border-borderColor flex-center gap-2 text-[#98989A] text-sm">
                Whitepapers
                <Image
                  src={ArrowTopRightIcon}
                  width={18}
                  height={18}
                  alt="Arrow-top"
                />
              </button>
              <button className="h-10 px-4 rounded-[9px] border border-borderColor flex-center gap-2 text-[#98989A] text-sm ">
                Ebooks
                <Image
                  src={ArrowTopRightIcon}
                  width={18}
                  height={18}
                  alt="Arrow-top"
                />
              </button>
              <button className="h-10 px-4 rounded-[9px] border border-borderColor flex-center gap-2 text-[#98989A] text-sm">
                Reports
                <Image
                  src={ArrowTopRightIcon}
                  width={18}
                  height={18}
                  alt="Arrow-top"
                />
              </button>
              <button className="h-10 px-4 rounded-[9px] border border-borderColor flex-center gap-2 text-[#98989A] text-sm">
                Research Papers
                <Image
                  src={ArrowTopRightIcon}
                  width={18}
                  height={18}
                  alt="Arrow-top"
                />
              </button>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
