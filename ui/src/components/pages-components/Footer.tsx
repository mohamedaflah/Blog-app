import { ArrowTopRightIcon } from "@/constants/assets";
import Image from "next/image";

export default function Footer() {
  return (
    <>
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
