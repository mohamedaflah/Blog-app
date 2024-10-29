"use client";
import { ArrowTopRightIcon, LogoImage } from "@/constants/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();
  return (
    <section>
      <header className="container-width  flex-center h-14 gap-3">
        <p className=" text-grayText md:text-[15px] text-[12px]">
          Subscribe to our Newsletter For New & latest Blogs and Resources
        </p>
        <Image src={ArrowTopRightIcon} width={20} height={20} alt="Arrow-top" />
      </header>
      <nav className="w-full h-16 border-y border-borderColor bg-cardBackground">
        <div className="container-width h-full flex items-center justify-between">
          <Image
            src={LogoImage}
            width={100} className="cursor-pointer"
            height={70}
            alt=""
            onClick={() => router.push("/")}
          />
          {/* <div className="flex items-center gap-2 h-10"></div> */}
        </div>
      </nav>
    </section>
  );
}
