import { ArrowTopRightIcon, LogoImage } from "@/constants/assets";
import Image from "next/image";

export default function Header() {
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
            <Image src={LogoImage} width={100} height={70} alt=""/>
            {/* <div className="flex items-center gap-2 h-10"></div> */}
        </div>
      </nav>
    </section>
  );
}
